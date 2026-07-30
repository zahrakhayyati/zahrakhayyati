import { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <h2 className="text-sm uppercase tracking-[0.28em] text-muted">{title}</h2>
          </div>
          <div className="md:col-span-9">{children}</div>
        </div>
      </div>
    </section>
  );
}
