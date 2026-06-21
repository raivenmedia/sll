import { cn } from "@/lib/utils";

export function GradientVisual({ className, title }: { className?: string; title: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-black/10 bg-[radial-gradient(circle_at_top_left,_#f4c400,_transparent_35%),linear-gradient(135deg,_#111_0%,_#2a2a2a_100%)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.14),transparent_35%,rgba(244,196,0,0.2))]" />
      <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />
      <div className="absolute bottom-6 left-6 max-w-xs text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-white/65">Yolic Platform</p>
        <p className="mt-2 text-xl font-semibold leading-tight">{title}</p>
      </div>
    </div>
  );
}
