"use client";

import { useState } from "react";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { ResumeRequestModal } from "@/components/about/resume-request-modal";
import { aboutContent } from "@/content/about";

export function AboutPageContent() {
  const { locale } = usePreferences();
  const copy = aboutContent[locale];
  const [portraitLoaded, setPortraitLoaded] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const leftInfoBlocks = copy.infoBlocks.slice(0, 2);
  const rightInfoBlocks = copy.infoBlocks.slice(2);

  return (
    <main className="about-page-shell">
      <section className="site-container about-page-hero">
        <div className="about-page-copy">
          <h1 className="about-page-intro">
            {copy.introLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
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

      <button
        aria-haspopup="dialog"
        className="about-page-resume-cta"
        onClick={() => setResumeModalOpen(true)}
        type="button"
      >
        <span aria-hidden="true">↗</span>
        {copy.resumeCta}
      </button>

      <ResumeRequestModal
        copy={copy.resumeRequest}
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </main>
  );
}
