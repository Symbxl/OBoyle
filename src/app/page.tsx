import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroSlideshow from "@/components/HeroSlideshow";
import LeadForm from "@/components/LeadForm";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";
import { portfolio, team, gardenCenter, company, hero } from "@/lib/media";

export const metadata: Metadata = {
  title: `${company.shortName} — Landscape Design, Hardscape & Lawn Care in ${company.address.city}, NJ`,
  description: `${company.yearsExperience} years of family-owned landscaping. Design, hardscape, and maintenance throughout ${company.servingArea}. Free estimates.`
};

const services = [
  {
    title: "Landscape Design",
    body: "Plantings, gardens, sod, grading, and landscape lighting designed for the long haul.",
    img: portfolio[5].src,
    href: "/services#landscape"
  },
  {
    title: "Hardscape",
    body: "Patios, walkways, driveways, walls, outdoor kitchens, and fire pits — built to outlast the seasons.",
    img: portfolio[6].src,
    href: "/services#hardscape"
  },
  {
    title: "Lawn & Garden Care",
    body: "Weekly mowing, lawn treatments, aerating, seeding, bed work, and seasonal cleanups.",
    img: portfolio[18].src,
    href: "/services#maintenance"
  }
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden bg-cover bg-center lg:min-h-[88vh] lg:flex lg:items-center"
        style={{ backgroundImage: `url('${hero.primary}')` }}
      >
        <HeroSlideshow />
        <div className="container-x py-20 md:py-28 lg:py-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 px-4 py-2">
              <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
                <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.6 39.6 16.2 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2c-.4.4 6.6-4.8 6.6-14.8 0-1.3-.1-2.4-.4-3.5z" />
              </svg>
              <div className="flex items-center gap-1.5">
                <div className="flex" aria-label="3.5 out of 5 stars">
                  {[0, 1, 2].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                    <defs>
                      <linearGradient id="halfStarHero">
                        <stop offset="50%" stopColor="#FBBF24" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0.35)" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#halfStarHero)"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white">3.5</span>
              </div>
              <span className="text-sm text-white/85">35+ Google reviews</span>
            </div>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Landscapes built<br />
              <span className="text-sand-300">to grow on you.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-moss-50/90">
              {company.yearsExperience} years of design, hardscape, and meticulous lawn care across {company.servingArea}.
              Residential and commercial, treated with the same craftsmanship.
            </p>
            <span className="eyebrow !text-sand-300 mt-6">
              <span className="h-px w-6 bg-sand-300" />
              Family owned · Since 1973
            </span>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-accent">Get a Free Estimate</Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10">
                See the Portfolio
              </Link>
            </div>
          </div>
          <div className="lg:pl-6">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="container-x py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:items-end mb-12">
          <SectionHeader
            eyebrow="What We Do"
            title="Three things, done right."
            subtitle="Most of our work falls into one of three buckets. All of it is held to the same standard since 1973."
          />
          <div className="md:text-right">
            <Link href="/services" className="btn-secondary">All services →</Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="group rounded-2xl overflow-hidden bg-white ring-1 ring-moss-100 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <div className="relative aspect-[5/4]">
                <Image src={s.img} alt={s.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-moss-950/65 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="font-serif text-2xl font-bold text-white">{s.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-moss-900/75">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-moss-700">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="bg-moss-50/70 py-20 md:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="A small selection"
                title="Some recent work we&apos;re proud of."
                subtitle="From a courtyard refresh to a full estate, we treat every property like our own."
              />
              <div className="mt-8">
                <Link href="/portfolio" className="btn-primary">Browse full portfolio</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[3, 9, 16, 13].map((i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl shadow-soft">
                  <Image src={portfolio[i].src} alt={portfolio[i].title} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GARDEN CENTER TEASER */}
      <section className="container-x py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-soft">
            <Image src={gardenCenter.exterior} alt="Brookside Garden Center" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Visit Brookside" title="Our garden center, on Broad Street." />
            <p className="mt-4 text-moss-900/75">
              For over 30 years, our Brookside Garden Center has stocked nursery plants, trees, shrubs,
              houseplants, seasonal annuals, herbs, vegetables, fresh-cut flowers, and bulk mulch — all
              chosen for our growing zone, with help from staff who actually garden.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/garden-center" className="btn-primary">Garden Center info</Link>
              <a href={gardenCenter.url} target="_blank" rel="noreferrer" className="btn-secondary">Order flowers →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-moss-50/70 py-20 md:py-24">
        <div className="container-x">
          <SectionHeader align="center" eyebrow="The Team" title="Two generations of O&apos;Boyles." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl overflow-hidden bg-white ring-1 ring-moss-100 shadow-soft text-center">
                <div className="relative aspect-[4/5]">
                  <Image src={m.img} alt={m.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
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

      <ReviewsSection />

      <FAQSection />

      <CTASection />
    </>
  );
}