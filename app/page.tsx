import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

const projectList = [
  {
    title: "12-Class Sustainable School — Bushehr",
    text: "An integrated research-to-practice initiative encompassing architectural design, climate-responsive strategies, and sustainable construction management tailored for regional conditions.",
  },
  {
    title: "Spatial Planning for Critical Energy Infrastructure",
    text: "Doctoral research exploring a life-cycle spatial planning framework using multi-criteria decision-making (MCDM), grounded theory, and systematic review (PRISMA).",
  },
  {
    title: "BIM and Decision Support Integration",
    text: "Connecting planning intelligence and digital workflows through BIM (Revit/Navisworks), Digital Twins, and Spatial AHP Analysis.",
  },
];

const publications = [
  "Journal articles and conference papers on sustainable infrastructure, planning, and architecture.",
  "Book Series: Spatial Decision-Making in Sustainable Infrastructure Development (University of Tehran Press).",
  "Volume 1: Educational Infrastructure — featuring the Zahra Khayyati Framework.",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#1a1a1a]">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-28 md:pt-28">
        <p className="mb-6 text-sm uppercase tracking-[0.28em] text-gray-500 font-medium">
          Zahra Khayyati | زهرا خیاطی
        </p>
        <h1 className="max-w-4xl text-5xl font-light leading-tight tracking-tight md:text-7xl">
          Architect · Design-Build Project Manager · Researcher
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          PhD Candidate in Architecture & Spatial Planning at the University of Tehran. 
          Specializing in Life-Cycle Spatial Planning Frameworks for Critical Infrastructure.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#contact" className="rounded-full bg-[#1a1a1a] px-8 py-3 text-white hover:bg-gray-800 transition">Get in Touch</a>
          <a href="#projects" className="rounded-full border border-gray-300 px-8 py-3 hover:bg-gray-50 transition">View Projects</a>
        </div>
      </section>

      {/* About Section */}
      <Section title="About" id="about">
        <p className="text-lg leading-relaxed text-gray-700">
          I am an architect and design-build project manager with extensive research experience in spatial planning, 
          sustainable infrastructure development, and evidence-based decision frameworks. 
          My work integrates architecture, infrastructure governance, and advanced decision-making methodologies 
          to foster resilient built environments.
        </p>
      </Section>

      {/* Projects Section */}
      <Section title="Key Projects" id="projects">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div key={index} className="group">
              <h3 className="mb-4 text-xl font-semibold group-hover:text-gray-600 transition">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed">{project.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section title="Publications & Books" id="publications">
        <ul className="space-y-6">
          {publications.map((pub, index) => (
            <li key={index} className="border-l-2 border-gray-200 pl-6 py-1 text-gray-700 italic">
              {pub}
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Contact</h2>
        <div className="rounded-3xl bg-[#1a1a1a] p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Let&apos;s Connect</h3>
            <p className="text-gray-400 max-w-md">
              Open to academic research collaborations, spatial planning consultations, and design-build initiatives.
            </p>
            
            <div className="space-y-3 text-sm md:text-base">
              <p className="flex items-center gap-2">
                <span className="text-gray-500">Institution:</span> 
                University of Tehran, Department of Architectural Engineering
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-500">Email:</span>
                <a href="mailto:Sahar.khayyati@ut.ac.ir" className="hover:text-gray-300 underline underline-offset-4">Sahar.khayyati@ut.ac.ir</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-500">Phone:</span>
                <a href="tel:+989171713561" className="hover:text-gray-300 transition">+98 917 171 3561</a>
              </p>
              <div className="flex gap-4 pt-2">
                <a href="https://orcid.org/0009-0005-7018-0523" target="_blank" rel="noreferrer" className="text-sm border border-gray-700 px-4 py-1 rounded-full hover:bg-white hover:text-black transition">ORCID</a>
                <a href="https://www.linkedin.com/in/sahar-khayyati-94373b79" target="_blank" rel="noreferrer" className="text-sm border border-gray-700 px-4 py-1 rounded-full hover:bg-white hover:text-black transition">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <a href="mailto:Sahar.khayyati@ut.ac.ir" className="inline-block rounded-full bg-white px-10 py-4 font-bold text-black hover:bg-gray-200 transition shadow-lg">
            Email Me
          </a>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Zahra Khayyati. All rights reserved.
      </footer>
    </main>
  );
}
