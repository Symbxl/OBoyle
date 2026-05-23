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
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" }
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
      <div className="hidden md:block bg-moss-950 text-moss-100 text-[11px] tracking-wide">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center divide-x divide-white/10">
            <a href={`tel:${company.phoneDigits}`} className="flex items-center gap-1.5 pr-4 font-semibold text-white hover:text-sand-200 transition">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {company.phone}
            </a>
            <span className="hidden lg:flex items-center gap-1.5 px-4 text-moss-200">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {company.address.line1}, {company.address.city} {company.address.state}
            </span>
          </div>
          <div className="flex items-center gap-3 text-moss-200/90">
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sand-400" />
              Family owned · {company.yearsExperience} years
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`relative transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(31,50,32,0.45)] border-b border-moss-100/80"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className={`container-x flex items-center justify-between gap-6 transition-all duration-300 ${scrolled ? "h-16 md:h-[68px]" : "h-20 md:h-24"}`}>
          <Link href="/" className="group flex items-center gap-3 shrink-0" aria-label={`${company.name} — home`}>
            <span className={`relative grid place-items-center rounded-full bg-gradient-to-br from-moss-600 to-moss-800 text-white ring-1 ring-moss-900/10 shadow-[0_8px_18px_-10px_rgba(31,50,32,0.55)] transition-all duration-300 ${scrolled ? "h-10 w-10" : "h-11 w-11 md:h-12 md:w-12"}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 12-9 0 7-4 12-9 12-2 0-3-1-3-1" />
                <path d="M2 22c1-5 4-9 9-12" />
              </svg>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-sand-400 ring-2 ring-white" />
            </span>
            <div className="leading-tight">
              <div className={`font-serif font-bold text-moss-900 transition-all ${scrolled ? "text-lg" : "text-lg md:text-xl"}`}>
                {company.shortName}
              </div>
              <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase text-moss-600/90">
                Est. 1973 · Bloomfield, NJ
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`group relative px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-moss-800" : "text-moss-700 hover:text-moss-900"
                  }`}
                >
                  {l.label}
                  <span
                    className={`pointer-events-none absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-sand-500 origin-left transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${company.phoneDigits}`}
              className="hidden xl:inline-flex items-center gap-2 text-sm font-bold text-moss-800 hover:text-moss-950 transition"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {company.phone}
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-moss-800 px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_-12px_rgba(31,50,32,0.7)] ring-1 ring-moss-900/10 transition hover:bg-moss-900"
            >
              Free Estimate
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full text-moss-900 ring-1 ring-moss-100 hover:bg-moss-50 transition"
            onClick={() => setOpen(!open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
