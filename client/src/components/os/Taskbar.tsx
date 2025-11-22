import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Home as HomeIcon, Terminal, Globe, Music, User, FolderGit2, Calendar, Volume2, Wifi, Battery, Menu, Github, Linkedin, Mail, FolderOpen } from "lucide-react";

interface TaskbarProps {
  openWindows: string[];
  activeWindow: string | null;
  onWindowClick: (id: string) => void;
  onStartClick: () => void;
}

export function Taskbar({ openWindows, activeWindow, onWindowClick, onStartClick }: TaskbarProps) {
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-10 bg-secondary/95 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-2 select-none z-[100]">
      <div className="flex items-center gap-2 h-full relative">
        {/* Start Menu Button */}
        <div className="relative">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-white/10 transition-colors text-white font-bold group"
          >
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-secondary shadow-[0_0_10px_rgba(135,207,62,0.4)] group-hover:shadow-[0_0_15px_rgba(135,207,62,0.6)] transition-shadow">
              <span className="text-xs font-black tracking-tighter">LM</span>
            </div>
            <span className="text-sm tracking-wide hidden md:block">Menu</span>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute left-0 bottom-full mb-2 bg-secondary border border-white/10 rounded shadow-xl z-50 w-48">
              <a
                href="https://linkedin.com/in/liriel-castro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 transition-colors text-white border-b border-white/5"
              >
                <Linkedin size={16} className="text-blue-500" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:contact@liriel.site"
                className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 transition-colors text-white border-b border-white/5"
              >
                <Mail size={16} className="text-red-500" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="https://github.com/LirielC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 transition-colors text-white border-b border-white/5"
              >
                <Github size={16} className="text-gray-400" />
                <span className="text-sm">GitHub</span>
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onWindowClick("projects");
                }}
                className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 transition-colors text-white w-full text-left"
              >
                <FolderOpen size={16} className="text-orange-400" />
                <span className="text-sm">Projetos</span>
              </button>
            </div>
          )}
        </div>

        <div className="w-px h-6 bg-white/10 mx-1" />
        
        {/* Quick Launch */}
        <div className="flex items-center gap-1 mr-2">
          <button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-primary transition-colors">
            <Terminal size={16} />
          </button>
          <button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-primary transition-colors">
            <Globe size={16} />
          </button>
        </div>

        {/* Window List */}
        <div className="flex items-center gap-1 h-full overflow-x-auto no-scrollbar">
          {openWindows.map((windowId) => (
            <button
              key={windowId}
              onClick={() => onWindowClick(windowId)}
              className={cn(
                "h-[85%] px-4 flex items-center gap-2 rounded text-xs font-medium transition-all border-b-2",
                activeWindow === windowId
                  ? "bg-white/10 text-white border-primary shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                  : "hover:bg-white/5 text-zinc-400 border-transparent hover:text-white"
              )}
            >
              {windowId === "about" && <User size={14} />}
              {windowId === "projects" && <FolderGit2 size={14} />}
              {windowId === "spotify" && <Music size={14} />}
              <span className="capitalize">{windowId}</span>
            </button>
          ))}
        </div>
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-3 text-zinc-400 text-xs px-2">
        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <Wifi size={14} />
        </div>
        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <Volume2 size={14} />
        </div>
        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <Battery size={14} />
          <span>100%</span>
        </div>
        <div className="w-px h-6 bg-white/10 mx-1" />
        <div className="flex flex-col items-end leading-none hover:text-white transition-colors cursor-pointer px-1">
          <span className="font-bold">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span className="text-[10px] opacity-70">{time.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
