import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl font-bold mb-12 text-center"
          data-aos="zoom-in-up"
        >
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="space-y-6">
            <h3
              className="text-2xl font-semibold items-center"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              Passionate Web Developer & Data Analyst
            </h3>
            <p
              className="text-muted-foreground text-justify"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              I’m a versatile creator at the intersection of frontend
              development and user-centered design. With a strong foundation in
              modern web technologies like React, JavaScript, and Tailwind CSS,
              I build responsive, performant, and accessible web experiences
              that work seamlessly across devices. My design approach is rooted
              in UI/UX principles—emphasizing clarity, usability, and visual
              harmony.
            </p>

            <p
              className="text-muted-foreground text-justify"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              I’m a detail-oriented Data Analyst with a strong foundation in
              extracting, interpreting, and visualizing data to drive strategic
              decisions. Over the years, I’ve developed robust analytical
              workflows using SQL, Python, and visualization tools to uncover
              trends, measure performance, and support data-driven storytelling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="$contacts"
                className="cosmic-button text-white"
                data-aos="fade-up"
              >
                {""}
                Get In Touch
              </a>

              <a
                href="$contacts"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 "
                data-aos="fade-up"
                ta-aos-duration="2000"
              >
                {""}
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div
              className="gradient-border p-6 card-hover"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Data. Design. Development.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="gradient-border p-6 card-hover"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Personal</h4>
                  <p className="text-muted-foreground">
                    Integiry, Objective, Smart
                  </p>
                </div>
              </div>
            </div>

            <div
              className="gradient-border p-6 card-hover"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Work Hours</h4>
                  <p className="text-muted-foreground">Almost 24 hour I Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
