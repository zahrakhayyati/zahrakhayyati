import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  buildingArea: string;
  landscapingArea: string;
  floors: string;
  highlights: string[];
  designThemes: string[];
  imageSrc: string;
  hasPlans?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "school-building",
    number: "01",
    title: "Architectural Design and Planning of School Building (NO.1)",
    category: "Educational Infrastructure",
    location: "Bushehr, Iran",
    buildingArea: "2,950 m²",
    landscapingArea: "4,500 m²",
    floors: "3 Floors",
    highlights: ["12 Classrooms", "Capacity: 432 Students", "Climate-Responsive Cement Facade"],
    designThemes: ["Sustainable Architecture", "Energy Efficiency", "Bushehr Traditional Motifs"],
    imageSrc: "/images/portfolio/school-building-no-1.webp",
  },
  {
    id: "admin-residential",
    number: "02",
    title: "Architectural Design and Planning of Administrative & Residential Buildings (NO.2)",
    category: "Mixed-Use / Administrative & Residential",
    location: "Bushehr, Iran",
    buildingArea: "1,200 m²",
    landscapingArea: "200 m²",
    floors: "3 Floors",
    highlights: ["Ground Floor Plan Included", "First Floor Plan Included", "Second Floor Plan Included"],
    designThemes: ["Flexible Spatial Layouts", "Energy Optimization", "Patterns & Motifs"],
    imageSrc: "/images/portfolio/admin-residential-no-2.webp",
    hasPlans: true,
  },
  {
    id: "admin-building",
    number: "03",
    title: "Architectural Design and Planning of Administrative Buildings (NO.3)",
    category: "Administrative Infrastructure",
    location: "Bushehr, Iran",
    buildingArea: "1,200 m²",
    landscapingArea: "3,000 m²",
    floors: "3 Floors",
    highlights: ["Modular Workspace Design", "Integrated Services Coordination", "Climate Facade"],
    designThemes: ["Structural Flexibility", "Energy Performance", "Local Materiality"],
    imageSrc: "/images/portfolio/admin-building-no-3.webp",
  },
  {
    id: "residential-building",
    number: "04",
    title: "Architectural Design and Planning of Residential Buildings (NO.4)",
    category: "Residential Architecture",
    location: "Bushehr, Iran",
    buildingArea: "200 m²",
    landscapingArea: "1,900 m²",
    floors: "2 Floors",
    highlights: ["High Landscaping Ratio", "Traditional Shading Principles", "Microclimate Adaptation"],
    designThemes: ["Vernacular Architecture", "Passive Cooling", "Thermal Envelope"],
    imageSrc: "/images/portfolio/residential-building-no-4.webp",
  },
];

