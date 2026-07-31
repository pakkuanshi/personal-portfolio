"use client";

import { useState } from "react";
import Link from "next/link";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { aboutContent } from "@/content/about";

export function AboutPageContent() {
  const { locale } = usePreferences();
  const copy = aboutContent[locale];
  const [portraitLoaded, setPortraitLoaded] = useState(true);
  const leftInfoBlocks = copy.infoBlocks.slice(0, 2);
  const rightInfoBlocks = copy.infoBlocks.slice(2);

  return (
    <main className="about-page-shell">
      <section className="site-container about-page-hero">
        <div className="about-page-copy">
          <p className="font-serif text-[clamp(1.24rem,2vw,1.82rem)] font-medium leading-none tracking-normal text-[hsl(220_18%_12%/0.86)] dark:text-[hsl(42_28%_90%/0.86)]">
            Kristy Shi
          </p>
          <h1 className="about-page-intro">
            {copy.introLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <Link
            className="group mt-8 inline-flex w-fit items-center gap-2 border border-[hsl(34_18%_68%/0.38)] px-4 py-2.5 text-sm leading-none text-[hsl(220_16%_14%/0.74)] transition-colors duration-200 hover:border-[hsl(28_24%_52%/0.46)] hover:text-[hsl(220_18%_10%/0.92)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(28_24%_52%/0.45)] dark:border-[hsl(38_18%_58%/0.24)] dark:text-[hsl(42_24%_86%/0.74)] dark:hover:border-[hsl(38_24%_74%/0.34)] dark:hover:text-[hsl(42_30%_94%/0.92)]"
            href="/resume"
          >
            {copy.resumeCta}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </Link>
        </div>

        <div className="about-page-portrait" aria-label={copy.portraitAlt}>
          {portraitLoaded ? (
            <img
              alt={copy.portraitAlt}
              className="about-page-portrait-image"
              onError={() => setPortraitLoaded(false)}
              src={copy.portraitImage}
            />
          ) : (
            <div
              className="about-page-portrait-placeholder"
              role="img"
              aria-label={copy.portraitAlt}
            />
          )}
        </div>
      </section>

      <section className="about-page-info" aria-label="About information">
        <div className="site-container about-page-info-grid">
          <div className="about-page-info-column">
            {leftInfoBlocks.map((block) => (
              <section className="about-page-info-block" key={block.label}>
                <p className="about-page-info-label">{block.label}</p>
                <div className="about-page-info-items">
                  {block.items.map((item) => (
                    <p
                      className={
                        item.variant === "meta"
                          ? "about-page-info-item about-page-info-item--meta"
                          : "about-page-info-item"
                      }
                      key={item.text}
                    >
                      {item.text}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="about-page-info-column">
            {rightInfoBlocks.map((block) => (
              <section className="about-page-info-block" key={block.label}>
                <p className="about-page-info-label">{block.label}</p>
                <div className="about-page-info-items">
                  {block.items.map((item) => (
                    <p
                      className={
                        item.variant === "meta"
                          ? "about-page-info-item about-page-info-item--meta"
                          : "about-page-info-item"
                      }
                      key={item.text}
                    >
                      {item.text}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
