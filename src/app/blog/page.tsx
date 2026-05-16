import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { posts, fmtDate } from "@/lib/blog";
import { company } from "@/lib/media";

export const metadata: Metadata = {
  title: `Blog — Landscaping advice, seasonal tips & how-tos | ${company.shortName}`,
  description: `Practical landscape, hardscape, and lawn-care guidance from the O'Boyle team in ${company.address.city}, NJ.`,
  alternates: { canonical: "/blog" }
};

const categories = Array.from(new Set(posts.map((p) => p.category)));

export default function BlogIndex() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <section className="bg-moss-950 text-white">
        <div className="container-x py-20 md:py-24">
          <span className="eyebrow !text-sand-300"><span className="h-px w-6 bg-sand-300" />Field Notes</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold tracking-tight">
            Practical landscaping, from the team that does it.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-moss-50/85">
            Seasonal checklists, hardscape know-how, plant picks for our zone, and the kind of stuff we
            wish more homeowners knew before they called us.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="container-x py-14 md:py-16">
        <Link href={`/blog/${featured.slug}`} className="group grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-soft">
            <Image src={featured.cover} alt={featured.title} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover transition group-hover:scale-105" />
          </div>
          <div>
            <div className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-sand-500" />
              Featured · {featured.category}
            </div>
            <h2 className="h-display mt-3 text-2xl md:text-4xl group-hover:text-moss-700 transition">{featured.title}</h2>
            <p className="mt-4 text-moss-900/75 text-lg">{featured.excerpt}</p>
            <div className="mt-5 text-sm text-moss-900/60">
              {fmtDate(featured.date)} · {featured.readMinutes} min read · {featured.author}
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-moss-700 font-bold">
              Read the article
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>
      </section>

      {/* Categories */}
      <section className="container-x">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="inline-flex items-center rounded-full bg-moss-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-moss-700 ring-1 ring-moss-100">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Article grid */}
      <section className="container-x py-12 md:py-16">
        <SectionHeader eyebrow="More articles" title="Recent posts" />
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.slug} className="group rounded-2xl overflow-hidden bg-white ring-1 ring-moss-100 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <Link href={`/blog/${p.slug}`} className="block">
                <div className="relative aspect-[16/10]">
                  <Image src={p.cover} alt={p.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-moss-600">
                    {p.category} · {p.readMinutes} min
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-bold text-moss-900 leading-snug">{p.title}</h3>
                  <p className="mt-2 text-moss-900/75">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-moss-900/60">{fmtDate(p.date)}</span>
                    <span className="font-bold text-moss-700">Read →</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Have a question we should write about?" subtitle="Send it our way — and grab a free estimate while you&apos;re at it." />
    </>
  );
}
