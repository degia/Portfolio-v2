import { Briefcase, Code, Database, User } from "lucide-react";

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
              Passionate Data Engineer & Data Analyst
            </h3>
            <p
              className="text-muted-foreground text-justify"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              Detail-oriented Data Analyst with 4+ years of hands-on experience
              in transforming complex datasets into actionable business
              insights. Combines strong analytical skills with full-stack
              development expertise (PHP, JavaScript, Laravel, React) to build
              intuitive, data-rich dashboards and internal tools for inventory,
              procurement, and asset management. Proficient in SQL, data
              visualization, and mobile-responsive UI design using TailwindCSS.
              Passionate about creating self-contained, user-friendly analytics
              applications that support operational efficiency—without depending
              on third-party APIs
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
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Engineer</h4>
                  <p className="text-muted-foreground">
                    Membangun dan Mengelola Infrastruktur Data. Mengembangkan
                    dan Mengoptimalkan Database. Membuat ETL/ELT Processes.
                    Memastikan Kualitas dan Keandalan Data. Mendukung Data
                    Analyst & Tim Lain. Mengotomatisasi Alur Kerja Data. Bekerja
                    dengan Teknologi Modern
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
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analyst</h4>
                  <p className="text-muted-foreground">
                    Descriptive , Diagnostic , Predictive , Prescriptive
                    Analytics. Data Visualization. Data Cleaning and
                    Preparation. Statistical Analysis. Reporting and
                    Dashboarding. Business Intelligence Tools. Collaboration
                    with Stakeholders.
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
