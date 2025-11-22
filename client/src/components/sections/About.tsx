import { portfolioData } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-heading font-bold text-foreground mb-2 uppercase">Sobre Mim</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-10 rounded-full" />
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
          {portfolioData.about}
        </p>
      </div>
    </section>
  );
}
