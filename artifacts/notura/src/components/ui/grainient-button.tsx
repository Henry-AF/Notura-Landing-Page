import { Grainient } from "@/components/ui/grainient";

interface GrainientButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function GrainientButton({
  href,
  onClick,
  children,
  className = "",
  target,
  rel,
}: GrainientButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    rounded-full px-7 py-3
    text-white text-sm font-semibold
    overflow-hidden
    transition-transform duration-200
    hover:-translate-y-[1px] hover:shadow-[0_8px_28px_rgba(83,65,205,0.35)]
    active:translate-y-0 active:shadow-none
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5341CD] focus-visible:ring-offset-2
    ${className}
  `.trim().replace(/\s+/g, " ");

  const inner = (
    <>
      <Grainient className="absolute inset-0 rounded-full" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {inner}
    </button>
  );
}
