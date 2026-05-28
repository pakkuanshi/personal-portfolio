import { cn } from "@/lib/utils";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: PageIntroProps) {
  return (
    <header className={cn("site-container section-y", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="heading-display mt-5 max-w-5xl">{title}</h1>
      <p className="body-large mt-6 max-w-2xl">{description}</p>
    </header>
  );
}
