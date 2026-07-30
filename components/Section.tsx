type SectionItem = {
  title: string;
  text: string;
};

type SectionProps = {
  id: string;
  title: string;
  items?: SectionItem[];
};

export default function Section({ id, title, items = [] }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <h2 className="mb-6 text-2xl font-semibold text-slate-900 md:text-3xl">
        {title}
      </h2>

      <div className="space-y-4 text-slate-700 leading-7">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold text-slate-900">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
