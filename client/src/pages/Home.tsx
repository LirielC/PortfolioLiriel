import { useState } from "react";
import { DesktopIcon } from "@/components/os/DesktopIcon";
import { OSWindow } from "@/components/os/Window";
import { Taskbar } from "@/components/os/Taskbar";
import { User, FolderGit2, Music, Github, Trash2, HardDrive, Globe, Terminal, Play, SkipBack, SkipForward, Pause } from "lucide-react";
import wallpaper from "@assets/generated_images/linux_mint_abstract_wallpaper.png";
import { portfolioData } from "@/lib/data";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenWindow = (id: string) => {
    if (!openWindows.includes(id)) {
      setOpenWindows([...openWindows, id]);
    }
    setActiveWindow(id);
  };

  const handleCloseWindow = (id: string) => {
    setOpenWindows(openWindows.filter((w) => w !== id));
    if (activeWindow === id) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2] : null);
    }
  };

  const openGithub = () => {
    window.open(portfolioData.social.github, "_blank");
  };

  return (
    <div 
      className="h-screen w-screen overflow-hidden flex flex-col font-sans selection:bg-primary selection:text-white relative"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Desktop Area */}
      <div className="flex-1 relative p-4 grid grid-flow-col grid-rows-[repeat(auto-fill,100px)] gap-4 content-start justify-start z-0">
        
        <DesktopIcon 
          icon={User} 
          label="About Me" 
          onClick={() => handleOpenWindow("about")} 
          color="text-blue-400"
        />
        
        <DesktopIcon 
          icon={FolderGit2} 
          label="Projects" 
          onClick={() => handleOpenWindow("projects")} 
          color="text-orange-400"
        />
        
        <DesktopIcon 
          icon={Music} 
          label="Spotify" 
          onClick={() => handleOpenWindow("spotify")} 
          color="text-green-500"
        />

        <DesktopIcon 
          icon={Github} 
          label="GitHub" 
          onClick={openGithub} 
          color="text-white"
        />

        <DesktopIcon 
          icon={Trash2} 
          label="Trash" 
          onClick={() => {}} 
          className="mt-auto row-start-[8]"
          color="text-zinc-400"
        />

        {/* Windows Layer */}
        {/* About Window */}
        <OSWindow
          title="About Me - File Manager"
          isOpen={openWindows.includes("about")}
          onClose={() => handleCloseWindow("about")}
          isActive={activeWindow === "about"}
          onFocus={() => setActiveWindow("about")}
          icon={<User size={16} />}
          defaultX={100}
          defaultY={50}
        >
          <div className="h-full bg-background text-foreground p-0 flex flex-col">
            <div className="bg-card border-b border-border p-2 flex gap-2 text-sm">
               <button className="px-3 py-1 bg-secondary/50 rounded hover:bg-secondary transition-colors">Home</button>
               <button className="px-3 py-1 bg-secondary/50 rounded hover:bg-secondary transition-colors">Documents</button>
               <span className="text-muted-foreground py-1">/</span>
               <span className="py-1 font-bold">About</span>
            </div>
            <div className="p-8 overflow-y-auto">
               <div className="flex items-start gap-6 mb-8">
                 <div className="w-32 h-32 bg-secondary rounded-lg flex items-center justify-center shadow-inner shrink-0">
                   <User size={64} className="text-muted-foreground" />
                 </div>
                 <div>
                   <h1 className="text-3xl font-bold mb-2">{portfolioData.name}</h1>
                   <p className="text-primary font-mono mb-4">{portfolioData.title}</p>
                   <p className="leading-relaxed text-muted-foreground">{portfolioData.about}</p>
                 </div>
               </div>
               
               <h3 className="text-lg font-bold mb-4 border-b border-border pb-2">Skills.txt</h3>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 {portfolioData.skills.map(skill => (
                   <div key={skill.name} className="bg-card p-3 rounded border border-border/50 flex items-center gap-3">
                     <skill.icon size={20} className="text-primary" />
                     <span>{skill.name}</span>
                     <span className="ml-auto text-xs bg-secondary px-2 py-1 rounded">{skill.level}%</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </OSWindow>

        {/* Projects Window */}
        <OSWindow
          title="~/Projects - Terminal"
          isOpen={openWindows.includes("projects")}
          onClose={() => handleCloseWindow("projects")}
          isActive={activeWindow === "projects"}
          onFocus={() => setActiveWindow("projects")}
          icon={<Terminal size={16} />}
          defaultX={150}
          defaultY={100}
          className="bg-[#1e1e1e] text-gray-200 font-mono"
        >
          <div className="h-full p-4 overflow-y-auto bg-[#1e1e1e] text-green-400 font-mono selection:bg-green-900">
            <div className="mb-4">
              <span className="text-blue-400">user@mint</span>:<span className="text-blue-200">~/projects</span>$ ls -la
            </div>
            <div className="grid grid-cols-1 gap-6">
              {portfolioData.projects.map((project) => (
                <div key={project.id} className="border border-green-900/50 bg-green-900/10 p-4 rounded hover:bg-green-900/20 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-500 font-bold">./{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                    <span className="text-xs text-gray-500 ml-auto">-rw-r--r--</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3 pl-4 border-l-2 border-green-900/30">{project.description}</p>
                  <div className="flex gap-2 pl-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs bg-green-900/30 text-green-300 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 animate-pulse">
              <span className="text-blue-400">user@mint</span>:<span className="text-blue-200">~/projects</span>$ <span className="inline-block w-2 h-4 bg-green-500 align-middle"></span>
            </div>
          </div>
        </OSWindow>

        {/* Spotify Window */}
        <OSWindow
          title="Spotify Premium"
          isOpen={openWindows.includes("spotify")}
          onClose={() => handleCloseWindow("spotify")}
          isActive={activeWindow === "spotify"}
          onFocus={() => setActiveWindow("spotify")}
          icon={<Music size={16} />}
          defaultX={200}
          defaultY={150}
          defaultWidth={900}
          defaultHeight={600}
          className="bg-[#121212] text-white"
        >
          <div className="h-full flex flex-col bg-gradient-to-b from-[#2a2a2a] to-[#121212]">
            {/* Spotify Header */}
            <div className="p-6 flex items-end gap-6 bg-gradient-to-b from-transparent to-black/20">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png" 
                 alt="Red (Taylor's Version)" 
                 className="w-52 h-52 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
               />
               <div className="mb-2">
                 <p className="uppercase text-xs font-bold tracking-wider mb-2">Album</p>
                 <h1 className="text-7xl font-black mb-6 tracking-tighter">Red (Taylor's Version)</h1>
                 <div className="flex items-center gap-2 text-sm font-medium">
                   <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black text-[10px] font-bold">T</div>
                   <span className="hover:underline cursor-pointer">Taylor Swift</span>
                   <span className="text-gray-400">• 2021 • 30 songs, 2 hr 10 min</span>
                 </div>
               </div>
            </div>

            {/* Spotify Controls */}
            <div className="px-6 py-4 bg-black/20 flex items-center gap-8">
              <button 
                className="w-14 h-14 rounded-full bg-[#1ed760] text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={28} fill="black" /> : <Play size={28} fill="black" className="ml-1" />}
              </button>
              <button className="text-gray-400 hover:text-white"><span className="text-3xl font-light">♡</span></button>
              <button className="text-gray-400 hover:text-white">•••</button>
            </div>

            {/* Song List */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
              <table className="w-full text-sm text-gray-400 border-collapse">
                <thead className="text-xs uppercase tracking-wider border-b border-white/10 text-left">
                  <tr>
                    <th className="pb-2 w-12 font-light text-center">#</th>
                    <th className="pb-2 font-light">Title</th>
                    <th className="pb-2 font-light text-right w-16"><ClockIcon /></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "State of Grace (Taylor's Version)",
                    "Red (Taylor's Version)",
                    "Treacherous (Taylor's Version)",
                    "I Knew You Were Trouble (Taylor's Version)",
                    "All Too Well (10 Minute Version)",
                    "22 (Taylor's Version)",
                    "I Almost Do (Taylor's Version)",
                    "We Are Never Ever Getting Back Together",
                    "Stay Stay Stay (Taylor's Version)",
                    "The Last Time (feat. Gary Lightbody)"
                  ].map((song, i) => (
                    <tr key={i} className="group hover:bg-white/10 transition-colors rounded cursor-pointer" onClick={() => setIsPlaying(true)}>
                      <td className="py-3 text-center group-hover:text-white">
                         <span className="group-hover:hidden">{i + 1}</span>
                         <Play size={12} className="hidden group-hover:inline-block ml-1 fill-white text-white" />
                      </td>
                      <td className="py-3">
                        <div className="text-white font-medium group-hover:text-[#1ed760] transition-colors">{song}</div>
                        <div className="text-xs group-hover:text-white/70">Taylor Swift</div>
                      </td>
                      <td className="py-3 text-right font-mono group-hover:text-white">
                        {Math.floor(Math.random() * 3) + 3}:{Math.floor(Math.random() * 50 + 10)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </OSWindow>

      </div>

      {/* Taskbar */}
      <Taskbar 
        openWindows={openWindows} 
        activeWindow={activeWindow} 
        onWindowClick={(id) => {
          if (activeWindow === id) {
            // minimize logic could go here, for now just focus
            setActiveWindow(id);
          } else {
            setActiveWindow(id);
          }
        }}
        onStartClick={() => {
           // Toggle Start Menu logic
        }}
      />
    </div>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
