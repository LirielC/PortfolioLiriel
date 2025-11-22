import { useState } from "react";
import { DesktopIcon } from "@/components/os/DesktopIcon";
import { OSWindow } from "@/components/os/Window";
import { Taskbar } from "@/components/os/Taskbar";
import { User, FolderGit2, Music, Github, Trash2, Terminal } from "lucide-react";
import wallpaper from "@assets/generated_images/linux_mint_abstract_wallpaper.png";
import { portfolioData } from "@/lib/data";

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const handleOpenWindow = (id: string) => {
    if (id === "spotify") {
      window.open("https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02", "_blank");
      return;
    }
    
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
