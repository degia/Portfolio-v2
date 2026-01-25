import { Title } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github, Key } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nuvista - Web Portfolio",
    description: "Web portfolio design services",
    image: "/projects/web-nuvista.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://lumenza.infinityfree.me/",
    github: "#",
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    description: "A Beautiful landing page app using React & Tailwindcss",
    image: "/projects/web-ds.png",
    tags: ["React", "TailwindCss"],
    demoUrl: "#",
    github: "#",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description: "A Beautiful landing page app using React & Tailwindcss",
    image: "/projects/web-minigames.png",
    tags: ["React", "TailwindCss"],
    demoUrl: "#",
    github: "#",
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    description: "A Beautiful landing page app using React & Tailwindcss",
    image: "/projects/web-skydive.png",
    tags: ["React", "TailwindCss"],
    demoUrl: "#",
    github: "#",
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    description: "A Beautiful landing page app using React & Tailwindcss",
    image: "/projects/web-designselection.png",
    tags: ["React", "TailwindCss"],
    demoUrl: "#",
    github: "#",
  },
  {
    id: 6,
    title: "SaaS Landing Page",
    description: "A Beautiful landing page app using React & Tailwindcss",
    image: "/projects/web-designselection.png",
    tags: ["React", "TailwindCss"],
    demoUrl: "#",
    github: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          data-aos="zoom-in"
        >
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          Here re some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 font-light">
                {project.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3 px-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {""}
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {""}
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/degia"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-white"
          >
            Visit my Github <ArrowRight size={15} /> <Github size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
