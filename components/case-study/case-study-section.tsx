import type { ReactNode } from "react";

type CaseStudySectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function CaseStudySection({
  eyebrow,
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="site-container grid gap-8 border-t border-border py-14 md:grid-cols-[0.7fr_1.3fr] md:py-20">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="heading-section mt-4 max-w-md">{title}</h2>
      </div>
      <div className="body-large measure">{children}</div>
    </section>
  );
}
