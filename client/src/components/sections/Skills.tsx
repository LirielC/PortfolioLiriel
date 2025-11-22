import { portfolioData } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-2 uppercase">Habilidades</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioData.skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-3">
                  <skill.icon className="w-6 h-6 text-primary" />
                  <span className="font-bold text-lg uppercase tracking-wide">{skill.name}</span>
                </div>
                <span className="font-mono text-accent">{skill.level}%</span>
              </div>
              <div className="h-6 bg-black/30 rounded-full overflow-hidden p-1 shadow-inner">
                <div 
                  className="h-full bg-primary rounded-full shadow-[0_2px_0_rgba(0,0,0,0.1)_inset] transition-all duration-1000 ease-out group-hover:bg-accent"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
