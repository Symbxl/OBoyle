"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Landscape design & installation",
  "Hardscape (patios, walkways, walls)",
  "Lawn & garden maintenance",
  "Seasonal cleanup",
  "Outdoor living (kitchen, fire pit)",
  "Landscape lighting",
  "Commercial property care",
  "Something else"
];

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error((await res.json()).error || "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
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
    <form
      id="quote"
      onSubmit={onSubmit}
      className={`relative overflow-hidden rounded-2xl bg-white ring-1 ring-moss-100 shadow-lift ${compact ? "" : ""}`}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-moss-500 via-moss-700 to-moss-800" />
      <div className="px-6 pt-7 pb-5 border-b border-moss-100/80">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-sand-500 animate-pulse" />
          Free Estimate
        </span>
        <h3 className="mt-2 font-serif text-2xl font-bold text-moss-900 leading-tight">Tell us about your property.</h3>
        <p className="mt-1 text-sm text-moss-900/70">We&apos;ll respond within 1 business day. No pressure, no hard sell.</p>
      </div>

      <div className="px-6 py-5 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="label">Full name</label>
            <input id="name" name="name" required className="input" placeholder="Jane Doe" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="phone" className="label">Phone</label>
            <input id="phone" name="phone" type="tel" required className="input" placeholder="(973) 555-0100" autoComplete="tel" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="label">Email</label>
          <input id="email" name="email" type="email" required className="input" placeholder="you@example.com" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="address" className="label">Property address (optional)</label>
          <input id="address" name="address" className="input" placeholder="Street, City" />
        </div>
        <div>
          <label htmlFor="service" className="label">What do you need?</label>
          <select id="service" name="service" required defaultValue="" className="input">
            <option value="" disabled>Choose a service…</option>
            {services.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="label">Details (optional)</label>
          <textarea id="message" name="message" rows={3} className="input" placeholder="Project scope, timing, photos to follow…" />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group relative w-full rounded-md bg-moss-700 px-5 py-3.5 text-base font-bold text-white shadow-soft transition hover:bg-moss-800 disabled:opacity-70"
        >
          <span className="inline-flex items-center justify-center gap-2">
            {status === "submitting" ? "Sending…" : (
              <>
                Request My Estimate
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </>
            )}
          </span>
        </button>
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}
        <p className="text-center text-xs text-moss-900/60">We respect your privacy. Your details stay with the O&apos;Boyle team.</p>
      </div>
    </form>
  );
}
