import { Code, Database, Layout, Server, Smartphone, Terminal } from "lucide-react";

export const portfolioData = {
  name: "Liriel Castro",
  title: "Full Stack Developer",
  about: "Olá! Sou uma desenvolvedora apaixonada por criar experiências web incríveis. Com foco em performance e design clean, transformo ideias em realidade digital. Adoro resolver problemas complexos e aprender novas tecnologias.",
  skills: [
    { name: "React", level: 90, icon: Layout },
    { name: "Node.js", level: 85, icon: Server },
    { name: "TypeScript", level: 80, icon: Code },
    { name: "Tailwind CSS", level: 95, icon: Smartphone },
    { name: "PostgreSQL", level: 75, icon: Database },
    { name: "Git", level: 85, icon: Terminal },
  ],
  projects: [
    {
      id: 1,
      title: "SistemaGerenciamentoBiblioteca",
      description: "Sistema completo de gerenciamento de biblioteca com vendas, empréstimos e controle de clientes. Migrado para Java 17 + Spring Boot 3.2 + Vaadin.",
      tech: ["Java", "Spring Boot", "Vaadin", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1507842217153-e5992bd0d1ce?q=80&w=1000&auto=format&fit=crop",
      link: "https://github.com/LirielC/SistemaGerenciamentoBiblioteca"
    },
    {
      id: 2,
      title: "ExitPlan",
      description: "Planejador de saídas e rotas inteligente com sugestões personalizadas e mapas interativos.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop",
      link: "https://github.com/LirielC/ExitPlan"
    },
    {
      id: 3,
      title: "ProCurriculum",
      description: "Gerador de currículos profissionais com exportação em PDF. Interface moderna e intuitiva.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f70e504f9?q=80&w=1000&auto=format&fit=crop",
      link: "https://github.com/LirielC/-ProCurriculum-.github.io"
    }
  ],
  social: {
    github: "https://github.com/LirielC",
    linkedin: "https://www.linkedin.com/in/lirielcastro/",
    email: "mailto:contact@liriel.site"
  }
};
