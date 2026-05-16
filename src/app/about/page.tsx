import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { team, portfolio, company } from "@/lib/media";

export const metadata: Metadata = {
  title: `About — ${company.shortName}`,
  description: `Family-owned, second-generation landscape company in ${company.address.city}, NJ. ${company.yearsExperience} years caring for properties across ${company.servingArea}.`
};

const values = [
  { title: "Family-run, on purpose.", body: "Two generations of O'Boyles on the job. The owner answers the phone." },
  { title: "Slow craft.", body: "We design and build for the long haul — not for the photo on the way out." },
  { title: "Honest scope.", body: "If a smaller project is what your property actually needs, that's what we'll quote." },
  { title: "Crews who know you.", body: "Steady crews on the same routes — fewer surprises, more accountability." }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-moss-950 text-white">
        <div className="container-x py-20 md:py-24">
          <span className="eyebrow !text-sand-300"><span className="h-px w-6 bg-sand-300" />About</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold tracking-tight">
            Caring for {company.address.city} properties since 1973.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-moss-50/85">
            Martin O&apos;Boyle Sr started this company over fifty years ago on a simple promise: do landscape
            work the right way, treat people fairly, and keep showing up. His son runs it now, with the same
            standard.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container-x py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-soft">
          <Image src={portfolio[12].src} alt="Completed O'Boyle project" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <SectionHeader eyebrow="Our story" title="A family business, second generation." />
          <div className="mt-6 space-y-4 text-moss-900/85">
            <p>
              We started in 1973 with one truck and a mower route. {company.yearsExperience} years later,
              we design and install landscapes and hardscape, run a full lawn and garden maintenance
              business, and stock Brookside Garden Center right on Broad Street.
            </p>
            <p>
              The business is still family-owned and family-run. Most of our work is in {company.servingArea} —
              estates, homes, and commercial properties where ownership wants a partner, not a vendor.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-moss-50/70 py-20">
        <div className="container-x">
          <SectionHeader align="center" eyebrow="The Team" title="The people on every job." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl overflow-hidden bg-white ring-1 ring-moss-100 shadow-soft text-center">
                <div className="relative aspect-[4/5]">
                  <Image src={m.img} alt={m.name} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="font-serif text-xl font-bold text-moss-900">{m.name}</div>
                  <div className="text-sm font-semibold text-moss-600 uppercase tracking-widest">{m.role}</div>
                  <p className="mt-3 text-sm text-moss-900/75">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20">
        <SectionHeader eyebrow="What we stand for" title="How we work, in four lines." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl bg-white p-6 ring-1 ring-moss-100 shadow-soft">
              <h3 className="font-serif text-xl font-bold text-moss-900">{v.title}</h3>
              <p className="mt-2 text-moss-900/75">{v.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/portfolio" className="btn-primary">See our work</Link>
          <Link href="/contact" className="btn-secondary">Get in touch</Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
