export type PortfolioProject = {
  number: string;
  category: string;
  title: string;
  description: string;
  contribution: string;
  tags: string[];
  image?: string;
  screenshots?: { src: string; label: string }[];
  repository?: string;
  accent: string;
};

// Agrega una imagen en public/assets/projects/ y coloca aquí su ruta, por ejemplo:
// image: "/assets/projects/mi-proyecto.png",
export const portfolioProjects: PortfolioProject[] = [
  {
    number: "01", category: "APLICACIÓN WEB", title: "Quietud y Belleza",
    description: "Aplicación para organizar citas, clientes y servicios de un centro estético.",
    contribution: "Una experiencia de gestión con agenda de citas, directorio de clientes y catálogo de tratamientos.",
    tags: ["Gestión de citas", "Clientes", "Servicios"], repository: "https://github.com/gaboiouu/estetica-web", accent: "from-emerald-200 via-stone-100 to-emerald-100",
    screenshots: [
      { src: "/assets/projects/quietud-belleza/01-acceso.png", label: "Inicio de sesión" },
      { src: "/assets/projects/quietud-belleza/02-inicio.png", label: "Panel principal" },
      { src: "/assets/projects/quietud-belleza/03-agenda.png", label: "Agenda de citas" },
      { src: "/assets/projects/quietud-belleza/04-clientes.png", label: "Clientes" },
      { src: "/assets/projects/quietud-belleza/05-servicios.png", label: "Servicios y tratamientos" },
    ],
  },
  {
    number: "00", category: "SOFTWARE DE ESCRITORIO", title: "Gestión Inmobiliaria",
    description: "Sistema de escritorio para gestionar propiedades, clientes, ventas y pagos inmobiliarios.",
    contribution: "Desarrollé una aplicación para organizar operaciones inmobiliarias con formularios de gestión, usando Java Swing y una arquitectura MVC con DAO y patrones de diseño.",
    tags: ["Java", "Swing", "MySQL", "MVC", "DAO"], repository: "https://github.com/gaboiouu/proyecto-inmobiliaria",
    accent: "from-violet-600/35 via-indigo-500/15 to-slate-950",
    screenshots: [
      { src: "/assets/projects/inmomarket/01-acceso.png", label: "Inicio de sesión" },
      { src: "/assets/projects/inmomarket/02-menu-principal.png", label: "Menú principal" },
      { src: "/assets/projects/inmomarket/02-inmuebles.png", label: "Gestión de inmuebles" },
      { src: "/assets/projects/inmomarket/03-clientes.png", label: "Gestión de clientes" },
      { src: "/assets/projects/inmomarket/04-ventas.png", label: "Registro de ventas" },
      { src: "/assets/projects/inmomarket/05-pagos.png", label: "Historial de pagos" },
    ],
  },
  {
    number: "01", category: "HACKATHON · DESARROLLO WEB", title: "Información para decidir",
    description: "Plataforma contra la desinformación electoral creada con el equipo Idea.exe para la Hackathon de El Comercio.",
    contribution: "Participé en el desarrollo frontend y backend, coordiné las tareas del equipo y ayudé a integrar los avances. La plataforma presenta información de partidos, candidatos y antecedentes en español, quechua y aimara, e incorpora el asistente Yachay.",
    tags: ["Frontend", "Backend", "Trabajo en equipo"], accent: "from-violet-600/35 via-indigo-500/15 to-slate-950",
  },
  {
    number: "02", category: "HACKATHON · INTELIGENCIA ARTIFICIAL", title: "Rutas de aprendizaje",
    description: "Una propuesta para identificar brechas de habilidades y crear rutas de aprendizaje personalizadas.",
    contribution: "Desarrollé funcionalidades para adaptar las rutas al perfil, los intereses y los objetivos profesionales de cada usuario. También implementé funciones de análisis de CV y simulación de entrevistas con inteligencia artificial.",
    tags: ["IA", "Educación", "Hackathon Xpedition"], accent: "from-cyan-600/35 via-blue-500/15 to-slate-950",
  },
  {
    number: "03", category: "SISTEMA WEB · BACKEND", title: "Ventas e inventario",
    description: "Sistema de ventas e inventario para apoyar la gestión operativa de una farmacia.",
    contribution: "Levanté los requerimientos, desarrollé funcionalidades backend de ventas e inventario con Java, Spring Boot y MySQL, y colaboré en la integración con una interfaz responsiva en React.",
    tags: ["Java", "Spring Boot", "MySQL", "React"], accent: "from-emerald-600/35 via-teal-500/15 to-slate-950",
  },
];