const RESEARCH_FOCUS = [
  {
    title: "Life-Cycle Spatial Planning Framework",
    desc: "Developing integrated methodologies for critical energy infrastructure resilience using MCDM, Grounded Theory, and PRISMA systematic protocols.",
  },
  {
    title: "BIM & Digital Twin Integration",
    desc: "Leveraging Revit, Navisworks, and VDC workflows for multi-disciplinary coordination in design-build project management.",
  },
  {
    title: "Sustainable Vernacular Architecture",
    desc: "Adapting hot-humid coastal climate strategies of Bushehr into modern cement material facades and passive thermal design.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      <header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="group flex flex-col">
            <span className="text-base font-semibold tracking-tight text-slate-900 group-hover:text-amber-700 transition-colors">
              Zahra Khayyati
            </span>
            <span className="text-xs font-mono text-slate-500 tracking-wider uppercase">
              Architect & Researcher
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-slate-900 transition-colors">Portfolio</a>
            <a href="#research" className="hover:text-slate-900 transition-colors">Research</a>
            <a href="#publications" className="hover:text-slate-900 transition-colors">Publications</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-24 md:space-y-36">
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              PhD Candidate · University of Tehran
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-[1.15]">
              Spatial Planning, <br />
              <span className="font-semibold text-slate-900">Sustainable Infrastructure</span> <br />
              & Architectural Practice.
            </h1>

            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              Architect, Design-Build Project Manager, and Academic Researcher specializing in
              <span className="text-slate-900 font-normal"> Life-Cycle Spatial Planning Frameworks</span> for critical energy infrastructure,
              BIM-driven project delivery, and climate-responsive architecture.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-medium">
              <a
                href="#portfolio"
                className="px-6 py-3.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow"
              >
                View Selected Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 bg-white border border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:text-slate-900 transition-all"
              >
                Get in Touch
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6 font-mono text-xs">
              <div>
                <span className="block text-slate-400 uppercase tracking-wider">Affiliation</span>
                <span className="text-slate-800 font-medium">Univ. of Tehran</span>
              </div>
              <div>
                <span className="block text-slate-400 uppercase tracking-wider">Location</span>
                <span className="text-slate-800 font-medium">Tehran / Bushehr</span>
              </div>
              <div>
                <span className="block text-slate-400 uppercase tracking-wider">Specialization</span>
                <span className="text-slate-800 font-medium">MCDM & BIM</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
              <Image
                src="/images/profile/zahra-portrait.jpeg"
                alt="Zahra Khayyati - Architect and Researcher"
                fill
                priority
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Zahra Khayyati | Zahra Khayyati</span>
              <span>Bushehr / Tehran, Iran</span>
            </div>
          </div>
        </section>

        <section id="portfolio" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono text-amber-800 tracking-widest uppercase font-semibold">
                Architecture & Planning
              </span>
              <h2 className="text-3xl font-light text-slate-900 tracking-tight mt-1">
                Selected Architectural Projects
              </h2>
            </div>
            <p className="text-sm font-mono text-slate-500 max-w-md">
              Design, planning, management, and technical supervision tailored to Bushehr coastal climate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono">
                    Project {project.number}
                  </div>
                  {project.hasPlans && (
                    <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-md text-slate-950 px-3 py-1 rounded-full text-xs font-mono font-medium">
                      Architectural Plans Included
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>{project.category}</span>
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 leading-snug group-hover:text-amber-800 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 text-xs font-mono text-slate-700">
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase">Building</span>
                      {project.buildingArea}
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase">Landscaping</span>
                      {project.landscapingArea}
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase">Floors</span>
                      {project.floors}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.highlights.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-slate-400 uppercase">Themes</span>
                    <span className="font-medium text-slate-700">{project.designThemes.join(" · ")}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="space-y-12 pt-8">
          <div className="pb-6 border-b border-slate-200">
            <span className="text-xs font-mono text-amber-800 tracking-widest uppercase font-semibold">
              PhD Research & Methodology
            </span>
            <h2 className="text-3xl font-light text-slate-900 tracking-tight mt-1">
              Spatial Decision-Making & Infrastructure Resilience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESEARCH_FOCUS.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200/80 space-y-4 hover:border-slate-300 transition-colors"
              >
                <span className="text-xs font-mono text-slate-400">0{idx + 1} / Research Pillar</span>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" className="space-y-8 bg-slate-900 text-white p-8 md:p-14 rounded-3xl">
          <div className="space-y-2">
            <span className="text-xs font-mono text-amber-400 tracking-widest uppercase">
              Publications
            </span>
            <h2 className="text-2xl font-light tracking-tight md:text-3xl">
              <a
                href="https://civilica.com/doc/2609379/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                A Compact Development Framework for Administrative-Support Complexes
              </a>
            </h2>
            <p className="text-sm text-slate-400 font-mono">
              6th International Conference on Modern Technologies in Architecture and Urban Planning, 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 border-t border-slate-800">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-mono">
                Featured Paper
              </div>
              <p className="text-slate-300 text-base font-light leading-relaxed">
                A case study of the <strong>Bushehr Nuclear Power Plant Development Plan</strong>, exploring strategies for critical energy infrastructure resilience through a compact development framework.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://civilica.com/doc/2609379/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-amber-500 text-slate-950 font-medium rounded-xl hover:bg-amber-400 transition-colors text-sm"
              >
                View Article on Civilica
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="space-y-12 pt-8">
          <div className="pb-6 border-b border-slate-200">
            <span className="text-xs font-mono text-amber-800 tracking-widest uppercase font-semibold">
              Get in Touch
            </span>
            <h2 className="text-3xl font-light text-slate-900 tracking-tight mt-1">
              Contact & Academic Profiles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <span className="text-xs font-mono text-slate-400 block">Academic Email</span>
              <a href="mailto:Sahar.khayyati@ut.ac.ir" className="text-sm font-semibold text-slate-900 hover:text-amber-800 transition-colors">
                Sahar.khayyati@ut.ac.ir
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <span className="text-xs font-mono text-slate-400 block">Direct Line</span>
              <a href="tel:+989171713561" className="text-sm font-semibold text-slate-900 hover:text-amber-800 transition-colors font-mono">
                +98 917 171 3561
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <span className="text-xs font-mono text-slate-400 block">ORCID Identifier</span>
              <a
                href="https://orcid.org/0009-0005-7018-0523"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-900 hover:text-amber-800 transition-colors font-mono truncate block"
              >
                0009-0005-7018-0523
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2">
              <span className="text-xs font-mono text-slate-400 block">LinkedIn Profile</span>
              <a
                href="https://www.linkedin.com/in/sahar-khayyati-94373b79"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-900 hover:text-amber-800 transition-colors truncate block"
              >
                sahar-khayyati-94373b79
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-12 bg-white mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>© {new Date().getFullYear()} Zahra Khayyati | All Rights Reserved.</div>
          <div>Architect · Design-Build Project Manager · Researcher</div>
        </div>
      </footer>
    </div>
  );
}
