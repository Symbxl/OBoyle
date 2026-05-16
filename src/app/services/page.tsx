import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
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
      <section className="relative isolate overflow-hidden bg-moss-950 text-white">
        <Image src={portfolio[19].src} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-moss-950 via-moss-900/85 to-moss-900/60" />
        <div className="container-x relative py-20 md:py-28">
          <span className="eyebrow !text-sand-300"><span className="h-px w-6 bg-sand-300" />Services</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold tracking-tight">Everything we do, in one place.</h1>
          <p className="mt-5 max-w-2xl text-lg text-moss-50/85">
            Three core practice areas, run by the same family team that&apos;s been doing this since 1973.
          </p>
        </div>
      </section>

      {groups.map((g, idx) => (
        <section id={g.id} key={g.id} className={`py-20 md:py-24 ${idx % 2 === 0 ? "bg-white" : "bg-moss-50/70"}`}>
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className={`relative aspect-[5/4] rounded-2xl overflow-hidden shadow-soft ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image src={g.img} alt={g.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <SectionHeader eyebrow={`Practice ${String(idx + 1).padStart(2, "0")}`} title={g.title} />
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

      <CTASection />
    </>
  );
}
