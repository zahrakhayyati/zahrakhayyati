type SectionProps = {
  id: string;
  title: string;
  items: string[];
};

export default function Section({ id, title, items }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
        {title}
      </h2>

      <ul className="space-y-3 text-slate-700 leading-7">
        {items.map((item, index) => (
          <li key={index} className="list-disc ml-6">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
