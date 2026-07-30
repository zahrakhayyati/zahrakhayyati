type SectionProps = {
  id: string;
  title: string;
  content: string[];
};

export default function Section({ id, title, content }: SectionProps) {
  return (
    <section id={id} className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
            {title}
          </h2>

          <div className="space-y-4">
            {content.map((paragraph, index) => (
              <p
                key={`${id}-${index}`}
                className="text-base leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
