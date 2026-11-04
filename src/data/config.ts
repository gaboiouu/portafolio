const config = {
  title: "Aarón Silva | Portafolio",
  description: {
    long: "Explora el portafolio de Aarón Silva, desarrollador enfocado en experiencias web interactivas y tecnologías modernas.",
    short:
      "Descubre el portafolio de Aarón Silva, experiencias web interactivas y desarrollo de software.",
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
  email: "aaron@example.com",
  site: "https://aaronsilva.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/",
  },
};
export { config };
