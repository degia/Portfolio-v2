import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Data Analyst",
    company: "PT TechNusantara",
    location: "Jakarta, Indonesia",
    period: "2023 - Present",
    type: "Full-time",
    description:
      "Analyzing business data, building dashboards with Power BI, and delivering actionable insights to support strategic decisions.",
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    company: "PT Digital Solusi",
    location: "Bandung, Indonesia",
    period: "2022 - 2023",
    type: "Internship",
    description:
      "Supported data cleaning and preparation using Python and Excel, and created weekly performance reports for stakeholders.",
  },
  {
    id: 3,
    role: "IT Support",
    company: "PT Karya Mandiri",
    location: "Medan, Indonesia",
    period: "2021 - 2022",
    type: "Contract",
    description:
      "Provided hardware and network troubleshooting, managed asset inventory, and maintained internal documentation.",
  },
];

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
              <span className="absolute -left-[38px] top-6 p-2 rounded-full bg-primary/10">
                <Briefcase className="h-4 w-4 text-primary" />
              </span>

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
