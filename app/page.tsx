import React from 'react';
import Section from '../components/Section';

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="py-16 border-b border-gray-100">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          Architect · Design-Build Project Manager · Researcher
        </span>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-4 tracking-tight">
          Zahra Khayyati
        </h1>
        
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
          PhD Candidate in Spatial Planning & Architecture, specializing in Life-Cycle Spatial Planning Frameworks, 
          Multi-Criteria Decision-Making (MCDM), and Sustainable Critical Energy Infrastructure.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
          >
            Get in Touch
          </a>
          <a
            href="#research"
            className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-colors"
          >
            Explore Research
          </a>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About">
        <div className="space-y-4 text-slate-600 leading-relaxed text-base">
          <p>
            I am an architect and design-build project manager with extensive research experience in spatial planning, sustainable infrastructure development, and evidence-based decision frameworks.
          </p>
          <p>
            My work integrates architecture, urban and spatial planning, infrastructure governance, and advanced decision-making methodologies (MCDM, Grounded Theory, PRISMA) to foster resilient and sustainable built environments.
          </p>
        </div>
      </Section>

      {/* Research & Academic Focus */}
      <Section id="research" title="Research & Academic Focus">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Primary PhD Research</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Developing a comprehensive <strong>Life-Cycle Spatial Planning Framework for Critical Energy Infrastructure</strong>, utilizing hybrid MCDM methodologies, Grounded Theory, and systematic literature review (PRISMA).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Technical & Methodological Expertise</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Integrating spatial decision-making with modern digital tools including BIM (Revit/Navisworks), Digital Twins, Spatial AHP Analysis, and regulatory technical standards.
            </p>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Key Projects">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
            Featured Project
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
            12-Class Sustainable School — Bushehr
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            An integrated research-to-practice initiative encompassing architectural design, climate-responsive strategies, sustainable construction management, and BIM integration tailored for regional conditions.
          </p>
        </div>
      </Section>

      {/* Publications & Books */}
      <Section id="publications" title="Publications & Forthcoming Books">
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Book Series</span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              Spatial Decision-Making in Sustainable Infrastructure Development
            </h3>
            <p className="text-sm text-slate-500 mb-2">University of Tehran Press (Forthcoming)</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Volume 1: Educational Infrastructure</strong> — Presenting the <em>Zahra Khayati Framework</em> for evidence-based spatial design, BIM adoption, and project delivery.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-xl font-bold">Let&apos;s Connect</h3>
            <p className="text-slate-400 text-sm mt-1">Open to academic research collaborations, spatial planning consultations, and design-build initiatives.</p>
          </div>
          <a
            href="mailto:contact@zahrakhayyati.com"
            className="px-5 py-2.5 bg-white text-slate-900 font-semibold rounded-xl text-sm hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            Email Me
          </a>
        </div>
      </Section>
    </main>
  );
}
