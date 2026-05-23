import type { Metadata } from "next";
import JobApplicationForm from "@/components/JobApplicationForm";
import { company } from "@/lib/media";

export const metadata: Metadata = {
  title: `Careers — ${company.shortName}`,
  description: `Join the ${company.shortName} team. We're hiring landscape, hardscape, and maintenance crew across ${company.servingArea}. Apply online in minutes.`
};

const benefits = [
  {
    title: "Steady, year-round work",
    body: "Landscaping, hardscape, snow management, and garden center work keeps our crews busy through every season."
  },
  {
    title: "Learn a real trade",
    body: "Work alongside experienced foremen and learn design, masonry, and horticulture from the ground up."
  },
  {
    title: "Family-owned, since 1973",
    body: `${company.yearsExperience} years in business. We treat our crew the way we treat our customers — with respect.`
  },
  {
    title: "Room to grow",
    body: "Most of our foremen and managers started on a crew. Show up, work hard, and there's a path forward."
  }
];

const openings = [
  { role: "Landscape Crew Member", type: "Full-time · Seasonal", desc: "Plantings, installs, cleanups, and daily maintenance across residential and commercial properties." },
  { role: "Hardscape / Masonry Crew", type: "Full-time", desc: "Patios, walkways, retaining walls, and stonework. Experience a plus — we'll train the right person." },
  { role: "Lawn Maintenance Technician", type: "Full-time · Seasonal", desc: "Mowing, edging, pruning, and seasonal cleanups on scheduled maintenance routes." },
  { role: "Crew Foreman", type: "Full-time", desc: "Lead a crew, manage daily job sites, and keep projects on schedule and on standard." },
  { role: "Garden Center Associate", type: "Part-time · Seasonal", desc: "Help customers, care for plants, and keep Brookside Garden Center looking its best." }
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-moss-950 text-white">
        <div className="container-x py-20 md:py-24">
          <span className="eyebrow !text-sand-300"><span className="h-px w-6 bg-sand-300" />Careers</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold tracking-tight">Grow your career with us.</h1>
          <p className="mt-5 max-w-2xl text-lg text-moss-50/85">
            For over {company.yearsExperience} years, O&apos;Boyle Landscaping has built outdoor spaces across{" "}
            {company.servingArea}. We&apos;re always looking for hardworking people who take pride in their
            craft. Apply below — it only takes a few minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#apply" className="btn-accent">Apply now</a>
            <a href="#openings" className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
              See open roles
            </a>
          </div>
        </div>
      </section>

      {/* Why work here */}
      <section className="container-x py-16">
        <h2 className="h-display text-2xl md:text-3xl">Why work at O&apos;Boyle</h2>
        <p className="mt-3 max-w-2xl text-moss-900/75">
          We&apos;re a tight-knit, family-owned team — not a faceless franchise. Here&apos;s what that means for you.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-moss-100 bg-white p-5 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-moss-100 text-moss-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 12-9 0 7-4 12-9 12-2 0-3-1-3-1" />
                  <path d="M2 22c1-5 4-9 9-12" />
                </svg>
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-moss-900">{b.title}</h3>
              <p className="mt-2 text-sm text-moss-900/75">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section id="openings" className="bg-moss-50">
        <div className="container-x py-16">
          <h2 className="h-display text-2xl md:text-3xl">Open positions</h2>
          <p className="mt-3 max-w-2xl text-moss-900/75">
            Don&apos;t see your exact role? Apply anyway — select &ldquo;General Application&rdquo; on the form
            and tell us what you do best.
          </p>
          <div className="mt-8 grid gap-4">
            {openings.map((o) => (
              <div key={o.role} className="flex flex-col gap-4 rounded-xl border border-moss-100 bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-lg font-bold text-moss-900">{o.role}</h3>
                    <span className="rounded-full bg-moss-100 px-3 py-1 text-xs font-semibold text-moss-700">{o.type}</span>
                  </div>
                  <p className="mt-2 text-sm text-moss-900/75">{o.desc}</p>
                </div>
                <a href="#apply" className="shrink-0 self-start rounded-md bg-moss-800 px-4 py-2 text-sm font-bold text-white hover:bg-moss-900 sm:self-center">
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="container-x py-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <h2 className="h-display text-2xl md:text-3xl">How hiring works</h2>
          <p className="mt-3 text-moss-900/75">A simple, straightforward process — no endless interviews.</p>

          <ol className="mt-8 grid gap-5">
            {[
              { n: "1", t: "Submit your application", d: "Fill out the form. It takes just a few minutes." },
              { n: "2", t: "We review and call", d: "If it looks like a fit, we'll reach out within a few business days." },
              { n: "3", t: "Meet the team", d: "A quick conversation about the work, the schedule, and pay." },
              { n: "4", t: "Get started", d: "Join a crew and start building great outdoor spaces." }
            ].map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-moss-700 font-bold text-white">{s.n}</span>
                <div>
                  <div className="font-serif text-lg font-bold text-moss-900">{s.t}</div>
                  <p className="text-sm text-moss-900/75">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-xl bg-moss-50 p-5 text-sm text-moss-900/85">
            Questions about a role? Call us at{" "}
            <a href={`tel:${company.phoneDigits}`} className="font-bold text-moss-900 underline underline-offset-4 decoration-2 hover:text-moss-700">
              {company.phone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${company.email}`} className="font-bold text-moss-900 underline underline-offset-4 decoration-2 hover:text-moss-700">
              {company.email}
            </a>.
            <div className="mt-2">
              O&apos;Boyle Landscaping is an equal opportunity employer.
            </div>
          </div>
        </div>

        <div>
          <JobApplicationForm />
        </div>
      </section>
    </>
  );
}
