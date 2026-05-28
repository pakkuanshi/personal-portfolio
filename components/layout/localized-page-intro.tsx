"use client";

import { PageIntro } from "@/components/layout/page-intro";
import { usePreferences } from "@/components/preferences/preferences-provider";
import { dictionary } from "@/lib/i18n";

type PageKey = keyof (typeof dictionary)["en"]["pages"];

type LocalizedPageIntroProps = {
  page: PageKey;
};

export function LocalizedPageIntro({ page }: LocalizedPageIntroProps) {
  const { locale } = usePreferences();
  const copy = dictionary[locale].pages[page];

  return (
    <PageIntro
      description={copy.description}
      eyebrow={copy.eyebrow}
      title={copy.title}
    />
  );
}
