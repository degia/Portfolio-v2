import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Web Developer
  { name: "React Js", sub:"Vite, Tailwindcss, Js, Ts", level: 60, category: "Web Dev" },
  { name: "Laravel 12", sub:"PHP, Tailwindcss, React, Js, Css", level: 60, category: "Web Dev" },
  { name: "CodeIgniter", sub: "PHP, Css, HTML, Js", level: 60, category: "Web Dev" },
  { name: "API", level: 25, category: "Web Dev" },
  { name: "VCS [Git, GitHub]", level: 70, category: "Web Dev" },
  { name: "DBMS", sub:"Mysql, MariaDB, PostgreeSQL, etc", level: 75, category: "Web Dev" },
  
  // Data Analyst
  { name: "SQL Database", sub:"Mysql, MariaDB, PostgreeSQL, etc", level: 75, category: "Data Analyst" },
  { name: "Python", sub:"Data Clean, Analythical data", level: 50, category: "Data Analyst" },
  { name: "Python Lib", sub: "Pandas, Numpy, Matplotlib, Seaborn", level: 50, category: "Data Analyst" },
  { name: "Excel Advanced", sub: "Power Query, Pivots, Data Graph", level: 80, category: "Data Analyst" },
  { name: "Data Visualization", sub: "Excel Graph, Power BI, Tableu", level: 75, category: "Data Analyst" },

  // Graphics Design
  { name: "Canva", level: 50, category: "Graphics Design" },
  { name: "Affinity", level: 30, category: "Graphics Design" },
  { name: "Adobe Photoshop", level: 80, category: "Graphics Design" },
  { name: "Adobe Illustrator", level: 80, category: "Graphics Design" },
  { name: "Adobe XD", level: 80, category: "Graphics Design" },
  { name: "Figma", level: 60, category: "Graphics Design" },
];

const categories = ["all", "Web Dev", "Data Analyst", "Graphics Design"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
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
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
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
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <p className="font-light text-violet-600 text-sm">{skill.sub}</p>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>{" "}
        {/* ← Penutup grid yang benar */}
      </div>
    </section>
  );
};
