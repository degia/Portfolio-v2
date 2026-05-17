import { Title } from "@radix-ui/react-toast";
import {
  ArrowRight,
  ExternalLink,
  Github,
  GalleryVertical,
} from "lucide-react";
import { useState } from "react";
import { projects, categories } from "@/data/projects";

export const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ Filter: tampilkan project jika kategori aktif ada di array categories project
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory),
        );

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
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* 🔘 Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 📦 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                data-aos="fade-up"
              >
                <div className="h-48 overflow-hidden ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mt-4 px-6 mb-3"></div>
                  <h3 className="text-xl font-semibold mb-1 px-6">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm m-3 font-light px-6">
                    {project.description}
                  </p>
                  {/* 🏷️ Multiple Category Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* 🛠️ Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="action-project p-5">
                  <div className="flex items-center justify-between mt-auto px-0">
                    {/* Link Demo & GitHub */}
                    <div className="flex items-center space-x-3 mt-auto pt-2">
                      {/* Link Demo */}
                      {project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors"
                          aria-label={`Demo ${project.title}`}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}

                      {/* Kaggle */}
                      {project.kaggle !== "#" && (
                        <a
                          href={project.kaggle}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors"
                          aria-label={`Demo ${project.title}`}
                        >
                          <img
                            width="25"
                            height="25"
                            src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/external-kaggle-an-online-community-of-data-scientists-and-machine-learners-owned-by-google-logo-tritone-tal-revivo.png"
                            alt="kaggle"
                          />
                        </a>
                      )}

                      {/* Link Github */}
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors"
                          aria-label={`GitHub ${project.title}`}
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {/* Link Behance (optional) */}
                      {project.behance !== "#" && (
                        <a
                          href={project.behance}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors"
                          aria-label={`Behance ${project.title}`}
                        >
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/color/48/behance.png"
                            alt="behance"
                          />
                        </a>
                      )}
                    </div>

                    {/* Date Project Update */}
                    <span className="text-xs text-muted-foreground text-violet-400">
                      Last Update : {project.update || "On Progress"}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/degia"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-white"
          >
            Visit my Github <ArrowRight size={15} /> <Github size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
