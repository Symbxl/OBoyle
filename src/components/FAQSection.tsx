import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { company } from "@/lib/media";

const faqs = [
  {
    q: "What areas do you serve?",
    a: `We work across ${company.servingArea} — primarily residential properties, with select commercial maintenance accounts. If you're on the edge of our range, ask anyway; we'll be straight with you about whether it's a fit.`
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Site visits and written estimates are free for most projects. For larger design/build work we'll walk the property with you and put together a scoped proposal — no obligation."
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — fully licensed and insured, with workers' comp and general liability coverage. We can provide a certificate of insurance on request before work begins."
  },
  {
    q: "How long have you been in business?",
    a: "Since 1973. Same family, three generations, working the same towns. That continuity is why most of our work comes from referrals and repeat clients."
  },
  {
    q: "Do you handle weekly maintenance and one-time installs?",
    a: "Both. We run a maintenance route (mowing, treatments, cleanups, bed care) alongside the design/build side. Plenty of clients start with one and add the other."
  },
  {
    q: "What's the timeline for a typical landscape or hardscape project?",
    a: "It depends on scope and season, but most installs are scheduled 3–8 weeks out once the design is finalized. We'll give you a realistic window up front — not a date we can't hit."
  },
  {
    q: "Do you guarantee plant material and hardscape work?",
    a: "Plant material installed by us is warrantied through the first growing season when maintained on our care recommendations. Hardscape work carries a workmanship warranty — specifics are in the proposal."
  },
  {
    q: "How do I get started?",
    a: "Fill out the form on this page or call us. We'll set up a site visit, talk through what you're after, and follow up with an estimate."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 md:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeader eyebrow="FAQ" title="Questions, answered straight." subtitle="The things we get asked the most — answered the way we'd answer them on the phone." />
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">Ask us something else</Link>
          </div>
        </div>
        <ul className="divide-y divide-moss-100 rounded-2xl bg-moss-50/40 ring-1 ring-moss-100">
          {faqs.map((f) => (
            <li key={f.q}>
              <details className="group p-6 md:p-7 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-lg md:text-xl font-semibold text-moss-900">
                  <span>{f.q}</span>
                  <span aria-hidden className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-moss-700 ring-1 ring-moss-200 transition-transform duration-200 group-open:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </summary>
                <p className="mt-4 text-moss-900/80 leading-relaxed">{f.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
