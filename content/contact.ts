import type { Locale } from "@/types/preferences";

type ContactLinkItem = {
  href: string;
  label: string;
  newTab?: boolean;
  value: string;
};

type ContactTextItem = {
  label: string;
  value: string | string[];
};

export type ContactItem = ContactLinkItem | ContactTextItem;

type ContactContent = {
  closing: string;
  description: string;
  eyebrow: string;
  items: ContactItem[];
  title: string;
};

export const contactContent: Record<Locale, ContactContent> = {
  en: {
    eyebrow: "CONTACT",
    title: "LET'S CONNECT",
    description:
      "Whether you're hiring, looking for a collaborator, or simply want to chat about digital marketing, analytics, AI products, or new opportunities, I'd love to hear from you.",
    items: [
      {
        href: "mailto:Pakkuanshi@gmail.com",
        label: "Email",
        value: "Pakkuanshi@gmail.com",
      },
      {
        href: "https://www.linkedin.com/in/pakkuan-kristy-shi",
        label: "LinkedIn",
        newTab: true,
        value: "www.linkedin.com/in/pakkuan-kristy-shi",
      },
      {
        label: "Location",
        value: ["Madison, WI, USA", "Open to relocate"],
      },
      {
        label: "Availability",
        value: "Open to internship and full-time opportunities",
      },
    ],
    closing:
      "Thanks for visiting my portfolio. I look forward to connecting with you.",
  },
  "zh-CN": {
    eyebrow: "CONTACT",
    title: "LET'S CONNECT",
    description:
      "如果你正在招聘、寻找合作者，或想聊聊数字营销、数据分析、AI 产品与新的机会，欢迎联系我。",
    items: [
      {
        href: "mailto:Pakkuanshi@gmail.com",
        label: "EMAIL",
        value: "Pakkuanshi@gmail.com",
      },
      {
        href: "https://www.linkedin.com/in/pakkuan-kristy-shi",
        label: "LinkedIn",
        newTab: true,
        value: "www.linkedin.com/in/pakkuan-kristy-shi",
      },
      {
        label: "Location",
        value: ["Madison, WI, USA", "Open to relocate"],
      },
      {
        label: "Availability",
        value: "Open to internship and full-time opportunities",
      },
    ],
    closing: "感谢你浏览我的作品集，期待与你建立联系。",
  },
  "zh-TW": {
    eyebrow: "CONTACT",
    title: "LET'S CONNECT",
    description:
      "如果你正在招聘、尋找合作者，或想聊聊數位行銷、數據分析、AI 產品與新的機會，歡迎聯絡我。",
    items: [
      {
        href: "mailto:Pakkuanshi@gmail.com",
        label: "EMAIL",
        value: "Pakkuanshi@gmail.com",
      },
      {
        href: "https://www.linkedin.com/in/pakkuan-kristy-shi",
        label: "LinkedIn",
        newTab: true,
        value: "www.linkedin.com/in/pakkuan-kristy-shi",
      },
      {
        label: "Location",
        value: ["Madison, WI, USA", "Open to relocate"],
      },
      {
        label: "Availability",
        value: "Open to internship and full-time opportunities",
      },
    ],
    closing: "感謝你瀏覽我的作品集，期待與你建立聯繫。",
  },
};
