import { useState, useEffect } from "react";
import { Calendar, CheckCircle2, X, Briefcase } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences } from "@/data/experiences";

const { div: MotionDiv, li: MotionLi } = motion;

export const ExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  useEffect(() => {
    if (!selectedExp) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedExp(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedExp]);

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
            <MotionDiv
              key={exp.id}
              className="relative bg-card p-6 rounded-lg shadow-xs text-left"
              data-aos="fade-up"
              whileHover={{
                y: -2,
                scale: 1.02,
                boxShadow: "0 12px 30px rgba(139,92,246,0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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

              <p className="text-muted-foreground text-justify mb-4">
                {exp.description}
              </p>

              <button
                onClick={() => setSelectedExp(exp)}
                className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm font-medium"
                aria-label={`View job description for ${exp.role}`}
              >
                View Job Descriptions
              </button>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedExp && (
          <MotionDiv
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedExp(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <MotionDiv
              className="w-full max-w-2xl bg-card rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-4 p-6 border-b border-border">
                <MotionDiv
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08, duration: 0.3 }}
                >
                  <img
                    src={selectedExp.logo}
                    alt={`${selectedExp.company} logo`}
                    className="h-14 w-14 rounded-full object-contain ring-2 ring-primary/30 bg-card"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-bold">{selectedExp.role}</h3>
                    <p className="text-primary text-sm">{selectedExp.company}</p>
                  </div>
                </MotionDiv>
                <button
                  onClick={() => setSelectedExp(null)}
                  className="p-2 rounded-full hover:bg-secondary/60 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 max-h-[60vh] overflow-y-auto text-left">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {selectedExp.type}
                  </span>
                  <span>{selectedExp.location}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {selectedExp.period}
                  </span>
                </div>

                <h4 className="font-semibold text-base mb-3">Job Descriptions</h4>
                <ul className="space-y-3">
                  {selectedExp.jobdesk.map((job, index) => (
                    <MotionLi
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.06, duration: 0.3 }}
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span>{job}</span>
                    </MotionLi>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};
