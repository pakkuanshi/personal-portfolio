"use client";

import Link from "next/link";

import { experienceIndexContent } from "@/content/experience-index";
import { usePreferences } from "@/components/preferences/preferences-provider";

const enhancedProfessionalImages: Record<string, string> = {
  publicis: "/images/experiences/publicis-groupe-enhanced.png",
  yicai: "/images/experiences/yicai-logo-enhanced.png",
};

function getProfessionalImage(id: string, image?: string) {
  return enhancedProfessionalImages[id] ?? image;
}

export function ProfessionalArchiveContent() {
  const { locale } = usePreferences();
  const category = experienceIndexContent[locale].categories.professional;
  const copy = experienceIndexContent[locale];

  return (
    <div className="bg-[hsl(40_25%_97%)] pb-24 pt-28 text-[hsl(225_15%_12%)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,hsl(25_25%_10%),hsl(20_26%_8%))] dark:text-[hsl(42_32%_91%)] md:pb-32 md:pt-32">
      <header className="site-container max-w-6xl">
        <Link
          className="mb-7 inline-flex text-xs uppercase tracking-[0.16em] text-[hsl(220_9%_33%/0.58)] transition duration-200 hover:-translate-x-0.5 hover:text-[hsl(220_15%_16%/0.84)] hover:underline hover:underline-offset-4 dark:text-[hsl(38_18%_78%/0.58)] dark:hover:text-[hsl(42_32%_91%/0.88)]"
          href="/experiences"
        >
          ← {copy.backLabel}
        </Link>
        <h1 className="experience-polaroid-title text-left">
          {category.title}
        </h1>
        <p className="mt-7 max-w-2xl text-sm leading-7 text-[hsl(220_9%_33%/0.7)] dark:text-[hsl(38_18%_78%/0.68)] md:mt-8 md:text-base md:leading-8">
          {category.subtitle}
        </p>
      </header>

      <section
        aria-label={category.title}
        className="site-container mt-20 grid max-w-6xl gap-24 md:mt-24 md:gap-32"
      >
        {category.items.map((item, index) => {
          const imageFirst = index % 2 === 0;
          const image = getProfessionalImage(item.id, item.image);

          return (
            <article
              className="grid scroll-mt-28 gap-9 md:scroll-mt-32 md:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] md:items-center md:gap-14 lg:gap-20"
              id={item.id}
              key={item.id}
            >
              <div
                aria-hidden="true"
                className={`relative aspect-[1.24] overflow-hidden rounded-[1.05rem] border border-[hsl(34_20%_76%/0.44)] bg-[hsl(38_34%_88%)] shadow-[0_20px_56px_hsl(30_18%_20%/0.08)] transition duration-500 ease-out dark:border-[hsl(34_24%_70%/0.18)] dark:bg-[hsl(40_27%_79%)] dark:shadow-[0_24px_64px_hsl(18_34%_4%/0.46)] ${
                  imageFirst ? "md:order-1" : "md:order-2"
                }`}
              >
                {image ? (
                  <img
                    alt=""
                    className="h-full w-full bg-white object-contain p-12 transition duration-700 ease-out sm:p-14"
                    src={image}
                  />
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[hsl(38_34%_88%)] transition duration-700 ease-out dark:bg-[hsl(38_28%_80%)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,hsl(38_46%_94%/0.9),transparent_38%),linear-gradient(135deg,hsl(28_26%_76%/0.24),transparent_44%),linear-gradient(180deg,hsl(42_40%_91%/0.72),hsl(34_28%_82%/0.72))]" />
                    <span className="relative font-serif text-[clamp(3.5rem,8vw,6.5rem)] leading-none text-[hsl(220_18%_15%/0.1)] dark:text-[hsl(20_16%_13%/0.16)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
              </div>

              <div
                className={`max-w-xl ${
                  imageFirst ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.68rem] uppercase leading-none text-[hsl(220_10%_34%/0.58)] dark:text-[hsl(38_18%_78%/0.58)]">
                  <span>{item.timePeriod}</span>
                </div>
                <h2 className="mt-5 font-serif text-[clamp(2.2rem,4vw,4.25rem)] leading-[1.08] text-[hsl(220_18%_14%/0.9)] dark:text-[hsl(42_31%_88%/0.9)]">
                  {item.title}
                </h2>
                {item.role ? (
                  <p className="mt-5 text-sm leading-6 text-[hsl(220_10%_32%/0.58)] dark:text-[hsl(38_18%_78%/0.58)] md:text-[0.95rem]">
                    {item.role}
                  </p>
                ) : null}
                <p className="mt-5 text-sm leading-7 text-[hsl(220_9%_32%/0.7)] dark:text-[hsl(38_18%_78%/0.66)] md:text-base md:leading-8">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
