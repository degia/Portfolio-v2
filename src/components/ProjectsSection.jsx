import { Title } from "@radix-ui/react-toast";
import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects, categories } from "@/data/projects";

const { img: MotionImg, div: MotionDiv } = motion;

export const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Filter: tampilkan project jika kategori aktif ada di array categories project
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory),
        );

  const selectedGallery = selectedProject
    ? selectedProject.gallery || [selectedProject.image]
    : [];

  const openGallery = (project) => {
    setSelectedProject(project);
    setActiveIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setActiveIndex(0);
  };

  const goTo = (index) => {
    setActiveIndex((index + selectedGallery.length) % selectedGallery.length);
  };

  useEffect(() => {
    if (!selectedProject) return;
    const len = selectedGallery.length;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") setActiveIndex((prev) => (prev + 1) % len);
      if (e.key === "ArrowLeft")
        setActiveIndex((prev) => (prev - 1 + len) % len);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject, activeIndex]);

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
                className="group bg-card rounded-lg overflow-hidden shadow-xs"
                data-aos="fade-up"
              >
                <div
                  className="relative h-48 overflow-hidden cursor-pointer group/img"
                  onClick={() => openGallery(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-medium">
                      <ZoomIn size={18} /> View Gallery
                    </span>
                  </div>
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

                      {/* Google Drive */}
                      {project.gdrive !== "#" && (
                        <a
                          href={project.gdrive}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors"
                          aria-label={`Demo ${project.title}`}
                        >
                          <img
                            width="25"
                            height="25"
                            src="https://img.icons8.com/color/48/google-drive--v2.png"
                            alt="google-drive--v2"
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

      {/* Lightbox Carousel Modal */}
      <AnimatePresence>
        {selectedProject && (
          <MotionDiv
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeGallery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeGallery}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close gallery"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Title */}
              <div className="text-center text-white mb-4">
                <h3 className="text-lg font-semibold">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-white/70">
                  {activeIndex + 1} / {selectedGallery.length}
                </p>
              </div>

              {/* Main Image */}
              <div className="relative h-[60vh] min-h-[300px] rounded-xl overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <MotionImg
                    key={activeIndex}
                    src={selectedGallery[activeIndex]}
                    alt={`${selectedProject.title} ${activeIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>

                {/* Prev / Next */}
                {selectedGallery.length > 1 && (
                  <>
                    <button
                      onClick={() => goTo(activeIndex - 1)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-7 w-7" />
                    </button>
                    <button
                      onClick={() => goTo(activeIndex + 1)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-7 w-7" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedGallery.length > 1 && (
                <div className="flex justify-center gap-3 mt-4 flex-wrap">
                  {selectedGallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300",
                        index === activeIndex
                          ? "border-primary scale-105"
                          : "border-transparent opacity-60 hover:opacity-100",
                      )}
                      aria-label={`Go to image ${index + 1}`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};
