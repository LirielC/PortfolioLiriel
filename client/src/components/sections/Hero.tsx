import { portfolioData } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import background from "@assets/generated_images/colorful_low_poly_geometric_background.png";
import avatar from "@assets/ogImage.png"; // Using the OG image as avatar for now

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-center text-white text-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center gap-6 animate-in zoom-in-95 duration-700">
        <div className="relative group">
          <div className="absolute -inset-1 bg-white rounded-full opacity-25 group-hover:opacity-50 blur transition duration-500"></div>
          <img 
            src={avatar} 
            alt={portfolioData.name} 
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display drop-shadow-lg text-white">
          {portfolioData.name}
        </h1>
        
        <h2 className="text-xl md:text-3xl font-heading font-light uppercase tracking-widest bg-black/30 px-6 py-2 rounded backdrop-blur-sm">
          {portfolioData.title}
        </h2>
        
        <div className="mt-8 flex gap-4">
          <a 
            href="#contact" 
            className="bg-destructive hover:bg-destructive/90 text-white px-8 py-3 rounded font-bold uppercase tracking-wide shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[2px] transition-all"
          >
            Contrate-me
          </a>
          <a 
            href="#projects" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded font-bold uppercase tracking-wide shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[2px] transition-all"
          >
            Ver Projetos
          </a>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 text-white animate-bounce hover:text-accent transition-colors"
      >
        <ArrowDown size={48} strokeWidth={3} />
      </a>
    </section>
  );
}
