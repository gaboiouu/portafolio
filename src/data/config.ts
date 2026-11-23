const config = {
  title: "Aarón Silva | Portafolio",
  description: {
    long: "Explora el portafolio de Aarón Silva, Ingeniero y Desarrollador Full Stack Junior enfocado en experiencias web interactivas, software y datos.",
    short:
      "Portafolio de Aarón Silva, Ingeniero y Desarrollador Full Stack Junior.",
  },
  keywords: [
    "Aarón",
    "Aarón Silva",
    "Aaron Silva",
    "Aarón Silva portafolio",
    "portafolio",
    "creative technologist",
    "web development",
    "interactive websites",
    "React",
    "Next.js",
    "Spline",
  ],
  author: "Aarón Silva",
  email: "silvachorresaaron19@gmail.com",
  site: process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined),
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/aar%C3%B3n-gabriel-silva-chorres-b13a50370/",
    instagram: "https://www.instagram.com/_silva_aaron/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/gaboiouu",
  },
};
export { config };

