# Portafolio de Aarón Silva Chorres

Portafolio personal de desarrollo de software, donde comparto mis proyectos, habilidades y experiencia profesional a través de una interfaz interactiva con elementos 3D.

## Explora el portafolio

- **Sobre mí:** mi perfil y mis intereses en desarrollo web, datos y automatización.
- **Skills:** un teclado 3D interactivo para explorar tecnologías.
- **Proyectos:** una galería con capturas, descripciones y enlaces a repositorios.
- **Servicios:** desarrollo web, backend, análisis de datos y automatización.
- **Experiencia:** una línea de tiempo de mi trayectoria profesional.
- **Contacto:** un formulario para conversar sobre ideas y proyectos.

## Tecnologías

- **Interfaz:** Next.js, React, TypeScript, Tailwind CSS y Sass.
- **Animaciones y 3D:** Spline, GSAP y Framer Motion.
- **Formulario de contacto:** Resend y Zod.

## Ejecutar el proyecto

Necesitas Node.js y npm instalados. Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre la dirección que aparece en la terminal, normalmente [http://localhost:3000](http://localhost:3000). Si el puerto está ocupado, utiliza el que indique Next.js.

## Configurar el formulario de contacto

Crea un archivo `.env.local` en la raíz del proyecto:

```env
RESEND_API_KEY=tu_clave_de_resend
```

Opcionalmente, configura `RESEND_FROM_EMAIL` con un remitente autorizado en Resend. Reinicia el servidor después de cambiar las variables. No compartas el archivo ni subas claves al repositorio.

## Publicar en Vercel

Importa el repositorio como proyecto Next.js y configura `RESEND_API_KEY` en las variables de entorno de producción. Si usas un dominio propio, configura `NEXT_PUBLIC_SITE_URL` con la dirección completa (por ejemplo, `https://tudominio.com`) para los enlaces de vista previa. Después de publicar, prueba el formulario desde la web y comprueba la bandeja de entrada. El remitente de prueba de Resend solo permite enviar al correo de la cuenta; para otros destinatarios se necesita un dominio verificado.

## Actualizar proyectos

La información de la galería se encuentra en `src/data/portfolio-projects.ts`. Las capturas se guardan en `public/assets/projects/` y se pueden asociar a cada proyecto desde ese archivo.

## Contacto

- **Correo:** [silvachorresaaron19@gmail.com](mailto:silvachorresaaron19@gmail.com)
- **GitHub:** [gaboiouu](https://github.com/gaboiouu)
- **LinkedIn:** [Aarón Gabriel Silva Chorres](https://www.linkedin.com/in/aar%C3%B3n-gabriel-silva-chorres-b13a50370/)
