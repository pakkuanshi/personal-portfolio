import type { Project } from "@/types/project";

type ProjectOverviewProps = {
  project: Project;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
  const overviewItems = [
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Tools", value: project.tools.join(", ") },
  ];

  return (
    <section className="site-container pb-14 md:pb-20">
      <dl className="grid overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {overviewItems.map((item) => (
          <div className="bg-background p-5" key={item.label}>
            <dt className="eyebrow">{item.label}</dt>
            <dd className="mt-3 text-sm leading-6 text-muted-foreground">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
