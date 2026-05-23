"use client";

import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    hcaptcha?: {
      render: (
        container: HTMLElement,
        opts: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark";
        }
      ) => number;
      reset: (id?: number) => void;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? "";

const positions = [
  { value: "Landscape Crew Member", desc: "Plantings, installs, cleanups, daily maintenance." },
  { value: "Hardscape / Masonry Crew", desc: "Patios, walkways, walls, stonework." },
  { value: "Lawn Maintenance Technician", desc: "Mowing, edging, pruning, route work." },
  { value: "Crew Foreman", desc: "Lead a crew, run job sites day-to-day." },
  { value: "Equipment Operator", desc: "Skid steers, mini-ex, loaders." },
  { value: "Garden Center Associate", desc: "Customer service & plant care at Brookside." },
  { value: "Other / General Application", desc: "Tell us what you do best." }
];

const employmentTypes = ["Full-time", "Part-time", "Seasonal"];
const experienceLevels = ["None — entry level", "1–2 years", "3–5 years", "5+ years"];
const licenseOptions = ["Yes", "No", "Yes — including CDL"];
const startOptions = ["Immediately", "Within 2 weeks", "Within a month", "More than a month"];
const skillOptions = [
  "Mowing & trimming",
  "Planting & garden care",
  "Hardscape / masonry",
  "Equipment operation",
  "Snow removal",
  "Irrigation",
  "Tree & shrub pruning",
  "Bilingual (English / Spanish)"
];

const TOTAL_STEPS = 5;

