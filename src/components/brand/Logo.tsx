import Image from "next/image";

export default function BrandLogo({ compact = false, stroke = false }: { compact?: boolean; stroke?: boolean }) {
  return (
    <Image
      src="/images/diamond-shine-logo-transparent.webp"
      alt="Diamond Shine Laundry"
      width={compact ? 180 : 260}
      height={compact ? 120 : 174}
      priority={compact}
      className={(compact ? "h-14 w-[8.5rem] object-contain sm:h-16 sm:w-[9.5rem]" : "h-24 w-56 object-contain") + (stroke ? " footer-logo-stroke" : "")}
    />
  );
}
