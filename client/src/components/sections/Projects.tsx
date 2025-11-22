import { portfolioData } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-2 uppercase">Meus Projetos</h2>
          <div className="w-24 h-1 bg-destructive mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0_8px_0_0_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} className="bg-white text-secondary p-3 rounded-full hover:scale-110 transition-transform shadow-lg">
                    <Github size={24} />
                  </a>
                  <a href={project.link} className="bg-white text-secondary p-3 rounded-full hover:scale-110 transition-transform shadow-lg">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-bold uppercase bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
