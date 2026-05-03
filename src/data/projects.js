// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "EDA Parfumes",
    description: "EDA project analyzing the sales data of a perfume company...",
    image: "/projects/EDA Parfumes.jpg",
    tags: ["Power BI", "Excel", "Power Query", "Python"],
    categories: ["Data Analyst", "Data Visualization"],
    update: "30 April 2026",
    demoUrl: "https://portfolio-gia1.vercel.app/",
    github: "https://portfolio-gia1.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Web Portfolio",
    description: "This is a portfolio website discussing all project data.",
    image: "/projects/web-portfolio.png",
    tags: ["Vite", "React", "Js", "TailwindCss"],
    categories: ["Web Development", "Portfolio"],
    update: "04 Mei 2026",
    demoUrl: "https://portfolio-gia1.vercel.app/",
    github: "https://github.com/degia/Portfolio-v1",
  },
  {
    id: 3,
    title: "Davista",
    description: "This is a portfolio website discussing all project data and Devapps.",
    image: "/projects/web-project2.png",
    tags: ["Vite", "React", "Js", "TailwindCss"],
    categories: ["Web Development", "UI/UX", "Portfolio"],
    update: "04 Mei 2026",
    demoUrl: "https://portfolio-gia2.vercel.app/",
    github: "https://github.com/degia/Portfolio-v2",
  },
  {
    id: 4,
    title: "Catalog Vegetables",
    description: "The design features a range of products divided into several categories:...",
    image: "/projects/design_poster_040526.jpg",
    tags: ["Adobe Photoshop", "Adobe Illustrator"],
    categories: ["Design"],
    update: "04 Mei 2026",
    demoUrl: "#",
    github: "#",
    behance: "https://www.behance.net/nuvista",
  },
  {
    id: 5,
    title: "Logo. Design Selection",
    description: "The design features a range of products divided into several categories:...",
    image: "/projects/design_logo_270822.jpg",
    tags: ["Adobe Photoshop", "Adobe Illustrator"],
    categories: ["Design"],
    update: "27 Agustus 2022",
    demoUrl: "#",
    github: "#",
    behance: "https://www.behance.net/gallery/151315845/Logo-Design-Selection-(Self-Project)",
  },
  // ... project lainnya
];

// ✅ Generate kategori unik secara otomatis (flat + deduplicate)
export const categories = [
  "All",
  ...new Set(projects.flatMap((project) => project.categories)),
];

export default projects;