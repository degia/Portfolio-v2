import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { skills, categories } from "@/data/skills";

const { img: MotionImg } = motion;

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-aos="zoom-in-up"
        >
          My <span className="text-primary">Skills</span>
        </h2>
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
        >
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-down"
        >
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-start gap-4"
            >
              <MotionImg
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="h-12 w-12 shrink-0 object-contain"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + (key % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: key * 0.2,
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <p className="font-light text-violet-600 text-sm">
                    {skill.sub}
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden shadow-[0_0_8px_rgba(139,92,246,0.6)]">
                    <div
                      className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                      style={{ width: skill.level + "%" }}
                    />
                  </div>
                  <span
                    className="absolute -top-5 -translate-x-1/2 text-xs text-muted-foreground"
                    style={{ left: skill.level + "%" }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
        {/* ← Penutup grid yang benar */}
      </div>
    </section>
  );
};
