import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 md:px-10 lg:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Architect • Project Manager • Researcher
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Zahra Khayyati
          </h1>

          <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            PhD candidate in Civil Engineering / Spatial Planning & Architecture,
            focused on sustainable infrastructure, spatial decision-making, and
            life-cycle planning frameworks for critical energy infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#about"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Explore Profile
            </a>
            <a
              href="#research"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              View Research
            </a>
          </div>
        </div>
      </section>

      <Section
        id="about"
        title="About"
        content={[
          "I am an architect and design-build project manager with a strong academic focus on spatial planning, sustainable infrastructure, and evidence-based decision-making.",
          "My work connects architecture, urban and regional planning, infrastructure governance, and research methodology to support resilient and future-oriented development.",
        ]}
      />

      <Section
        id="research"
        title="Research Focus"
        content={[
          "My doctoral research develops a Life-Cycle Spatial Planning Framework for Critical Energy Infrastructure.",
          "The research integrates qualitative and quantitative approaches, including Grounded Theory, PRISMA-based review strategies, and multi-criteria decision-making methods such as AHP.",
          "I am particularly interested in infrastructure sustainability, spatial resilience, policy integration, and strategic planning under complex uncertainty.",
        ]}
      />

      <Section
        id="projects"
        title="Selected Projects"
        content={[
          "Development of a 12-class sustainable school project in Bushehr, including research, design, and construction-related planning.",
          "Academic and applied work in BIM-enabled coordination, design management, and digital workflows using tools such as Revit, Navisworks, AutoCAD, and Digital Twin concepts.",
          "Ongoing authorship and framework development for the book series 'Spatial Decision-Making in Sustainable Infrastructure Development'.",
        ]}
      />

      <Section
        id="publications"
        title="Publications & Writing"
        content={[
          "Current writing activities include journal-oriented research development, conference papers, and a multi-volume scholarly book project.",
          "A major publication goal is to prepare high-quality research outputs aligned with international journals, including Sustainable Cities and Society.",
        ]}
      />

      <Section
        id="contact"
        title="Contact"
        content={[
          "For academic collaboration, research discussion, design-build coordination, or speaking opportunities, please get in touch via your preferred professional contact channel.",
          "This website will continue to evolve as a platform for research, projects, and publications.",
        ]}
      />

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500 md:px-10 lg:px-12">
          © {new Date().getFullYear()} Zahra Khayyati. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
