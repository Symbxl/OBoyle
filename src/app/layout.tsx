import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { company } from "@/lib/media";

export const metadata: Metadata = {
  title: `${company.name} — Landscape Design, Hardscape & Maintenance | Bloomfield NJ`,
  description: `Family-owned landscape design, hardscape, and lawn maintenance in ${company.servingArea}. ${company.yearsExperience} years of experience. Free estimates.`,
  openGraph: {
    title: `${company.name} — Built to grow on you.`,
    description: `Landscape design, hardscape & maintenance in ${company.servingArea}.`,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