type FormData = {
  position: string;
  employmentType: string;
  experience: string;
  driversLicense: string;
  skills: string[];
  startDate: string;
  weekendsOk: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

const initialData: FormData = {
  position: "",
  employmentType: "",
  experience: "",
  driversLicense: "",
  skills: [],
  startDate: "",
  weekendsOk: "",
  first: "",
  last: "",
  email: "",
  phone: "",
  city: "",
  message: ""
};

export default function JobApplicationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(true);
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const toggleSkill = (s: string) =>
    setData((d) => ({
      ...d,
      skills: d.skills.includes(s) ? d.skills.filter((x) => x !== s) : [...d.skills, s]
    }));

  const stepValid = useMemo(() => {
    switch (step) {
      case 1:
        return data.position !== "" && data.employmentType !== "";
      case 2:
        return data.experience !== "" && data.driversLicense !== "";
      case 3:
        return data.startDate !== "" && data.weekendsOk !== "";
      case 4:
        return (
          data.first.trim() !== "" &&
          data.last.trim() !== "" &&
          /.+@.+\..+/.test(data.email) &&
          data.phone.trim() !== ""
        );
      default:
        return true;
    }
  }, [step, data]);

  function initCaptcha() {
    if (!window.hcaptcha || !captchaRef.current || widgetIdRef.current !== null || !SITE_KEY) return;
    widgetIdRef.current = window.hcaptcha.render(captchaRef.current, {
      sitekey: SITE_KEY,
      callback: (token) => setCaptchaToken(token),
      "expired-callback": () => setCaptchaToken(""),
      "error-callback": () => setCaptchaToken("")
    });
  }

  useEffect(() => {
    if (step === 5 && window.hcaptcha) initCaptcha();
  }, [step]);

  function next() {
    if (!stepValid) {
      setError("Please complete the highlighted fields to continue.");
      return;
    }
    setError(null);
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }

  function back() {
    setError(null);
    setStep((s) => Math.max(1, s - 1));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setError("Please accept the terms to continue.");
      return;
    }
    if (SITE_KEY && !captchaToken) {
      setError("Please complete the captcha.");
      return;
    }
    setStatus("submitting");
    setError(null);
    const payload = {
      name: `${data.first} ${data.last}`.trim(),
      email: data.email,
      phone: data.phone,
      city: data.city,
      position: data.position,
      employmentType: data.employmentType,
      experience: data.experience,
      driversLicense: data.driversLicense,
      skills: data.skills,
      startDate: data.startDate,
      weekendsOk: data.weekendsOk,
      message: data.message,
      captchaToken
    };
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error((await res.json()).error || "Something went wrong");
      setStatus("success");
      setData(initialData);
      setCaptchaToken("");
      if (window.hcaptcha && widgetIdRef.current !== null) window.hcaptcha.reset(widgetIdRef.current);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
      setCaptchaToken("");
      if (window.hcaptcha && widgetIdRef.current !== null) window.hcaptcha.reset(widgetIdRef.current);
    }
  }

  if (status === "success") {
    return (
      <div id="apply" className="rounded-2xl bg-white p-8 ring-1 ring-moss-100 shadow-lift text-center">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-moss-100 text-moss-700">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5 9-11" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-moss-900">Application received.</h3>
        <p className="mt-2 text-moss-900/70">
          Thanks for your interest in joining the O&apos;Boyle team. We&apos;ll review your application and
          reach out within a few business days if it looks like a fit.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setStep(1);
          }}
          className="btn-secondary mt-6 w-full"
        >
          Submit another application
        </button>
      </div>
    );
  }

  const progressPct = (step / TOTAL_STEPS) * 100;

  return (
    <>
      <Script
        src="https://js.hcaptcha.com/1/api.js?render=explicit"
        strategy="lazyOnload"
        onLoad={initCaptcha}
      />
      <form
        id="apply"
        onSubmit={onSubmit}
        className="rounded-2xl bg-white ring-1 ring-moss-100 shadow-lift overflow-hidden"
      >
        {/* Heading + progress */}
        <div className="px-6 sm:px-7 pt-7 pb-5 border-b border-moss-100/80">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-moss-900 leading-[1.1]">
              Apply to join the crew
            </h3>
            <span className="shrink-0 rounded-full bg-moss-50 px-3 py-1 text-xs font-bold text-moss-800">
              Step {step} of {TOTAL_STEPS}
            </span>
          </div>
          <div className="mt-4 h-1.5 w-full rounded-full bg-moss-100 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-moss-600 to-moss-800 transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="px-6 sm:px-7 pt-6 pb-6 space-y-5">
          {step === 1 && (
            <Step
              title="What role interests you?"
              subtitle="We're mainly hiring full-time and part-time crew members. Pick the best fit."
            >
              <div className="grid gap-2.5">
                {positions.map((p) => (
                  <RadioCard
                    key={p.value}
                    name="position"
                    value={p.value}
                    title={p.value}
                    desc={p.desc}
                    checked={data.position === p.value}
                    onChange={() => update("position", p.value)}
                  />
                ))}
              </div>
              <Field label="Employment type">
                <div className="grid grid-cols-3 gap-2">
                  {employmentTypes.map((t) => (
                    <ChipRadio
                      key={t}
                      label={t}
                      checked={data.employmentType === t}
                      onClick={() => update("employmentType", t)}
                    />
                  ))}
                </div>
              </Field>
            </Step>
          )}

          {step === 2 && (
            <Step title="Your experience" subtitle="Don't worry — we train the right people from day one.">
              <Field label="Years of relevant experience">
                <div className="grid grid-cols-2 gap-2">
                  {experienceLevels.map((e) => (
                    <ChipRadio
                      key={e}
                      label={e}
                      checked={data.experience === e}
                      onClick={() => update("experience", e)}
                    />
                  ))}
                </div>
              </Field>

              <Field label="Valid driver's license?">
                <div className="grid grid-cols-3 gap-2">
                  {licenseOptions.map((l) => (
                    <ChipRadio
                      key={l}
                      label={l}
                      checked={data.driversLicense === l}
                      onClick={() => update("driversLicense", l)}
                    />
                  ))}
                </div>
              </Field>

              <Field label="Skills you bring (select any that apply)">
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map((s) => (
                    <ChipToggle
                      key={s}
                      label={s}
                      checked={data.skills.includes(s)}
                      onClick={() => toggleSkill(s)}
                    />
                  ))}
                </div>
              </Field>
            </Step>
          )}

          {step === 3 && (
            <Step title="Your availability" subtitle="Tell us when you can hit the ground running.">
              <Field label="When can you start?">
                <div className="grid grid-cols-2 gap-2">
                  {startOptions.map((s) => (
                    <ChipRadio
                      key={s}
                      label={s}
                      checked={data.startDate === s}
                      onClick={() => update("startDate", s)}
                    />
                  ))}
                </div>
              </Field>

              <Field label="Open to occasional weekends or early mornings?">
                <div className="grid grid-cols-3 gap-2">
                  {["Yes", "Sometimes", "No"].map((s) => (
                    <ChipRadio
                      key={s}
                      label={s}
                      checked={data.weekendsOk === s}
                      onClick={() => update("weekendsOk", s)}
                    />
                  ))}
                </div>
              </Field>
            </Step>
          )}

          {step === 4 && (
            <Step title="Your contact info" subtitle="How should we reach you?">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <TextInput
                  name="first"
                  placeholder="First name *"
                  value={data.first}
                  onChange={(v) => update("first", v)}
                  autoComplete="given-name"
                  required
                />
                <TextInput
                  name="last"
                  placeholder="Last name *"
                  value={data.last}
                  onChange={(v) => update("last", v)}
                  autoComplete="family-name"
                  required
                />
              </div>

              <TextInput
                name="email"
                type="email"
                placeholder="Email address *"
                value={data.email}
                onChange={(v) => update("email", v)}
                autoComplete="email"
                required
              />

              <div className="flex rounded-lg ring-1 ring-moss-200 focus-within:ring-2 focus-within:ring-moss-500 overflow-hidden">
                <span className="inline-flex items-center gap-1.5 px-3.5 bg-moss-50 border-r border-moss-200 text-sm font-semibold text-moss-900">
                  <span aria-hidden>🇺🇸</span> +1
                </span>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(555) 123-4567 *"
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="flex-1 px-3.5 py-3 text-black placeholder:text-moss-400 focus:outline-none"
                />
              </div>

              <TextInput
                name="city"
                placeholder="City / town you live in"
                value={data.city}
                onChange={(v) => update("city", v)}
                autoComplete="address-level2"
              />
            </Step>
          )}

          {step === 5 && (
            <Step title="Anything else you'd like to share?" subtitle="Optional — but it helps us get to know you.">
              <textarea
                name="message"
                rows={5}
                value={data.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Certifications, what kind of work you enjoy, why O'Boyle… (optional)"
                className="w-full rounded-lg ring-1 ring-moss-200 px-3.5 py-3 text-black placeholder:text-moss-400 focus:outline-none focus:ring-2 focus:ring-moss-500 resize-none"
              />

              <Summary data={data} />

              <div className="rounded-lg bg-moss-50/60 ring-1 ring-moss-100 p-3 flex justify-center">
                <div ref={captchaRef} />
              </div>

              <label className="flex items-start gap-3 text-sm text-moss-900/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="sr-only peer"
                  aria-label="Accept terms"
                />
                <span
                  aria-hidden
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded transition ${
                    consent ? "bg-moss-700 ring-1 ring-moss-700" : "bg-white ring-1 ring-moss-300"
                  }`}
                >
                  <svg
                    className={`h-3.5 w-3.5 text-white transition ${consent ? "opacity-100" : "opacity-0"}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l5 5 9-11" />
                  </svg>
                </span>
                <span>
                  By submitting this application, you consent to your information being reviewed by our
                  hiring team in accordance with our{" "}
                  <a href="#" className="font-bold text-moss-900 underline underline-offset-4 decoration-2 hover:text-moss-700">Terms</a>
                  {" "}&{" "}
                  <a href="#" className="font-bold text-moss-900 underline underline-offset-4 decoration-2 hover:text-moss-700">Privacy Policy</a>.
                </span>
              </label>
            </Step>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          {/* Nav buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={back}
              disabled={step === 1}
              className="inline-flex items-center gap-2 rounded-lg border border-moss-200 px-4 py-2.5 text-sm font-semibold text-moss-800 transition hover:bg-moss-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="m11 19-7-7 7-7" />
              </svg>
              Back
            </button>

            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={next}
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-moss-600 to-moss-800 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:from-moss-700 hover:to-moss-900"
              >
                Continue
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-moss-600 to-moss-800 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:from-moss-700 hover:to-moss-900 disabled:opacity-70"
              >
                {status === "submitting" ? "Sending…" : (
                  <>
                    Submit Application
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

function Step({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="font-serif text-xl font-bold text-moss-900">{title}</h4>
        {subtitle && <p className="mt-1 text-sm text-moss-900/70">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-moss-900">{label}</div>
      {children}
    </div>
  );
}

function RadioCard({
  name,
  value,
  title,
  desc,
  checked,
  onChange
}: {
  name: string;
  value: string;
  title: string;
  desc: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition ${
        checked
          ? "border-moss-700 bg-moss-50/70 ring-2 ring-moss-700/30"
          : "border-moss-200 hover:border-moss-400 hover:bg-moss-50/40"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        aria-hidden
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition ${
          checked ? "border-moss-700 bg-moss-700" : "border-moss-300 bg-white"
        }`}
      >
        <span className={`h-2 w-2 rounded-full bg-white transition ${checked ? "opacity-100" : "opacity-0"}`} />
      </span>
      <span>
        <span className="block font-semibold text-moss-900">{title}</span>
        <span className="block text-sm text-moss-900/70">{desc}</span>
      </span>
    </label>
  );
}

function ChipRadio({
  label,
  checked,
  onClick
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
        checked
          ? "border-moss-700 bg-moss-700 text-white"
          : "border-moss-200 bg-white text-moss-800 hover:border-moss-400 hover:bg-moss-50"
      }`}
    >
      {label}
    </button>
  );
}

function ChipToggle({
  label,
  checked,
  onClick
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${
        checked
          ? "border-moss-700 bg-moss-700 text-white"
          : "border-moss-200 bg-white text-moss-800 hover:border-moss-400 hover:bg-moss-50"
      }`}
    >
      {checked && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12l5 5 9-11" />
        </svg>
      )}
      {label}
    </button>
  );
}

function TextInput({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  autoComplete
}: {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg ring-1 ring-moss-200 px-3.5 py-3 text-black placeholder:text-moss-400 focus:outline-none focus:ring-2 focus:ring-moss-500"
    />
  );
}

function Summary({ data }: { data: FormData }) {
  const rows: [string, string][] = [
    ["Position", data.position],
    ["Type", data.employmentType],
    ["Experience", data.experience],
    ["Driver's license", data.driversLicense],
    ["Skills", data.skills.length ? data.skills.join(", ") : "—"],
    ["Start", data.startDate],
    ["Weekends / early starts", data.weekendsOk],
    ["Name", `${data.first} ${data.last}`.trim()],
    ["Email", data.email],
    ["Phone", data.phone],
    ["City", data.city || "—"]
  ];
  return (
    <div className="rounded-xl border border-moss-100 bg-moss-50/40 p-4">
      <div className="text-xs font-bold uppercase tracking-[0.16em] text-moss-700">Review</div>
      <dl className="mt-2 grid gap-1.5 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[140px_1fr] gap-3">
            <dt className="text-moss-900/60">{k}</dt>
            <dd className="text-moss-900 font-medium">{v || "—"}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
