import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ServicesLeadForm from "@/components/ServicesLeadForm";
import { portfolio, company } from "@/lib/media";

export const metadata: Metadata = {
  title: `Services — Landscape Design, Hardscape & Maintenance | ${company.shortName}`,
  description: `Full-service landscape design and installation, hardscape, and lawn & garden maintenance across ${company.servingArea}.`
};

const groups = [
  {
    id: "landscape",
    title: "Landscape Design & Installation",
    body: "Plantings designed for your soil, your light, and the way you actually use your yard. We grade it, plant it, and stand behind it.",
    img: portfolio[5].src,
    services: ["Shrub Installation", "Perennial Gardens", "Seasonal Flowers", "Grading", "Sod", "Landscape Lighting"]
  },
  {
    id: "hardscape",
    title: "Hardscape Design & Installation",
    body: "Patios, walkways, walls, and outdoor living spaces built on real foundations — not cosmetic work that lifts after one winter.",
    img: portfolio[6].src,
    services: ["Patios", "Walkways", "Driveways", "Walls", "Outdoor Kitchens", "Outdoor Living Spaces", "Fire Pits"]
  },
  {
    id: "maintenance",
    title: "Lawn & Landscape Maintenance",
    body: "Residential and commercial accounts kept on a steady schedule by crews who actually know your property.",
    img: portfolio[18].src,
    services: ["Weekly Mowing", "Lawn Treatments", "Aerating", "Topsoil & Seeding", "Seasonal Cleanups", "Bed Maintenance", "Tree & Shrub Pruning", "Mulching"]
  }
];

export default function ServicesPage() {
  return (
    <>
      {groups.map((g, idx) => (
        <section id={g.id} key={g.id} className={`py-20 md:py-24 ${idx % 2 === 0 ? "bg-white" : "bg-moss-50/70"}`}>
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className={`relative aspect-[5/4] rounded-2xl overflow-hidden shadow-soft ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image src={g.img} alt={g.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <SectionHeader eyebrow={`Service ${String(idx + 1).padStart(2, "0")}`} title={g.title} />
              <p className="mt-5 text-moss-900/80 text-lg">{g.body}</p>
              <ul className="mt-7 grid grid-cols-2 gap-3">
                {g.services.map((s) => (
                  <li key={s} className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 ring-1 ring-moss-100 font-semibold text-moss-900">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-moss-100 text-moss-700">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11" /></svg>
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">Talk to us about this</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-moss-50/40 to-white">
        {/* Decorative washes */}
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-[460px] w-[460px] rounded-full bg-moss-100/70 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-sand-200/50 blur-3xl" />

        <div className="container-x py-16 md:py-20 lg:py-24 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-moss-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-moss-800 ring-1 ring-moss-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-sand-500" />
              Services
            </div>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-moss-900">
              Everything we do,<br />
              <span className="relative inline-block text-moss-700">
                in one place.
                <span aria-hidden className="absolute -bottom-1 left-0 right-0 h-2.5 -z-10 bg-sand-300/70 rounded-full" />
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-moss-900/75 leading-relaxed">
              Three core service areas — landscape design, hardscape, and maintenance —
              run by the same family team that&apos;s been doing this across {company.servingArea} since 1973.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <a href="#landscape" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-moss-800 ring-1 ring-moss-200 hover:bg-moss-50">Landscape Design</a>
              <a href="#hardscape" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-moss-800 ring-1 ring-moss-200 hover:bg-moss-50">Hardscape</a>
              <a href="#maintenance" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-moss-800 ring-1 ring-moss-200 hover:bg-moss-50">Maintenance</a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-widest text-moss-700/80">
              <span className="inline-flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11"/></svg>
                Licensed
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11"/></svg>
                Fully Insured
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11"/></svg>
                Free Estimates
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:pl-6">
            <ServicesLeadForm />
          </div>
        </div>
      </section>

      <FAQSection />

      <CTASection />
    </>
  );
}
