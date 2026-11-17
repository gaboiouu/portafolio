export type PortfolioProject = {
  number: string;
  category: string;
  title: string;
  description: string;
  contribution: string;
  tags: string[];
  image?: string;
  repository?: string;
  accent: string;
};

// Agrega una imagen en public/assets/projects/ y coloca aquí su ruta, por ejemplo:
// image: "/assets/projects/mi-proyecto.png",
export const portfolioProjects: PortfolioProject[] = [
  {
    number: "01", category: "HACKATHON · DESARROLLO WEB", title: "Información para decidir",
    description: "Plataforma contra la desinformación electoral creada con el equipo Idea.exe para la Hackathon UTP y El Comercio.",
    contribution: "Participé en el desarrollo frontend y backend, coordiné las tareas del equipo y ayudé a integrar los avances. La plataforma presenta información de partidos, candidatos y antecedentes en español, quechua y aimara, e incorpora el asistente Yachay.",
    tags: ["Frontend", "Backend", "Trabajo en equipo"], accent: "from-violet-600/35 via-indigo-500/15 to-slate-950",
  },
  {
    number: "02", category: "HACKATHON · INTELIGENCIA ARTIFICIAL", title: "Rutas de aprendizaje",
    description: "Una propuesta para identificar brechas de habilidades y crear rutas de aprendizaje personalizadas.",
    contribution: "Desarrollé funcionalidades para adaptar las rutas al perfil, los intereses y los objetivos profesionales de cada usuario. También implementé funciones de análisis de CV y simulación de entrevistas con inteligencia artificial.",
    tags: ["IA", "Educación", "UTP Xpedition"], accent: "from-cyan-600/35 via-blue-500/15 to-slate-950",
  },
  {
    number: "03", category: "SISTEMA WEB · BACKEND", title: "Ventas e inventario",
    description: "Sistema de ventas e inventario para apoyar la gestión operativa de una farmacia.",
    contribution: "Levanté los requerimientos, desarrollé funcionalidades backend de ventas e inventario con Java, Spring Boot y MySQL, y colaboré en la integración con una interfaz responsiva en React.",
    tags: ["Java", "Spring Boot", "MySQL", "React"], accent: "from-emerald-600/35 via-teal-500/15 to-slate-950",
  },
];
