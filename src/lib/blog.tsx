import { portfolio } from "@/lib/media";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Landscape Design" | "Hardscape" | "Maintenance" | "Garden Center" | "Seasonal";
  date: string; // ISO
  readMinutes: number;
  cover: string;
  author: string;
  keywords: string[];
  body: () => React.ReactElement;
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

export { fmtDate };

import * as React from "react";

const Paragraph = ({ children }: { children: React.ReactNode }) => <p>{children}</p>;
const H2 = ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>;
const H3 = ({ children }: { children: React.ReactNode }) => <h3>{children}</h3>;
const UL = ({ children }: { children: React.ReactNode }) => <ul>{children}</ul>;
const LI = ({ children }: { children: React.ReactNode }) => <li>{children}</li>;

export const posts: Post[] = [
  {
    slug: "best-time-to-plant-trees-shrubs-new-jersey",
    title: "The best time to plant trees and shrubs in Northern New Jersey",
    excerpt:
      "Fall planting wins in NJ — here's why September through early November is the sweet spot for healthier roots, fewer losses, and a head start on spring.",
    category: "Landscape Design",
    date: "2026-03-22",
    readMinutes: 6,
    cover: portfolio[5].src,
    author: "Martin O'Boyle Jr.",
    keywords: [
      "best time to plant trees in NJ",
      "fall planting Bloomfield NJ",
      "Essex County landscape design",
      "when to plant shrubs"
    ],
    body: () => (
      <>
        <Paragraph>
          If you&apos;ve been thinking about adding trees or shrubs to your yard, fall is the season you want.
          Northern New Jersey&apos;s growing zone (7a) gives plants roughly six weeks of cool, damp soil from
          mid-September through early November — exactly the conditions root systems prefer for getting
          established.
        </Paragraph>
        <H2>Why fall beats spring for woody plants</H2>
        <Paragraph>
          Spring gets the attention, but spring planting puts new roots through immediate heat stress as
          summer hits. In fall, the air cools while the soil stays warm for weeks — so roots keep growing
          long after the leaves drop. By the time spring arrives, your tree or shrub is already anchored.
        </Paragraph>
        <UL>
          <LI><strong>Lower transplant shock.</strong> Cooler air means less moisture loss through leaves.</LI>
          <LI><strong>Better water uptake.</strong> NJ rain in September and October does most of the watering for you.</LI>
          <LI><strong>Head start on spring.</strong> Established roots = stronger spring leaf-out.</LI>
        </UL>
        <H2>What we plant in fall in Bloomfield</H2>
        <Paragraph>
          Most deciduous trees, evergreens, perennials, and bulbs are fall-friendly. A few things we hold
          for spring — anything broadleaf evergreen that hasn&apos;t had time to harden off, and most
          warm-season ornamental grasses.
        </Paragraph>
        <H2>The mistake we see most often</H2>
        <Paragraph>
          Planting and walking away. Even in fall, new plantings need watering for the first 6–8 weeks
          until the ground freezes. We schedule a check-in visit on every fall installation — it&apos;s the
          difference between a thriving plant and a replacement.
        </Paragraph>
        <H3>Thinking about a fall install?</H3>
        <Paragraph>
          We start booking fall plantings in late July. If you&apos;ve got a spot in the yard that&apos;s been
          bothering you, this is the year to fix it. <a href="/contact">Get a free walkthrough</a> and we&apos;ll
          tell you what would actually thrive there.
        </Paragraph>
      </>
    )
  },
  {
    slug: "paver-patio-vs-bluestone-cost-longevity",
    title: "Paver patio vs. bluestone: cost, longevity, and which one is right for your yard",
    excerpt:
      "The honest comparison between concrete pavers and natural bluestone — pricing, what holds up in NJ winters, and how to choose.",
    category: "Hardscape",
    date: "2026-03-08",
    readMinutes: 7,
    cover: portfolio[6].src,
    author: "Martin O'Boyle Jr.",
    keywords: [
      "paver patio vs bluestone",
      "patio installation NJ",
      "hardscape cost Bloomfield",
      "outdoor living space"
    ],
    body: () => (
      <>
        <Paragraph>
          Most patio conversations start the same way: someone&apos;s seen a beautiful patio on social media,
          asks what it costs, and gets a price that&apos;s either much too low (suspicious) or much too high
          (also suspicious). Here&apos;s the honest middle.
        </Paragraph>
        <H2>Concrete pavers</H2>
        <Paragraph>
          Manufactured pavers — Techo-Bloc, Cambridge, Belgard, Unilock — are uniform, predictable, and
          available in dozens of patterns and colors. Material cost is lower than bluestone, and the
          installation labor is faster.
        </Paragraph>
        <UL>
          <LI><strong>Strengths:</strong> consistent thickness, faster install, broader color options, easier to repair (replace a single paver).</LI>
          <LI><strong>Trade-offs:</strong> the look reads as &quot;manufactured&quot; up close; colors can fade slightly over a decade.</LI>
        </UL>
        <H2>Natural bluestone</H2>
        <Paragraph>
          Bluestone is a Pennsylvania quarried stone with character no manufactured product can quite
          match. Thermal cuts read clean and modern; natural cleft reads warm and classic.
        </Paragraph>
        <UL>
          <LI><strong>Strengths:</strong> timeless look, ages beautifully, ties into stone walls and steps cleanly.</LI>
          <LI><strong>Trade-offs:</strong> higher material cost, slower install, irregular thicknesses on natural cleft mean more setting labor.</LI>
        </UL>
        <H2>What about NJ winters?</H2>
        <Paragraph>
          Either holds up if the <strong>base is right</strong>. A 6-inch compacted base of 3/4&quot; clean
          stone, polymeric joint sand, and proper drainage will outlast both materials. The base is where
          patios fail in this region — not the surface.
        </Paragraph>
        <H2>How we&apos;d choose</H2>
        <Paragraph>
          For a modern home with clean lines, we usually recommend thermal bluestone or a large-format
          paver. For a classic colonial in {`Bloomfield`}, natural cleft bluestone or a tumbled paver feels
          right. Budget matters too — pavers can stretch a hardscape budget further if you&apos;re also
          building walls or fire features.
        </Paragraph>
        <H3>Get an honest estimate</H3>
        <Paragraph>
          We&apos;ll walk your property, sketch options, and price both. No pressure either way.{" "}
          <a href="/contact">Request a free estimate</a>.
        </Paragraph>
      </>
    )
  },
  {
    slug: "lawn-care-schedule-essex-county-nj",
    title: "A year-round lawn care schedule for Essex County, NJ",
    excerpt:
      "Mowing, fertilizing, aerating, overseeding — when to do what for a thicker, greener lawn in our climate.",
    category: "Maintenance",
    date: "2026-02-18",
    readMinutes: 8,
    cover: portfolio[18].src,
    author: "Brent Danieli",
    keywords: [
      "lawn care schedule NJ",
      "fertilize lawn New Jersey",
      "aeration overseeding fall",
      "Essex County lawn service"
    ],
    body: () => (
      <>
        <Paragraph>
          The single biggest factor in lawn quality isn&apos;t product — it&apos;s timing. Northern NJ&apos;s cool-season
          turf (mostly tall fescue, fine fescue, and Kentucky bluegrass) responds dramatically to feeding,
          aerating, and overseeding at the right windows.
        </Paragraph>
        <H2>Early spring (March–April)</H2>
        <UL>
          <LI>Pre-emergent crabgrass control before forsythia drops bloom.</LI>
          <LI>First mow only when grass hits 3.5&quot; — earlier mowing stresses the crown.</LI>
          <LI>Light feeding to wake the turf up.</LI>
        </UL>
        <H2>Late spring (May–early June)</H2>
        <UL>
          <LI>Spot-treat broadleaf weeds before they seed.</LI>
          <LI>Raise mower deck to 3.5–4&quot; — taller grass shades out weeds.</LI>
        </UL>
        <H2>Summer (June–August)</H2>
        <UL>
          <LI>Mow weekly, never cut more than a third of the blade.</LI>
          <LI>Deep, infrequent watering (~1&quot; once a week) beats shallow daily watering.</LI>
          <LI>Hold off on fertilizer in the heat — you&apos;ll force growth the roots can&apos;t support.</LI>
        </UL>
        <H2>Fall (September–November) — the big one</H2>
        <UL>
          <LI><strong>Core aeration</strong> in early September.</LI>
          <LI><strong>Overseed</strong> right after aeration with a quality NJ-friendly blend.</LI>
          <LI><strong>Two heavy feedings</strong> — one in September, one late October. Fall feeding is where great spring lawns come from.</LI>
          <LI>Final mow at 2.5&quot; before snow.</LI>
        </UL>
        <H2>Winter</H2>
        <Paragraph>
          Leave it alone. Keep heavy traffic off frozen turf — broken crowns show up as brown patches in
          April.
        </Paragraph>
        <H3>Want this handled?</H3>
        <Paragraph>
          We run weekly mowing and full lawn programs across Essex County. <a href="/contact">Ask for a
          quote</a> and we&apos;ll build a program around your property.
        </Paragraph>
      </>
    )
  },
  {
    slug: "front-yard-curb-appeal-ideas-bloomfield",
    title: "Five curb appeal moves that pay for themselves in Bloomfield",
    excerpt:
      "Practical, mid-budget front-yard upgrades that change how your home shows from the street — and what they actually cost.",
    category: "Landscape Design",
    date: "2026-02-02",
    readMinutes: 5,
    cover: portfolio[0].src,
    author: "Martin O'Boyle Jr.",
    keywords: [
      "curb appeal ideas NJ",
      "front yard landscaping Bloomfield",
      "home value landscaping",
      "small landscape upgrades"
    ],
    body: () => (
      <>
        <Paragraph>
          Not every front yard needs a full redesign. A handful of targeted moves changes how a home
          presents from the street — and most pay for themselves at resale or just in how much you enjoy
          pulling into the driveway.
        </Paragraph>
        <H2>1. A defined front walkway</H2>
        <Paragraph>
          A 4&apos;-wide bluestone or paver walkway with a slight curve and edging plantings does more
          for curb appeal than almost any single project. Cost: $4–10K depending on length and material.
        </Paragraph>
        <H2>2. Foundation plantings, reset</H2>
        <Paragraph>
          Most foundation plantings in Bloomfield homes are 20+ years old and overgrown. Pulling tired
          shrubs, regrading the bed, and planting a layered mix of evergreens, structural shrubs, and
          perennials reads as a completely new house.
        </Paragraph>
        <H2>3. Mulch + edge</H2>
        <Paragraph>
          A clean spade-cut edge and fresh hardwood mulch is the cheapest meaningful upgrade. Done in
          spring and refreshed mid-summer.
        </Paragraph>
        <H2>4. Landscape lighting</H2>
        <Paragraph>
          LED path lights and a few up-lights on a feature tree change the property for the half of the
          year people see it after dark. Low-voltage installs are surprisingly affordable.
        </Paragraph>
        <H2>5. Seasonal pots</H2>
        <Paragraph>
          Two large planters at the front door, rotated seasonally, do disproportionate work. Stop by
          Brookside Garden Center and we&apos;ll put them together for you.
        </Paragraph>
        <H3>Pick one and start there</H3>
        <Paragraph>
          You don&apos;t need to do all five. <a href="/contact">Show us a photo</a> and we&apos;ll tell
          you which one would move the needle most on your property.
        </Paragraph>
      </>
    )
  },
  {
    slug: "spring-cleanup-checklist-nj",
    title: "The spring cleanup checklist for New Jersey yards",
    excerpt:
      "What we cover on a professional spring cleanup — and the homeowner-doable version if you want to handle it yourself.",
    category: "Seasonal",
    date: "2026-01-19",
    readMinutes: 4,
    cover: portfolio[7].src,
    author: "Brent Danieli",
    keywords: [
      "spring cleanup NJ",
      "yard cleanup Bloomfield",
      "landscape spring prep",
      "lawn opening service"
    ],
    body: () => (
      <>
        <Paragraph>
          A proper spring cleanup is the difference between a yard that&apos;s playing catch-up all season
          and one that&apos;s already ahead. Here&apos;s the list we run on every property.
        </Paragraph>
        <H2>The full checklist</H2>
        <UL>
          <LI>Hand-rake and blow out all beds, lawn, and corners.</LI>
          <LI>Cut back perennials and ornamental grasses.</LI>
          <LI>Prune dormant shrubs while structure is visible.</LI>
          <LI>Re-edge all beds with a clean spade cut.</LI>
          <LI>Apply pre-emergent on lawn before forsythia bloom.</LI>
          <LI>Top off mulch — 2&quot; depth, away from trunks.</LI>
          <LI>Tune-up irrigation system.</LI>
          <LI>First mow at 3.5&quot; once grass is consistently growing.</LI>
        </UL>
        <H2>Homeowner-doable version</H2>
        <Paragraph>
          If you want to handle it yourself, hit the leaves, edge the beds, and mulch. Skip the lawn
          treatments unless you&apos;re comfortable with timing — applying pre-emergent late is worse than not
          applying at all.
        </Paragraph>
        <H3>Want us on it?</H3>
        <Paragraph>
          We start booking spring cleanups in mid-February. <a href="/contact">Get on the schedule</a> before
          the calendar fills up.
        </Paragraph>
      </>
    )
  }
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
