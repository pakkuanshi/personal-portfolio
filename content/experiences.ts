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
  imageBackgroundColor?: string;
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
    imageBackgroundColor: "#ffffff",
    href: "/experiences/professional#lovart",
    zIndex: 6,
    layout: {
      stack: { x: 0, y: 0, rotation: -4, scale: 1 },
      released: {
        desktop: { x: -17, y: -8, rotation: -12, scale: 0.62 },
        mobile: { x: -1.6, y: -18, rotation: -8, scale: 0.72 },
      },
    },
    translations: {
      en: {
        title: "Lovart",
        company: "Lovart",
        locationLabel: "Location",
        location: "Beijing, China",
        role: "Growth Marketing Intern",
        timeLabel: "Time",
        timePeriod: "May 2026 to present",
        alt: "Lovart logo",
      },
      "zh-CN": {
        title: "Lovart",
        company: "Lovart",
        locationLabel: "城市",
        location: "北京，中国",
        role: "增长营销实习生",
        timeLabel: "时间",
        timePeriod: "2026年5月至今",
        alt: "Lovart 标志",
      },
      "zh-TW": {
        title: "Lovart",
        company: "Lovart",
        locationLabel: "城市",
        location: "北京，中國",
        role: "增長行銷實習生",
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
    imageBackgroundColor: "#ffffff",
    href: "/experiences/projects#foster-care",
    zIndex: 5,
    layout: {
      stack: { x: 0.55, y: 0.42, rotation: 3, scale: 0.98 },
      released: {
        desktop: { x: 16, y: -8, rotation: 10, scale: 0.62 },
        mobile: { x: 1.5, y: -10, rotation: 6, scale: 0.72 },
      },
    },
    translations: {
      en: {
        title: "Sheboygan County Foster Care Campaign",
        company: "Sheboygan County Foster Care Campaign",
        locationLabel: "Location",
        location: "Madison, WI",
        role: "",
        timeLabel: "Time",
        timePeriod: "Sept. 2025 to Dec. 2025",
        alt: "Sheboygan County Foster Care logo",
      },
      "zh-CN": {
        title: "Sheboygan 寄养家庭Campaign",
        company: "Sheboygan 寄养家庭Campaign",
        locationLabel: "城市",
        location: "Madison，WI",
        role: "",
        timeLabel: "时间",
        timePeriod: "2025年9月至2025年12月",
        alt: "Sheboygan寄养家庭组织标志",
      },
      "zh-TW": {
        title: "Sheboygan 寄養家庭Campaign",
        company: "Sheboygan 寄養家庭Campaign",
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
    id: "publicis-groupe-media-planning-performance-marketing-intern",
    image: "/images/experiences/publicis-groupe.jpg",
    imageFit: "contain",
    imageType: "logo",
    imageBackgroundColor: "#ffffff",
    href: "/experiences/professional#publicis",
    zIndex: 4,
    layout: {
      stack: { x: 1.05, y: 0.78, rotation: -2, scale: 0.96 },
      released: {
        desktop: { x: -17, y: 4, rotation: -8, scale: 0.62 },
        mobile: { x: -1.2, y: -2, rotation: -5, scale: 0.72 },
      },
    },
    translations: {
      en: {
        title: "Publicis Groupe ｜ Marriott Account",
        company: "Publicis Groupe ｜ Marriott Account",
        locationLabel: "Location",
        location: "Shanghai, China",
        role: "Media Planning & Performance Marketing Intern",
        timeLabel: "Time",
        timePeriod: "May 2025 to Aug. 2026",
        alt: "Publicis Groupe logo",
      },
      "zh-CN": {
        title: "阳狮集团｜万豪酒店",
        company: "阳狮集团｜万豪酒店",
        locationLabel: "城市",
        location: "上海，中国",
        role: "媒介策划与效果营销实习生",
        timeLabel: "时间",
        timePeriod: "2025年5月至2026年8月",
        alt: "阳狮集团标志",
      },
      "zh-TW": {
        title: "陽獅集團｜萬豪酒店",
        company: "陽獅集團｜萬豪酒店",
        locationLabel: "城市",
        location: "上海，中國",
        role: "媒體策劃與成效行銷實習生",
        timeLabel: "時間",
        timePeriod: "2025年5月至2026年8月",
        alt: "陽獅集團標誌",
      },
    },
  },
  {
    id: "grape-nut-campaign",
    image: "/images/experiences/grape-nut.jpg",
    imageFit: "contain",
    imageType: "logo",
    imageBackgroundColor: "#ffffff",
    href: "/experiences/projects#grape-nuts",
    zIndex: 3,
    layout: {
      stack: { x: 1.55, y: 1.14, rotation: 5, scale: 0.94 },
      released: {
        desktop: { x: 17, y: 5, rotation: 12, scale: 0.62 },
        mobile: { x: 1.3, y: 6, rotation: 7, scale: 0.72 },
      },
    },
    translations: {
      en: {
        title: "Grape-Nut Campaign",
        company: "Grape-Nut Campaign",
        locationLabel: "Location",
        location: "Madison, WI (Remote)",
        role: "",
        timeLabel: "Time",
        timePeriod: "May 2025 to Aug. 2026",
        alt: "Grape-Nuts campaign logo",
      },
      "zh-CN": {
        title: "Grape-Nut Campaign",
        company: "Grape-Nut Campaign",
        locationLabel: "城市",
        location: "Madison，WI（远程）",
        role: "",
        timeLabel: "时间",
        timePeriod: "2025年5月至2026年8月",
        alt: "Grape-Nuts Campaign 标志",
      },
      "zh-TW": {
        title: "Grape-Nut Campaign",
        company: "Grape-Nut Campaign",
        locationLabel: "城市",
        location: "Madison，WI（遠端）",
        role: "",
        timeLabel: "時間",
        timePeriod: "2025年5月至2026年8月",
        alt: "Grape-Nuts Campaign 標誌",
      },
    },
  },
  {
    id: "good-to-go-campaign-web-developer",
    image: "/images/experiences/good-to-go-logo.png",
    imageFit: "contain",
    imageType: "logo",
    imageBackgroundColor: "#ffffff",
    href: "/experiences/projects#good-to-go",
    zIndex: 2,
    layout: {
      stack: { x: 2, y: 1.48, rotation: -5, scale: 0.92 },
      released: {
        desktop: { x: -11, y: 12, rotation: -10, scale: 0.62 },
        mobile: { x: -1.4, y: 14, rotation: -6, scale: 0.72 },
      },
    },
    translations: {
      en: {
        title: "Good to Go Campaign",
        company: "Good to Go Campaign",
        locationLabel: "Location",
        location: "Madison, WI",
        role: "Web Developer",
        timeLabel: "Time",
        timePeriod: "Jan. 2025 to May. 2025",
        alt: "Good to Go Campaign logo",
      },
      "zh-CN": {
        title: "Good to Go Campaign",
        company: "Good to Go Campaign",
        locationLabel: "城市",
        location: "Madison，WI",
        role: "网站开发者",
        timeLabel: "时间",
        timePeriod: "2025年1月至2025年5月",
        alt: "Good to Go Campaign 标志",
      },
      "zh-TW": {
        title: "Good to Go Campaign",
        company: "Good to Go Campaign",
        locationLabel: "城市",
        location: "Madison，WI",
        role: "網站開發者",
        timeLabel: "時間",
        timePeriod: "2025年1月至2025年5月",
        alt: "Good to Go Campaign 標誌",
      },
    },
  },
  {
    id: "shanghai-media-group-yicai-brand-promotion-assistant",
    image: "/images/experiences/yicai-logo.jpg",
    imageFit: "contain",
    imageType: "logo",
    imageBackgroundColor: "#ffffff",
    href: "/experiences/professional#yicai",
    zIndex: 1,
    layout: {
      stack: { x: 2.42, y: 1.82, rotation: 4, scale: 0.9 },
      released: {
        desktop: { x: 11, y: 12, rotation: 8, scale: 0.62 },
        mobile: { x: 1.2, y: 22, rotation: 5, scale: 0.72 },
      },
    },
    translations: {
      en: {
        title: "Shanghai Media Group | Yicai",
        company: "Shanghai Media Group | Yicai",
        locationLabel: "Location",
        location: "Shanghai, China",
        role: "Brand Promotion Assistant",
        timeLabel: "Time",
        timePeriod: "Jul. 2024 to Aug. 2024",
        alt: "Shanghai Media Group and Yicai logo",
      },
      "zh-CN": {
        title: "上海广播电视台｜第一财经",
        company: "上海广播电视台｜第一财经",
        locationLabel: "城市",
        location: "上海，中国",
        role: "品牌推广助理",
        timeLabel: "时间",
        timePeriod: "2024年7月至2024年8月",
        alt: "上海广播电视台与第一财经标志",
      },
      "zh-TW": {
        title: "上海廣播電視台｜第一財經",
        company: "上海廣播電視台｜第一財經",
        locationLabel: "城市",
        location: "上海，中國",
        role: "品牌推廣助理",
        timeLabel: "時間",
        timePeriod: "2024年7月至2024年8月",
        alt: "上海廣播電視台與第一財經標誌",
      },
    },
  },
];
