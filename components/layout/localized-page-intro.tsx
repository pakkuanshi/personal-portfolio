"use client";

import { PageIntro } from "@/components/layout/page-intro";
import { usePreferences } from "@/components/preferences/preferences-provider";
import { dictionary } from "@/lib/i18n";

type PageKey = keyof (typeof dictionary)["en"]["pages"];

type LocalizedPageIntroProps = {
  className?: string;
  page: PageKey;
};

export function LocalizedPageIntro({ className, page }: LocalizedPageIntroProps) {
  const { locale } = usePreferences();
  const copy = dictionary[locale].pages[page];

  return (
    <PageIntro
      description={copy.description}
      eyebrow={copy.eyebrow}
      className={className}
      title={copy.title}
    />
  );
}
