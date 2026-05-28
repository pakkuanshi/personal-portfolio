import type { Locale } from "@/types/preferences";

export type PolaroidTransform = {
  x: number;
  y: number;
  rotation: number;
  scale: number;
};

export type ExperiencePolaroidCopy = {
  title: string;
  company: string;
  locationLabel: string;
  location: string;
  role: string;
  timeLabel: string;
  timePeriod: string;
  alt: string;
};

export type ExperiencePolaroid = {
  id: string;
  image: string;
  imageFit?: "cover" | "contain";
  imageType?: "logo" | "photo" | "collage";
  imagePadding?: "default" | "loose";
  href: string;
  zIndex: number;
  layout: {
    stack: PolaroidTransform;
    released: {
      desktop: PolaroidTransform;
      mobile: PolaroidTransform;
    };
  };
  translations: Record<Locale, ExperiencePolaroidCopy>;
};

export const experiencePolaroidSectionCopy: Record<Locale, { title: string }> = {
  en: {
    title: "Experiences",
  },
  "zh-CN": {
    title: "经历",
  },
  "zh-TW": {
    title: "經歷",
  },
};

const placeholderCopy: Record<Locale, ExperiencePolaroidCopy> = {
  en: {
    title: "Experience Placeholder",
    company: "Placeholder Company",
    locationLabel: "Location",
    location: "Placeholder Location",
    role: "Placeholder Role",
    timeLabel: "Time",
    timePeriod: "Placeholder Period",
    alt: "Placeholder experience image",
  },
  "zh-CN": {
    title: "经历占位",
    company: "公司占位",
    locationLabel: "城市",
    location: "地点占位",
    role: "职位占位",
    timeLabel: "时间",
    timePeriod: "时间占位",
    alt: "经历图片占位",
  },
  "zh-TW": {
    title: "經歷佔位",
    company: "公司佔位",
    locationLabel: "城市",
    location: "地點佔位",
    role: "職位佔位",
    timeLabel: "時間",
    timePeriod: "時間佔位",
    alt: "經歷圖片佔位",
  },
};

export const experiencePolaroids: ExperiencePolaroid[] = [
  {
    id: "lovart-seo-digital-marketing-intern",
    image: "/images/experiences/lovart-logo.svg",
    imageFit: "contain",
    imageType: "logo",
    href: "/experience#professional-experience",
    zIndex: 6,
    layout: {
      stack: { x: 0, y: 0, rotation: -4, scale: 1 },
      released: {
        desktop: { x: -21, y: -10, rotation: -12, scale: 0.68 },
        mobile: { x: -1.6, y: -18, rotation: -8, scale: 0.72 },
      },
    },
    translations: {
      en: {
        title: "Lovart",
        company: "Lovart",
        locationLabel: "Location",
        location: "Beijing, China",
        role: "SEO Digital Marketing Intern",
        timeLabel: "Time",
        timePeriod: "May 2026 to present",
        alt: "Lovart logo",
      },
      "zh-CN": {
        title: "Lovart",
        company: "Lovart",
        locationLabel: "城市",
        location: "北京，中国",
        role: "SEO数字营销实习生",
        timeLabel: "时间",
        timePeriod: "2026年5月至今",
        alt: "Lovart 标志",
      },
      "zh-TW": {
        title: "Lovart",
        company: "Lovart",
        locationLabel: "城市",
        location: "北京，中國",
        role: "SEO數位行銷實習生",
        timeLabel: "時間",
        timePeriod: "2026年5月至今",
        alt: "Lovart 標誌",
      },
    },
  },
  {
    id: "sheboygan-county-foster-care",
    image: "/images/experiences/sheboygan-foster-care.jpg",
    imageFit: "contain",
    imageType: "logo",
    href: "/experience#professional-experience",
    zIndex: 5,
    layout: {
      stack: { x: 0.55, y: 0.42, rotation: 3, scale: 0.98 },
      released: {
        desktop: { x: 20, y: -9, rotation: 10, scale: 0.68 },
        mobile: { x: 1.5, y: -10, rotation: 6, scale: 0.72 },
      },
    },
    translations: {
      en: {
        title: "Sheboygan County Foster Care",
        company: "Sheboygan County Foster Care",
        locationLabel: "Location",
        location: "Madison, WI",
        role: "",
        timeLabel: "Time",
        timePeriod: "Sept. 2025 to Dec. 2025",
        alt: "Sheboygan County Foster Care logo",
      },
      "zh-CN": {
        title: "Sheboygan寄养家庭组织",
        company: "Sheboygan寄养家庭组织",
        locationLabel: "城市",
        location: "Madison，WI",
        role: "",
        timeLabel: "时间",
        timePeriod: "2025年9月至2025年12月",
        alt: "Sheboygan寄养家庭组织标志",
      },
      "zh-TW": {
        title: "Sheboygan寄養家庭組織",
        company: "Sheboygan寄養家庭組織",
        locationLabel: "城市",
        location: "Madison，WI",
        role: "",
        timeLabel: "時間",
        timePeriod: "2025年9月至2025年12月",
        alt: "Sheboygan寄養家庭組織標誌",
      },
    },
  },
  {
    id: "experience-placeholder-03",
    image: "",
    href: "/experience#professional-experience",
    zIndex: 4,
    layout: {
      stack: { x: 1.05, y: 0.78, rotation: -2, scale: 0.96 },
      released: {
        desktop: { x: -22, y: 4, rotation: -8, scale: 0.68 },
        mobile: { x: -1.2, y: -2, rotation: -5, scale: 0.72 },
      },
    },
    translations: placeholderCopy,
  },
  {
    id: "experience-placeholder-04",
    image: "",
    href: "/experience#relevant-experience",
    zIndex: 3,
    layout: {
      stack: { x: 1.55, y: 1.14, rotation: 5, scale: 0.94 },
      released: {
        desktop: { x: 21, y: 5, rotation: 12, scale: 0.68 },
        mobile: { x: 1.3, y: 6, rotation: 7, scale: 0.72 },
      },
    },
    translations: placeholderCopy,
  },
  {
    id: "experience-placeholder-05",
    image: "",
    href: "/experience#relevant-experience",
    zIndex: 2,
    layout: {
      stack: { x: 2, y: 1.48, rotation: -5, scale: 0.92 },
      released: {
        desktop: { x: -13, y: 14, rotation: -10, scale: 0.68 },
        mobile: { x: -1.4, y: 14, rotation: -6, scale: 0.72 },
      },
    },
    translations: placeholderCopy,
  },
  {
    id: "experience-placeholder-06",
    image: "",
    href: "/experience#relevant-experience",
    zIndex: 1,
    layout: {
      stack: { x: 2.42, y: 1.82, rotation: 4, scale: 0.9 },
      released: {
        desktop: { x: 12, y: 14, rotation: 8, scale: 0.68 },
        mobile: { x: 1.2, y: 22, rotation: 5, scale: 0.72 },
      },
    },
    translations: placeholderCopy,
  },
];
