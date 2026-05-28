"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { dictionary } from "@/lib/i18n";

const aboutPreviewImagePath = "/images/about-preview.jpg";

export function AboutPreviewSection() {
  const { locale } = usePreferences();
  const copy = dictionary[locale].home.aboutPreview;

  return (
    <section className="about-preview-section" aria-labelledby="about-preview-title">
      <div className="site-container about-preview-inner">
        <div className="about-preview-copy">
          <h2 className="about-preview-title" id="about-preview-title">
            {copy.title}
          </h2>

          <div className="about-preview-details" aria-label={copy.educationLabel}>
            <div className="about-preview-detail">
              <p className="about-preview-main">{copy.school}</p>
              <p className="about-preview-meta">{copy.period}</p>
            </div>

            <div className="about-preview-detail">
              <p className="about-preview-main">{copy.program}</p>
              <p className="about-preview-meta">{copy.degree}</p>
            </div>
          </div>

          <Link className="about-preview-link" href="/about">
            <span>{copy.link}</span>
            <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="about-preview-media" aria-label={copy.imageLabel}>
          <Image
            alt={copy.imageAlt}
            className="about-preview-image"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            src={aboutPreviewImagePath}
          />
        </div>
      </div>
    </section>
  );
}
