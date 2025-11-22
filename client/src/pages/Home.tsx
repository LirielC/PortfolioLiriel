import { useState } from "react";
import { DesktopIcon } from "@/components/os/DesktopIcon";
import { OSWindow } from "@/components/os/Window";
import { Taskbar } from "@/components/os/Taskbar";
import { User, FolderGit2, Music, Github, Trash2, Terminal, Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import wallpaper from "@assets/generated_images/linux_mint_abstract_wallpaper.png";
import albumCover from "@assets/generated_images/taylor_swift_life_of_a_showgirl_album_cover_green_water.png";
import { portfolioData } from "@/lib/data";

// Custom Icons for UI Match
const ShuffleIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l9.6-10.6c.8-1.1 2-1.7 3.3-1.7H22" />
    <path d="M2 6h1.4c1.3 0 2.5.6 3.3 1.7l9.6 10.6c.8 1.1 2 1.7 3.3 1.7H22" />
  </svg>
);

const CheckCircleIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const DownloadIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
    <circle cx="12" cy="12" r="11" strokeWidth="1.5" className="opacity-50" />
  </svg>
);

const ListIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const HeartIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const RepeatIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

const MicIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const QueueIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
  </svg>
);

const DeviceIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const ClockIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

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

  const openSpotifyLink = () => {
     window.open("https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02", "_blank");
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
          defaultX={150}
          defaultY={80}
          defaultWidth={1000}
          defaultHeight={650}
          className="bg-[#121212] text-white font-sans"
        >
          <div className="h-full flex flex-col bg-[#121212] overflow-hidden relative">
            {/* Gradient Background */}
            <div className="absolute top-0 left-0 right-0 h-[340px] bg-gradient-to-b from-[#105e48] to-[#121212] z-0 pointer-events-none" />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col z-10 overflow-hidden">
              
              {/* Header Section */}
              <div className="px-6 pt-6 pb-6 flex items-end gap-6">
                 <img 
                   src={albumCover} 
                   alt="The Life of a Showgirl" 
                   className="w-[232px] h-[232px] shadow-[0_4px_60px_rgba(0,0,0,0.5)] object-cover rounded"
                 />
                 <div className="flex flex-col gap-2">
                   <span className="text-xs font-bold uppercase tracking-wide">Álbum</span>
                   <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mt-2 mb-4">The Life of a Showgirl</h1>
                   <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                     <div className="w-6 h-6 rounded-full bg-zinc-800 overflow-hidden">
                        {/* Artist Avatar Placeholder */}
                        <div className="w-full h-full bg-yellow-600" />
                     </div>
                     <span className="hover:underline cursor-pointer font-bold" onClick={openSpotifyLink}>Taylor Swift</span>
                     <span className="before:content-['•'] before:mx-1">2025</span>
                     <span className="before:content-['•'] before:mx-1">12 músicas, 41min 45s</span>
                   </div>
                 </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-4 flex items-center gap-8 sticky top-0 z-20">
                <button 
                  className="w-14 h-14 rounded-full bg-[#1ed760] text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" className="ml-1" />}
                </button>
                
                <div className="flex items-center gap-6 text-[#b3b3b3]">
                   <button className="hover:text-white transition-colors"><ShuffleIcon /></button>
                   <button className="text-[#1ed760]"><CheckCircleIcon /></button>
                   <button className="hover:text-white transition-colors"><DownloadIcon /></button>
                   <button className="hover:text-white transition-colors text-2xl pb-2 leading-3">...</button>
                </div>

                <div className="ml-auto flex items-center gap-2 text-[#b3b3b3] text-sm font-medium cursor-pointer hover:text-white">
                  <span>Lista</span>
                  <ListIcon />
                </div>
              </div>

              {/* Song List Header */}
              <div className="px-6 sticky top-[88px] z-10">
                <div className="grid grid-cols-[16px_1fr_auto] gap-4 text-[#b3b3b3] text-sm border-b border-[#ffffff1a] pb-2 px-4">
                  <div className="text-center">#</div>
                  <div>Título</div>
                  <div className="mr-8"><ClockIcon /></div>
                </div>
              </div>

              {/* Songs Scroll Area */}
              <div className="flex-1 overflow-y-auto px-6 pb-24">
                <div className="mt-2">
                  {[
                    { title: "The Fate of Ophelia", length: "3:46", explicit: false },
                    { title: "Elizabeth Taylor", length: "3:28", explicit: false },
                    { title: "Opalite", length: "3:55", explicit: false },
                    { title: "Father Figure", length: "3:32", explicit: true },
                    { title: "Eldest Daughter", length: "4:06", explicit: true },
                    { title: "Ruin The Friendship", length: "3:40", explicit: false },
                    { title: "Showgirl's Lament", length: "4:12", explicit: false },
                    { title: "Golden Cage", length: "3:15", explicit: false },
                    { title: "Spotlight Burn", length: "3:58", explicit: true },
                    { title: "Curtain Call", length: "4:01", explicit: false },
                    { title: "Encore (Piano Version)", length: "3:45", explicit: false },
                    { title: "The Final Bow", length: "4:20", explicit: false },
                  ].map((song, i) => (
                    <div 
                      key={i} 
                      className="group grid grid-cols-[16px_1fr_auto] gap-4 items-center px-4 py-2 rounded-md hover:bg-[#ffffff1a] transition-colors cursor-default"
                      onDoubleClick={() => setIsPlaying(true)}
                    >
                      <div className="text-[#b3b3b3] text-sm text-center w-4 flex justify-center">
                        <span className="group-hover:hidden font-medium">{i + 1}</span>
                        <Play size={12} className="hidden group-hover:block fill-white text-white" />
                      </div>
                      
                      <div className="flex flex-col min-w-0">
                        <span className={`text-base font-medium truncate ${i === 0 || i === 2 ? 'text-[#1ed760]' : 'text-white'}`}>
                          {song.title}
                        </span>
                        <div className="flex items-center gap-1.5 text-sm text-[#b3b3b3]">
                          {song.explicit && (
                            <span className="bg-[#ffffff99] text-[#121212] text-[9px] px-1 rounded-[2px] leading-3 h-3.5 flex items-center justify-center font-bold" title="Explicit">E</span>
                          )}
                          <span className="group-hover:text-white cursor-pointer hover:underline">Taylor Swift</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-8 text-[#b3b3b3] text-sm font-variant-numeric tabular-nums mr-2">
                        <div className="w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100">
                           <button className="hover:text-white"><HeartIcon /></button>
                        </div>
                        <span>{song.length}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Player Control Bar (Fixed inside window) */}
            <div className="h-[90px] bg-[#181818] border-t border-[#282828] flex items-center justify-between px-4 z-50 absolute bottom-0 left-0 right-0">
                <div className="flex items-center gap-4 w-[30%]">
                  <img src={albumCover} className="w-14 h-14 rounded shadow-sm object-cover" />
                  <div className="flex flex-col justify-center">
                     <span className="text-sm font-medium text-white hover:underline cursor-pointer">The Fate of Ophelia</span>
                     <span className="text-xs text-[#b3b3b3] hover:text-white hover:underline cursor-pointer">Taylor Swift</span>
                  </div>
                  <button className="text-[#1ed760] ml-2"><CheckCircleIcon size={16} /></button>
                </div>

                <div className="flex flex-col items-center max-w-[40%] w-full gap-2">
                   <div className="flex items-center gap-6 text-[#b3b3b3]">
                      <button className="hover:text-white"><ShuffleIcon size={16} /></button>
                      <button className="hover:text-white"><SkipBack size={20} fill="currentColor" /></button>
                      <button 
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                         {isPlaying ? <Pause size={16} fill="black" /> : <Play size={16} fill="black" className="ml-0.5" />}
                      </button>
                      <button className="hover:text-white"><SkipForward size={20} fill="currentColor" /></button>
                      <button className="hover:text-white"><RepeatIcon size={16} /></button>
                   </div>
                   <div className="w-full flex items-center gap-2 text-xs text-[#a7a7a7] font-mono">
                      <span>0:08</span>
                      <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full group cursor-pointer">
                         <div className="h-full w-[5%] bg-white group-hover:bg-[#1ed760] rounded-full relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow" />
                         </div>
                      </div>
                      <span>3:46</span>
                   </div>
                </div>

                <div className="flex items-center justify-end gap-3 w-[30%] text-[#b3b3b3]">
                   <button className="hover:text-white"><MicIcon size={16} /></button>
                   <button className="hover:text-white"><QueueIcon size={16} /></button>
                   <button className="hover:text-white"><DeviceIcon size={16} /></button>
                   <div className="flex items-center gap-2 w-24 group">
                      <Volume2 size={18} />
                      <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full cursor-pointer">
                         <div className="h-full w-[80%] bg-white group-hover:bg-[#1ed760] rounded-full relative" />
                      </div>
                   </div>
                </div>
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
