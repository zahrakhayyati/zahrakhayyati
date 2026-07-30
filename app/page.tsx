import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

const projectList = [
  {
    title: "Sustainable School Development in Bushehr",
    text: "Research, design, and construction-oriented study for a 12-class sustainable school, integrating educational infrastructure planning, environmental responsiveness, and implementation logic.",
  },
  {
    title: "Spatial Planning for Critical Energy Infrastructure",
    text: "Doctoral research exploring a life-cycle spatial planning framework using multi-criteria decision-making, grounded theory, and systematic review methods.",
  },
  {
    title: "BIM and Decision Support Integration",
    text: "Ongoing work connecting planning intelligence, project management, and digital workflows through BIM, Revit, Navisworks, and digital twin thinking.",
  },
];

const publications = [
  "Journal articles and conference papers on sustainable infrastructure, planning, and architecture.",
  "Book development: Spatial Decision-Making in Sustainable Infrastructure Development.",
  "Forthcoming academic outputs related to life-cycle planning and critical infrastructure resilience.",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-sand text-ink">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-28">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
            Academic Portfolio
          </p>
          <h1 className="mb-6 text-4xl font-light leading-tight md:text-6xl">
            Zahra Khayyati
          </h1>
          <p className="text-lg leading-8 text-stone-700 md:text-xl">
            PhD researcher in architecture, spatial planning, and sustainable
            infrastructure, with a focus on life-cycle decision-making,
            educational environments, and critical energy systems.
          </p>
        </div>
      </section>

      <Section
        id="about"
        title="About"
        items={[
          "PhD candidate in Architecture, University of Tehran.",
          "Research focus: life-cycle spatial planning for critical energy infrastructure.",
          "Interests include sustainable school design, spatial decision-making, and design-led project delivery.",
        ]}
      />

      <Section id="projects" title="Selected Projects" items={projectList} />

      <Section id="publications" title="Publications & Writing" items={publications} />

      <Section
        id="contact"
        title="Contact"
        items={[
          "Email: Sahar.khayyati@ut.ac.ir",
          "ORCID: 0009-0005-7018-0523",
        ]}
      />
    </main>
  );
}
