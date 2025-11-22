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
      title: "Sistema de Biblioteca",
      description: "Sistema completo para gerenciamento de acervo, empréstimos e usuários.",
      tech: ["Java", "Spring Boot", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1507842217153-e5992bd0d1ce?q=80&w=1000&auto=format&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Painel administrativo para gestão de vendas e estoque com gráficos em tempo real.",
      tech: ["React", "Tailwind", "Recharts"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Task Manager App",
      description: "Aplicação de produtividade para gerenciamento de tarefas pessoais e de equipe.",
      tech: ["Vue.js", "Firebase", "Vuex"],
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
      link: "#"
    }
  ],
  social: {
    github: "https://github.com/LirielC",
    linkedin: "https://www.linkedin.com/in/lirielcastro/",
    email: "mailto:contact@liriel.site"
  }
};
