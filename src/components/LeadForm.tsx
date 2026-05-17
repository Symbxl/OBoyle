"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

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

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(true);
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  void compact;

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
    if (window.hcaptcha) initCaptcha();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setError("Please accept the terms to continue.");
      return;
    }
    if (!captchaToken) {
      setError("Please complete the captcha.");
      return;
    }
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: `${fd.get("first") ?? ""} ${fd.get("last") ?? ""}`.trim(),
      email: fd.get("email"),
      phone: fd.get("phone"),
      service: "General estimate",
      message: fd.get("message"),
      captchaToken
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error((await res.json()).error || "Something went wrong");
      setStatus("success");
      form.reset();
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
      <div id="quote" className="rounded-2xl bg-white p-8 ring-1 ring-moss-100 shadow-lift text-center">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-moss-100 text-moss-700">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5 9-11" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-moss-900">Thanks — we got it.</h3>
        <p className="mt-2 text-moss-900/70">A member of the O&apos;Boyle team will reach out within 1 business day to schedule your free walkthrough.</p>
        <button onClick={() => setStatus("idle")} className="btn-secondary mt-6 w-full">Submit another request</button>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://js.hcaptcha.com/1/api.js?render=explicit"
        strategy="lazyOnload"
        onLoad={initCaptcha}
      />
      <form
        id="quote"
        onSubmit={onSubmit}
        className="rounded-2xl bg-white ring-1 ring-moss-100 shadow-lift overflow-hidden"
      >
        {/* Step indicator */}
        <div className="px-6 sm:px-7 pt-6 pb-5 flex items-center gap-6 text-sm border-b border-moss-100/80">
          <span className="inline-flex items-center gap-2 font-semibold text-moss-900">
            <span className="h-2.5 w-2.5 rounded-full bg-moss-700" />
            Tell us about your project
          </span>
          <span className="inline-flex items-center gap-2 font-medium text-moss-900/40">
            <span className="h-2.5 w-2.5 rounded-full ring-2 ring-moss-200" />
            We reach out in 24h
          </span>
        </div>

        {/* Heading */}
        <div className="px-6 sm:px-7 pt-7 pb-2">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-moss-900 leading-[1.05]">
            Free Landscape Estimate
          </h3>
          <p className="mt-3 text-moss-900/80">
            Excited to talk with you about{" "}
            <Link href="/portfolio" className="font-bold text-moss-800 underline underline-offset-4 decoration-2 hover:text-moss-900">
              your project
            </Link>
            .
          </p>
          <p className="text-moss-900/70">
            Family-owned since 1973 — a member of our team responds within 1 business day.
          </p>
        </div>

        {/* Fields */}
        <div className="px-6 sm:px-7 pt-5 pb-6 space-y-3">
          {/* Phone with country code */}
          <div className="flex rounded-lg ring-1 ring-moss-200 focus-within:ring-2 focus-within:ring-moss-500 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 px-3.5 bg-moss-50 border-r border-moss-200 text-sm font-semibold text-moss-900">
              <span aria-hidden>🇺🇸</span> +1
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(555) 123-4567"
              className="flex-1 px-3.5 py-3 text-black placeholder:text-moss-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field name="first" placeholder="First name *" required autoComplete="given-name" />
            <Field name="last" placeholder="Last name *" required autoComplete="family-name" />
          </div>

          <Field name="email" type="email" placeholder="Email address *" required autoComplete="email" />

          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Project details, property size, timing… (optional)"
            className="w-full rounded-lg ring-1 ring-moss-200 px-3.5 py-3 text-black placeholder:text-moss-400 focus:outline-none focus:ring-2 focus:ring-moss-500 resize-none"
          />

          {/* hCaptcha */}
          <div className="rounded-lg bg-moss-50/60 ring-1 ring-moss-100 p-3 flex justify-center">
            <div ref={captchaRef} />
          </div>

          {/* Consent */}
          <label className="mt-2 flex items-start gap-3 text-sm text-moss-900/80 cursor-pointer">
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
              By entering your information, you consent to your data being saved in accordance with our{" "}
              <a href="#" className="font-bold text-moss-900 underline underline-offset-4 decoration-2 hover:text-moss-700">Terms</a>
              {" "}&{" "}
              <a href="#" className="font-bold text-moss-900 underline underline-offset-4 decoration-2 hover:text-moss-700">Privacy Policy</a>.
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group mt-2 w-full rounded-xl bg-gradient-to-b from-moss-600 to-moss-800 px-5 py-4 text-base font-bold text-white shadow-soft transition hover:from-moss-700 hover:to-moss-900 disabled:opacity-70"
          >
            <span className="inline-flex items-center justify-center gap-2">
              {status === "submitting" ? "Sending…" : (
                <>
                  Continue
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </>
              )}
            </span>
          </button>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
        </div>
      </form>
    </>
  );
}

function Field({
  name,
  type = "text",
  placeholder,
  required,
  autoComplete
}: {
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      className="w-full rounded-lg ring-1 ring-moss-200 px-3.5 py-3 text-black placeholder:text-moss-400 focus:outline-none focus:ring-2 focus:ring-moss-500"
    />
  );
}
