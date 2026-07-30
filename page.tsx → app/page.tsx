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

      <section id="home">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-28 md:pt-28">
          <p className="mb-6 text-sm uppercase tracking-[0.28em] text-muted">
            Zahra Khayyati
          </p>
          <h1 className="max-w-4xl text-5xl font-light leading-tight tracking-tight md:text-7xl">
            Architecture, research, and spatial decision-making for sustainable infrastructure.
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-8 text-muted">
            Zahra Khayyati is a PhD candidate in architecture and spatial planning at the
            University of Tehran. Her work bridges academic research, design thinking,
            infrastructure planning, and implementation frameworks for resilient and
            sustainable development.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#research"
              className="border border-ink px-5 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-ink hover:text-sand"
            >
              Explore Research
            </a>
            <a
              href="#contact"
              className="border border-black/15 px-5 py-3 text-xs uppercase tracking-[0.2em] text-muted transition hover:border-ink hover:text-ink"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <Section id="research" title="Research">
        <div className="space-y-8">
          <p className="max-w-reading text-lg leading-8 text-muted">
            Her research focuses on life-cycle spatial planning frameworks for critical
            energy infrastructure, with particular attention to decision systems,
            resilience, sustainability, and the translation of theory into implementable
            planning models.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-black/10 p-6">
              <h3 className="text-lg font-medium">Core Themes</h3>
              <ul className="mt-4 space-y-3 text-muted">
                <li>• Spatial planning for critical infrastructure</li>
                <li>• Sustainable urban and regional development</li>
                <li>• Infrastructure resilience and life-cycle thinking</li>
                <li>• Design-informed planning methodologies</li>
              </ul>
            </div>
            <div className="border border-black/10 p-6">
              <h3 className="text-lg font-medium">Methodologies</h3>
              <ul className="mt-4 space-y-3 text-muted">
                <li>• MCDM and AHP-based evaluation</li>
                <li>• Grounded Theory</li>
                <li>• PRISMA-informed systematic review</li>
                <li>• BIM-enabled decision support workflows</li>
              </ul>
            </div>
          </div>
          <p className="max-w-reading text-lg leading-8 text-muted">
            A central stream of this work is the evolving “Zahra Khayyati Framework” for
            spatial decision-making in sustainable infrastructure development.
          </p>
        </div>
      </Section>

      <Section id="work" title="Work">
        <div className="grid gap-6 md:grid-cols-3">
          {projectList.map((item) => (
            <article key={item.title} className="border border-black/10 p-6">
              <h3 className="text-xl font-medium leading-snug">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="publications" title="Publications">
        <div className="space-y-5">
          {publications.map((item) => (
            <div key={item} className="border-b border-black/10 pb-5 text-lg leading-8 text-muted">
              {item}
            </div>
          ))}
          <p className="pt-2 text-sm uppercase tracking-[0.2em] text-muted">
            Publication list can be expanded as articles, papers, and books are finalized.
          </p>
        </div>
      </Section>

      <Section id="about" title="About">
        <div className="space-y-6">
          <p className="max-w-reading text-lg leading-8 text-muted">
            Zahra Khayyati works at the intersection of architecture, spatial planning,
            sustainable development, and project delivery. Her profile is intentionally
            positioned as both academic and professional, allowing future expansion toward
            consultancy, research collaborations, and design-led planning practice.
          </p>
          <p className="max-w-reading text-lg leading-8 text-muted">
            Technical interests include Excel-based analytical workflows, circular-based
            project estimation, BIM processes, Revit, Navisworks, AutoCAD, and digital
            twin-oriented planning environments.
          </p>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="space-y-4 text-lg text-muted">
          <p>
            <span className="text-ink">Email:</span> Sahar.khayyati@ut.ac.ir
          </p>
          <p>
            <span className="text-ink">ORCID:</span> 0009-0005-7018-0523
          </p>
          <p>
            <span className="text-ink">LinkedIn:</span> sahar-khayyati-94373b79
          </p>
          <p>
            <span className="text-ink">Affiliation:</span> University of Tehran
          </p>
        </div>
      </Section>
    </main>
  );
}
