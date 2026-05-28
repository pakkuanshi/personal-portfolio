export type NavItem = {
  href: string;
  key: "home" | "experiences" | "projects" | "skills" | "about" | "contact";
  children?: NavSubItem[];
};

export type NavSubItem = {
  href: string;
  key: "professionalExperiences" | "relevantExperiences";
};

export type SiteConfig = {
  name: string;
  role: string;
  email: string;
  navigation: NavItem[];
};
