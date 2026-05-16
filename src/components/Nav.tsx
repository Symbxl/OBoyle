"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/lib/media";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/garden-center", label: "Garden Center" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" }
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-40">
      {/* Utility strip */}
      <div className="hidden md:block bg-moss-950 text-moss-100 text-xs">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={`tel:${company.phoneDigits}`} className="flex items-center gap-1.5 font-semibold text-white hover:text-sand-200 transition">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {company.phone}
            </a>
            <span className="hidden lg:flex items-center gap-1.5 text-moss-200">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {company.address.line1}, {company.address.city} {company.address.state}
            </span>
          </div>
          <div className="flex items-center gap-4 text-moss-200">
            <span className="hidden lg:inline">Family owned · {company.yearsExperience} years</span>
            <span className="hidden lg:inline text-moss-300/80">Lic #{company.license}</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`relative transition-all duration-200 ${
          scrolled ? "bg-white/95 backdrop-blur shadow-[0_10px_30px_-15px_rgba(31,50,32,0.35)]" : "bg-white"
        }`}
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-moss-100/70" />
        <div className={`container-x flex items-center justify-between gap-6 transition-all ${scrolled ? "h-20" : "h-20 md:h-24"}`}>
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`${company.name} — home`}>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-moss-700 text-white">
              {/* Leaf icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 12-9 0 7-4 12-9 12-2 0-3-1-3-1" />
                <path d="M2 22c1-5 4-9 9-12" />
              </svg>
            </span>
            <div className="leading-tight">
              <div className="font-serif font-bold text-lg md:text-xl text-moss-900">{company.shortName}</div>
              <div className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-moss-600">Since 1973 · Bloomfield, NJ</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-moss-50/70 px-1.5 py-1.5 ring-1 ring-moss-100">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-all ${
                    active
                      ? "bg-moss-700 text-white shadow-[0_6px_14px_-6px_rgba(63,107,52,0.55)]"
                      : "text-moss-900 hover:bg-white hover:text-moss-700"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-sand-500 px-5 py-2.5 text-sm font-bold text-moss-950 shadow-[0_10px_24px_-12px_rgba(194,149,59,0.8)] transition hover:bg-sand-600 hover:text-white"
            >
              Get a Free Estimate
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full text-moss-900 hover:bg-moss-50"
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden bg-white border-b border-moss-100 transition-[max-height,opacity] duration-300 ${open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="container-x py-4 flex flex-col gap-1">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center justify-between rounded-lg px-4 py-3 font-semibold transition ${
                  active ? "bg-moss-50 text-moss-800" : "text-moss-900 hover:bg-moss-50"
                }`}
              >
                {l.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={active ? "opacity-100" : "opacity-40"}>
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </Link>
            );
          })}
          <div className="mt-3 grid gap-2 pt-3 border-t border-moss-100">
            <a href={`tel:${company.phoneDigits}`} className="flex items-center justify-center gap-2 rounded-lg border border-moss-200 px-3 py-3 font-bold text-moss-800">
              Call {company.phone}
            </a>
            <Link href="/contact" className="btn-accent">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
