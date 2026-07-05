import logoAsset from "@/assets/klaivon-logo.asset.json";

export function Logo({ className = "h-9", chipClassName = "" }: { className?: string; chipClassName?: string }) {
  return (
    <div className={`inline-flex items-center rounded-xl bg-[var(--olive-deep)] px-3 py-1.5 ${chipClassName}`}>
      <img src={logoAsset.url} alt="Klaivon Agency" className={className} />
    </div>
  );
}
