import { ReactNode, useRef, useEffect, useState } from "react";
import { X, Minus, Square } from "lucide-react";
import { cn } from "@/lib/utils";

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  isActive?: boolean;
  onFocus?: () => void;
  defaultWidth?: number;
  defaultHeight?: number;
  defaultX?: number;
  defaultY?: number;
}

export function OSWindow({
  title,
  isOpen,
  onClose,
  children,
  className,
  icon,
  isActive = true,
  onFocus,
  defaultWidth = 800,
  defaultHeight = 600,
  defaultX = 100,
  defaultY = 50,
}: WindowProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(typeof window !== "undefined" && window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isOpen) return null;

  const mobileStyle: React.CSSProperties = isMobile
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }
    : {
        width: defaultWidth,
        height: defaultHeight,
        top: defaultY,
        left: defaultX,
      };

  return (
    <div
      className={cn(
        "absolute flex flex-col bg-card shadow-2xl overflow-hidden border border-border/40 transition-shadow duration-200",
        isMobile ? "rounded-none" : "rounded-t-lg",
        isActive ? "z-50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/10" : "z-0 opacity-90",
        className
      )}
      style={mobileStyle}
      onClick={onFocus}
    >
      {/* Window Title Bar */}
      <div 
        className={cn(
          "h-9 flex items-center justify-between px-2 select-none",
          isActive ? "bg-gradient-to-r from-zinc-800 to-zinc-700 text-white" : "bg-zinc-800/80 text-zinc-400"
        )}
        role="toolbar"
        aria-label={`${title} window controls`}
      >
        <div className="flex items-center gap-2 pl-2">
          {icon && <span className="text-primary opacity-80">{icon}</span>}
          <span className="text-sm font-medium tracking-wide">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-white/10 rounded transition-colors touch-manipulation" title="Minimize">
            <Minus size={16} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded transition-colors touch-manipulation" title="Maximize">
            <Square size={16} />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-2 hover:bg-red-500 hover:text-white rounded transition-colors text-red-400 touch-manipulation"
            title="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto bg-background text-foreground relative">
        {children}
      </div>
    </div>
  );
}
