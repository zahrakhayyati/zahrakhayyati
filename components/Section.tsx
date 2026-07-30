import React from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16 border-b border-gray-100 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 tracking-tight">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
