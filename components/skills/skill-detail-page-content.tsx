"use client";

import {
  ArrowLeft,
  Bot,
  Brush,
  ChartNoAxesCombined,
  ClipboardList,
  Database,
  FileText,
  Globe,
  Megaphone,
  Search,
  Target,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import { usePreferences } from "@/components/preferences/preferences-provider";
import {
  getSkillCategory,
  skillsDetailPageCopy,
  type SkillToolIcon,
} from "@/content/skills";

type SkillDetailPageContentProps = {
  slug: string;
};

const toolIconMap: Record<SkillToolIcon, LucideIcon> = {
  advertising: Megaphone,
  analytics: ChartNoAxesCombined,
  automation: Bot,
  content: Brush,
  data: Database,
  document: FileText,
  research: ClipboardList,
  search: Search,
  strategy: Target,
  web: Globe,
};

export function SkillDetailPageContent({ slug }: SkillDetailPageContentProps) {
  const { locale } = usePreferences();
  const category = getSkillCategory(slug);

  if (!category) {
    return null;
  }

  const copy = category.translations[locale];
  const pageCopy = skillsDetailPageCopy[locale];
  const primaryHeadingId = `${slug}-primary-skills`;
  const capabilitiesHeadingId = `${slug}-capabilities`;
  const toolsTitle = copy.toolsTitle ?? pageCopy.toolsTitle;
  const toolsDescription = copy.toolsDescription ?? pageCopy.toolsDescription;
  const capabilitiesTitle = copy.capabilitiesTitle ?? pageCopy.capabilitiesTitle;
  const capabilitiesDescription =
    copy.capabilitiesDescription ?? pageCopy.capabilitiesDescription;
  const hasTools = copy.tools.length > 0;
  const hasCapabilities = copy.details.length > 0;
  const primaryGridClassName = copy.toolsTitle
    ? "mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
    : "mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4";

  return (
    <div className="min-h-[calc(100vh-3.25rem)] bg-[hsl(40_25%_97%)] text-[hsl(220_18%_12%)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,hsl(25_25%_10%),hsl(20_26%_8%))] dark:text-[hsl(42_32%_91%)]">
      <main className="site-container pb-24 pt-20 md:pb-28 md:pt-24 lg:pb-32 lg:pt-28">
        <nav
          aria-label="Skills navigation"
          className="flex items-center justify-between gap-6 text-[0.72rem] uppercase text-[hsl(220_10%_34%/0.58)] dark:text-[hsl(38_18%_78%/0.6)]"
        >
          <Link
            className="inline-flex items-center gap-2 transition-colors hover:text-[hsl(220_12%_20%/0.84)] dark:hover:text-[hsl(38_20%_88%/0.86)]"
            href="/skills"
          >
            <ArrowLeft aria-hidden="true" size={14} strokeWidth={1.6} />
            {pageCopy.backLabel}
          </Link>
          <span>{category.number}</span>
        </nav>

        <header className="mt-8 border-y border-[hsl(34_18%_68%/0.34)] py-8 dark:border-[hsl(38_18%_58%/0.2)] md:mt-9 md:py-9 lg:py-10">
          <h1 className="max-w-5xl font-serif text-[clamp(2.6rem,5.2vw,4.35rem)] font-medium leading-[1.02] tracking-normal text-balance text-[hsl(220_18%_14%/0.92)] dark:text-[hsl(42_31%_88%/0.94)]">
            {copy.title}
          </h1>
        </header>

        {hasTools ? (
          <section
            aria-labelledby={primaryHeadingId}
            className="mt-10 md:mt-12"
          >
            <div className="grid gap-5 md:grid-cols-[0.36fr_1fr] md:items-end md:gap-12">
              <div>
                <h2
                  className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-medium leading-none tracking-normal"
                  id={primaryHeadingId}
                >
                  {toolsTitle}
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-[hsl(220_9%_32%/0.66)] dark:text-[hsl(38_18%_78%/0.66)]">
                {toolsDescription}
              </p>
            </div>

            <div className={primaryGridClassName}>
              {copy.tools.map((tool) => {
                const Icon = tool.icon ? toolIconMap[tool.icon] : null;

                return (
                  <article
                    className="group min-h-[11.25rem] border border-[hsl(34_18%_68%/0.3)] bg-[hsl(42_30%_94%/0.62)] p-5 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[hsl(28_24%_52%/0.36)] hover:bg-[hsl(42_34%_96%/0.78)] hover:shadow-[0_16px_32px_hsl(30_18%_24%/0.07)] dark:border-[hsl(38_18%_58%/0.18)] dark:bg-[hsl(30_12%_16%/0.6)] dark:hover:border-[hsl(38_22%_68%/0.28)] dark:hover:bg-[hsl(30_13%_19%/0.78)] dark:hover:shadow-[0_18px_34px_hsl(24_12%_4%/0.24)]"
                    key={tool.name}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-[1.35rem] font-medium leading-tight tracking-normal text-[hsl(220_18%_14%/0.9)] dark:text-[hsl(42_31%_88%/0.9)]">
                        {tool.name}
                      </h3>
                      {Icon ? (
                        <Icon
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 shrink-0 text-[hsl(220_9%_34%/0.48)] transition-colors group-hover:text-[hsl(220_14%_20%/0.72)] dark:text-[hsl(42_18%_82%/0.44)] dark:group-hover:text-[hsl(42_24%_88%/0.78)]"
                          strokeWidth={1.5}
                        />
                      ) : null}
                    </div>
                    <p className="mt-6 text-sm leading-6 text-[hsl(220_9%_32%/0.68)] dark:text-[hsl(38_18%_78%/0.68)]">
                      {tool.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>
        ) : null}

        {hasCapabilities ? (
          <section
            aria-labelledby={capabilitiesHeadingId}
            className={hasTools ? "mt-20 md:mt-24" : "mt-10 md:mt-12"}
          >
            <div className="grid gap-5 md:grid-cols-[0.36fr_1fr] md:items-end md:gap-12">
              <div>
                <h2
                  className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-medium leading-none tracking-normal"
                  id={capabilitiesHeadingId}
                >
                  {capabilitiesTitle}
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-[hsl(220_9%_32%/0.66)] dark:text-[hsl(38_18%_78%/0.66)]">
                {capabilitiesDescription}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {copy.details.map((capability, index) => (
                <article
                  className="min-h-[12rem] border border-[hsl(34_18%_68%/0.28)] bg-[hsl(42_28%_95%/0.52)] p-5 transition duration-200 ease-out hover:border-[hsl(28_24%_52%/0.34)] hover:bg-[hsl(42_34%_96%/0.74)] dark:border-[hsl(38_18%_58%/0.16)] dark:bg-[hsl(30_12%_16%/0.5)] dark:hover:border-[hsl(38_22%_68%/0.24)] dark:hover:bg-[hsl(30_13%_19%/0.7)]"
                  key={capability.name}
                >
                  <span className="text-[0.72rem] uppercase text-[hsl(220_9%_34%/0.52)] dark:text-[hsl(42_18%_82%/0.5)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-serif text-[1.45rem] font-medium leading-tight tracking-normal text-[hsl(220_18%_14%/0.9)] dark:text-[hsl(42_31%_88%/0.9)]">
                    {capability.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[hsl(220_9%_32%/0.68)] dark:text-[hsl(38_18%_78%/0.68)]">
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
