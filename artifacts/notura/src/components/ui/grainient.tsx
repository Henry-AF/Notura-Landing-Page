interface GrainientProps {
  className?: string;
}

export function Grainient({ className = "" }: GrainientProps) {
  return <div className={`notura-grainient ${className}`.trim()} />;
}
