import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { posts, getPost, fmtDate } from "@/lib/blog";
import { company } from "@/lib/media";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: `${post.title} | ${company.shortName} Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover }]
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Body = post.body;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [post.cover],
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: { "@type": "ImageObject", url: "/logo.png" }
    },
    keywords: post.keywords.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.oboylelandscaping.com/blog/${post.slug}` }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* Hero */}
      <section className="bg-moss-950 text-white">
        <div className="container-x py-16 md:py-20">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-sand-300 hover:text-sand-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to blog
          </Link>
          <div className="mt-4 text-xs font-bold uppercase tracking-widest text-sand-300">{post.category} · {post.readMinutes} min read</div>
          <h1 className="mt-2 font-serif text-3xl md:text-5xl font-bold tracking-tight max-w-4xl">{post.title}</h1>
          <div className="mt-5 text-sm text-moss-100/85">By {post.author} · {fmtDate(post.date)}</div>
        </div>
      </section>

      {/* Cover */}
      <div className="container-x -mt-10 md:-mt-12">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lift">
          <Image src={post.cover} alt={post.title} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
        </div>
      </div>

      {/* Body */}
      <article className="container-x grid gap-10 lg:grid-cols-[1fr_280px] py-12 md:py-16">
        <div className="prose-moss max-w-3xl text-lg">
          <Body />
        </div>
        <aside className="lg:sticky lg:top-32 self-start space-y-6">
          <div className="rounded-2xl bg-moss-50 p-6 ring-1 ring-moss-100">
            <div className="eyebrow">Free Estimate</div>
            <h3 className="mt-2 font-serif text-xl font-bold text-moss-900">Talk to the O&apos;Boyle team.</h3>
            <p className="mt-2 text-sm text-moss-900/75">Tell us about your property — we&apos;ll come walk it.</p>
            <Link href="/contact" className="btn-primary mt-4 w-full">Request an Estimate</Link>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-moss-100">
            <div className="text-xs font-bold uppercase tracking-widest text-moss-600">In this article</div>
            <ul className="mt-3 space-y-2 text-sm text-moss-900/80">
              {post.keywords.slice(0, 4).map((k) => (
                <li key={k}>· {k}</li>
              ))}
            </ul>
          </div>
        </aside>
      </article>

      {/* Related */}
      <section className="bg-moss-50/70 py-16">
        <div className="container-x">
          <h2 className="h-display text-2xl md:text-3xl">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl overflow-hidden bg-white ring-1 ring-moss-100 shadow-soft hover:-translate-y-0.5 transition">
                <div className="relative aspect-[16/10]">
                  <Image src={p.cover} alt={p.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-moss-600">{p.category}</div>
                  <h3 className="mt-1 font-serif text-lg font-bold text-moss-900">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <CTASection />
    </>
  );
}
