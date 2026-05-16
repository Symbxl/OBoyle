"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { hero } from "@/lib/media";

const slides = hero.rotator;
const AUTO_MS = 6000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTO_MS);
    return () => clearInterval(id);
  }, []);
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-moss-950/80 via-moss-950/55 to-moss-900/25" />
    </div>
  );
}
