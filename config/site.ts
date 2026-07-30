import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Kristy Shi",
  role: "Marketing & Strategic Communication",
  email: "hello@example.com",
  navigation: [
    { href: "/", key: "home" },
    {
      href: "/experiences",
      key: "experiences",
      children: [
        {
          href: "/experiences/professional",
          key: "professionalExperiences",
        },
        {
          href: "/experiences/projects",
          key: "relevantExperiences",
        },
      ],
    },
    { href: "/skills", key: "skills" },
    { href: "/about", key: "about" },
    { href: "/contact", key: "contact" },
  ],
};
