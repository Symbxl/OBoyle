import Link from "next/link";
import { company } from "@/lib/media";

export default function Footer() {
  return (
    <footer className="bg-moss-950 text-moss-100">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-moss-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 12-9 0 7-4 12-9 12-2 0-3-1-3-1" />
                <path d="M2 22c1-5 4-9 9-12" />
              </svg>
            </span>
            <span className="font-serif text-lg font-bold text-white">{company.shortName}</span>
          </div>
          <p className="mt-3 text-sm text-moss-200">
            Family-owned landscape design, hardscape, and maintenance — {company.yearsExperience} years in {company.servingArea}.
          </p>
          <div className="mt-5 flex items-center gap-3 text-moss-200">
            <a aria-label="Instagram" href={company.social.instagram} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="18" x="3" y="3" rx="5" />
                <circle cx="12" cy="12" r="3.6" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a aria-label="Facebook" href={company.social.facebook} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2-2h2V2.1C16.4 2 15.3 2 14.1 2 11.5 2 10 3.6 10 6.7V10H7v4h3v8z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.18em]">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/garden-center" className="hover:text-white">Brookside Garden Center</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.18em]">Visit</h4>
          <address className="mt-4 not-italic text-sm text-moss-200 space-y-2">
            <div>{company.address.line1}<br />{company.address.city}, {company.address.state} {company.address.zip}</div>
            <div><a className="hover:text-white" href={`tel:${company.phoneDigits}`}>{company.phone}</a></div>
            <div><a className="hover:text-white" href={`mailto:${company.email}`}>{company.email}</a></div>
          </address>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.18em]">Free Estimate</h4>
          <p className="mt-4 text-sm text-moss-200">Tell us about your property. We&apos;ll come walk it.</p>
          <Link href="/contact" className="mt-4 inline-flex items-center justify-center rounded-md bg-sand-500 px-4 py-2 text-sm font-bold text-moss-950 hover:bg-sand-600 hover:text-white">
            Request an Estimate
          </Link>
        </div>
      </div>
      <div className="border-t border-moss-900/60">
        <div className="container-x py-5 text-xs text-moss-300 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {company.name}, Inc. All rights reserved.</span>
          <span>Fully Licensed & Insured · LIC #{company.license}</span>
        </div>
      </div>
    </footer>
  );
}
