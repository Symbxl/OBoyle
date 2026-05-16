export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className="eyebrow">
          <span className="h-px w-6 bg-moss-400" />
          {eyebrow}
        </div>
      )}
      <h2 className="h-display mt-3 text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-moss-900/70">{subtitle}</p>}
    </div>
  );
}
