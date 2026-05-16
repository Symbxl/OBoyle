import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { gardenCenter, company, portfolio } from "@/lib/media";

export const metadata: Metadata = {
  title: `Brookside Garden Center — ${company.shortName}`,
  description: `Nursery plants, trees, shrubs, houseplants, seasonal annuals, herbs, vegetables, fresh-cut flowers, and bulk mulch on Broad Street in ${company.address.city}.`
};

const stock = [
  { title: "Trees & Shrubs", body: "Selected for our growing zone — varieties that actually thrive in Northern New Jersey." },
  { title: "Perennials & Annuals", body: "Seasonal plantings rotated throughout the year so the front of the house always looks loved." },
  { title: "Houseplants", body: "A rotating indoor selection — from low-light beginners to statement pieces." },
  { title: "Herbs & Vegetables", body: "Edible starts in the spring and summer for kitchen gardens and raised beds." },
  { title: "Fresh-Cut Flowers", body: "Rotated seasonally. Also available for delivery through our florist site." },
  { title: "Bulk Mulch", body: "Pick up by the yard or have it delivered for your spring refresh." }
];

export default function GardenCenterPage() {
  return (
    <>
      <section className="bg-moss-950 text-white">
        <div className="container-x py-20 md:py-24 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow !text-sand-300"><span className="h-px w-6 bg-sand-300" />Brookside Garden Center</span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold tracking-tight">A neighborhood garden center, 30+ years strong.</h1>
            <p className="mt-5 max-w-xl text-lg text-moss-50/85">
              Right on Broad Street in {company.address.city}. Trees, shrubs, perennials, houseplants, herbs,
              fresh-cut flowers, and bulk mulch — staffed by people who garden.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(`${company.address.line1}, ${company.address.city}, ${company.address.state} ${company.address.zip}`)}`} target="_blank" rel="noreferrer" className="btn-accent">Get directions</a>
              <a href={gardenCenter.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10">
                Order flowers online →
              </a>
            </div>
          </div>
          <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-lift">
            <Image src={gardenCenter.exterior} alt="Brookside Garden Center exterior" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* What's in stock */}
      <section className="container-x py-20">
        <SectionHeader eyebrow="What we stock" title="A full selection, chosen for our zone." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stock.map((s) => (
            <div key={s.title} className="rounded-xl bg-white p-6 ring-1 ring-moss-100 shadow-soft">
              <h3 className="font-serif text-xl font-bold text-moss-900">{s.title}</h3>
              <p className="mt-2 text-moss-900/75">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visit */}
      <section className="bg-moss-50/70 py-20">
        <div className="container-x grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeader eyebrow="Visit us" title="551 Broad Street, Bloomfield." />
            <div className="mt-6 space-y-3 text-moss-900/85">
              <p>Call ahead for stock questions or large quantities — we&apos;re happy to walk you through what&apos;s in this week.</p>
              <p><strong>Address:</strong> {company.address.line1}, {company.address.city}, {company.address.state} {company.address.zip}</p>
              <p><strong>Phone:</strong> <a href={`tel:${company.phoneDigits}`} className="text-moss-700 underline">{company.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${company.email}`} className="text-moss-700 underline">{company.email}</a></p>
            </div>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary">Ask about a delivery</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[8, 21, 5, 11].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={portfolio[i].src} alt={portfolio[i].title} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Looking for a delivery or a planting plan?" subtitle="We&apos;ll bring the truck and the plan. Tell us what you&apos;ve got." />
    </>
  );
}
