import { Calendar } from "lucide-react";
import { experiences } from "@/data/experiences";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-aos="zoom-in-up"
        >
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="relative border-l-2 border-primary/30 pl-6 space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative bg-card p-6 rounded-lg shadow-xs card-hover text-left"
              data-aos="fade-up"
            >
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="absolute -left-[48px] top-6 h-12 w-12 rounded-full bg-card object-contain ring-2 ring-primary/30 shadow"
              />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {exp.type}
                </span>
              </div>

              <p className="text-primary font-medium mb-1">{exp.company}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{exp.location}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </span>
              </div>

              <p className="text-muted-foreground text-justify">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
