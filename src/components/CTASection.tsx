import Link from "next/link";
import { company } from "@/lib/media";

export default function CTASection({
  title = "Let's talk about your property.",
  subtitle = "Free estimate. No-pressure walkthrough. Honest pricing."
}: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-moss-950 text-white">
      <div className="container-x pt-14 md:pt-20 pb-10 md:pb-14 grid gap-8 md:grid-cols-[1fr_auto] items-center">
        <div>
          <h2 className="h-display !text-white text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-moss-100 max-w-2xl">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn-accent">
            Get a Free Estimate
          </Link>
          <a href={`tel:${company.phoneDigits}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10">
            Call {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
