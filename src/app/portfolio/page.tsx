import Image from "next/image";
import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { portfolio, company } from "@/lib/media";

export const metadata: Metadata = {
  title: `Portfolio — ${company.shortName}`,
  description: `Recent landscape, hardscape, and outdoor-living projects across ${company.servingArea}.`
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-moss-950 text-white">
        <div className="container-x py-20 md:py-24">
          <span className="eyebrow !text-sand-300"><span className="h-px w-6 bg-sand-300" />Portfolio</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold tracking-tight">Properties we&apos;ve loved on.</h1>
          <p className="mt-5 max-w-2xl text-lg text-moss-50/85">
            A small selection of recent work — landscape design, hardscape, outdoor living, and ongoing maintenance.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHeader eyebrow="Gallery" title="Recent projects" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolio.map((p) => (
            <figure key={p.src} className="group relative overflow-hidden rounded-xl bg-moss-50 shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image src={p.src} alt={p.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition group-hover:scale-105" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-moss-950/85 to-transparent p-4 flex items-end justify-between">
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-sand-200">{p.category}</span>
                  <span className="block text-sm font-semibold text-white">{p.title}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection
        title="Could your property be next?"
        subtitle="Tell us what you have in mind. We&apos;ll come walk it and give you a free, honest estimate."
      />
    </>
  );
}
