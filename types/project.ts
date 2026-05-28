import type { Locale } from "@/types/preferences";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectCoverImage = {
  src: string | null;
  alt: string;
};

export type ProjectLocalizedFields = {
  title: string;
  shortDescription: string;
  category: string;
  role: string;
  tools: string[];
  tags: string[];
  challenge: string;
  insight: string;
  strategy: string;
  execution: string;
  impact: string;
};

export type Project = ProjectLocalizedFields & {
  slug: string;
  year: string;
  coverImage: ProjectCoverImage;
  featured: boolean;
  links?: ProjectLink[];
  translations?: Partial<Record<Locale, Partial<ProjectLocalizedFields>>>;
};
