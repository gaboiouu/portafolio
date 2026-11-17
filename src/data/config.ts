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
  email: "silvagabo1200@gmail.com",
  site: "https://aaronsilva.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/aar%C3%B3n-gabriel-silva-chorres-b13a50370/",
    instagram: "https://www.instagram.com/_silva_aaron/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/gaboiouu",
  },
};
export { config };

