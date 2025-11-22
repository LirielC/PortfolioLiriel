import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
  color?: string;
}

export function DesktopIcon({ icon: Icon, label, onClick, className, color = "text-primary" }: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 p-2 rounded hover:bg-white/10 focus:bg-primary/20 focus:outline-none group w-24 transition-colors text-shadow-sm",
        className
      )}
    >
      <div className={cn("w-12 h-12 flex items-center justify-center rounded-xl shadow-lg bg-zinc-800/80 border border-white/5 group-hover:scale-105 transition-transform", color)}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <span className="text-xs font-medium text-white drop-shadow-md text-center leading-tight line-clamp-2 group-hover:text-primary transition-colors">
        {label}
      </span>
    </button>
  );
}
