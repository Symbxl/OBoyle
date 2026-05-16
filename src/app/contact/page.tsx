import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { company } from "@/lib/media";

export const metadata: Metadata = {
  title: `Contact — ${company.shortName}`,
  description: `Get a free estimate. Call ${company.phone}, email ${company.email}, or visit us at ${company.address.line1}, ${company.address.city} ${company.address.state}.`
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-moss-950 text-white">
        <div className="container-x py-20 md:py-24">
          <span className="eyebrow !text-sand-300"><span className="h-px w-6 bg-sand-300" />Contact</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold tracking-tight">Let&apos;s talk about your property.</h1>
          <p className="mt-5 max-w-2xl text-lg text-moss-50/85">
            Call, email, or send the form. A member of the O&apos;Boyle team will reach out within one
            business day to schedule a free walkthrough.
          </p>
        </div>
      </section>

      <section className="container-x py-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <h2 className="h-display text-2xl md:text-3xl">How to reach us</h2>
          <p className="mt-3 text-moss-900/75">Pick whatever&apos;s easiest. We pick up the phone.</p>

          <div className="mt-8 grid gap-5">
            <a href={`tel:${company.phoneDigits}`} className="group flex items-center gap-4 rounded-xl border border-moss-100 bg-white p-5 shadow-soft hover:border-moss-300">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-moss-100 text-moss-700">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-moss-600">Call</div>
                <div className="text-xl font-bold text-moss-900 group-hover:text-moss-700">{company.phone}</div>
              </div>
            </a>

            <a href={`mailto:${company.email}`} className="flex items-center gap-4 rounded-xl border border-moss-100 bg-white p-5 shadow-soft hover:border-moss-300">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-moss-100 text-moss-700">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6 12 13 2 6" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-moss-600">Email</div>
                <div className="text-base font-bold text-moss-900">{company.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-moss-100 bg-white p-5 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-moss-100 text-moss-700">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-moss-600">Visit</div>
                <div className="text-base font-bold text-moss-900">{company.address.line1}, {company.address.city} {company.address.state} {company.address.zip}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-moss-100 bg-white p-5 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-moss-100 text-moss-700">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-moss-600">Serving</div>
                <div className="text-base font-bold text-moss-900">{company.servingArea}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-moss-50 p-5 text-sm text-moss-900/85">
            Fully Licensed & Insured · LIC #{company.license}
          </div>
        </div>

        <div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
