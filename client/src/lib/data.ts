import { Code, Database, Server, Terminal, FileJson, GitBranch, Coffee, Zap } from "lucide-react";

export const portfolioData = {
  name: "Liriel Castro",
  title: "Back-End Developer",
  about: "Sou uma desenvolvedora back-end apaixonada por arquitetura de sistemas robustos e escaláveis. Especializada em construir APIs performáticas, gerenciar bancos de dados complexos e implementar soluções backend inovadoras. Adoro resolver desafios técnicos e otimizar processos com tecnologias modernas.",
  skills: [
    { name: "Java", level: 90, icon: Coffee },
    { name: "Spring Boot", level: 90, icon: Server },
    { name: "Node.js", level: 85, icon: Zap },
    { name: "PostgreSQL", level: 85, icon: Database },
    { name: "TypeScript", level: 80, icon: Code },
    { name: "Git", level: 90, icon: GitBranch },
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
