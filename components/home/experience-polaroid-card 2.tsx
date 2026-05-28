import type { CSSProperties } from "react";

import Image from "next/image";
import Link from "next/link";

import type {
  ExperiencePolaroid,
  ExperiencePolaroidCopy,
} from "@/content/experiences";

export type PolaroidVisualState = {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
  zIndex: number;
};

type ExperiencePolaroidCardProps = {
  copy: ExperiencePolaroidCopy;
  experience: ExperiencePolaroid;
  state: PolaroidVisualState;
};

export function ExperiencePolaroidCard({
  copy,
  experience,
  state,
}: ExperiencePolaroidCardProps) {
  const imageType = experience.imageType ?? "photo";
  const imageFit =
    experience.imageFit ?? (imageType === "logo" ? "contain" : "cover");
  const imagePadding = experience.imagePadding ?? "default";
  const ariaLabel = copy.role
    ? `${copy.company}, ${copy.role}`
    : copy.company;

  const cardStyle = {
    "--polaroid-x": `${state.x}rem`,
    "--polaroid-y": `${state.y}rem`,
    "--polaroid-rotation": `${state.rotation}deg`,
    "--polaroid-hover-rotation": `${state.rotation * 0.72}deg`,
    "--polaroid-scale": state.scale,
    "--polaroid-opacity": state.opacity,
    "--polaroid-z": state.zIndex,
  } as CSSProperties;

  return (
    <Link
      aria-label={ariaLabel}
      className="experience-polaroid-card"
      href={experience.href}
      style={cardStyle}
    >
      <div
        className={`experience-polaroid-image-frame experience-polaroid-image-frame--${imageFit} experience-polaroid-image-frame--type-${imageType} experience-polaroid-image-frame--padding-${imagePadding}`}
      >
        <div
          className={`experience-polaroid-image-inner experience-polaroid-image-inner--type-${imageType}`}
        >
          {experience.image && imageFit === "contain" ? (
            <Image
              alt={copy.alt}
              className={`experience-polaroid-image experience-polaroid-image--contain experience-polaroid-image--type-${imageType}`}
              height={900}
              src={experience.image}
              width={900}
            />
          ) : experience.image ? (
            <Image
              alt={copy.alt}
              className="experience-polaroid-image experience-polaroid-image--cover"
              fill
              sizes="(min-width: 1024px) 24rem, 84vw"
              src={experience.image}
            />
          ) : (
            <div className="experience-polaroid-placeholder" aria-hidden="true" />
          )}
        </div>
      </div>

      <div className="experience-polaroid-meta">
        <p className="experience-polaroid-company">{copy.company}</p>
        {copy.role ? (
          <p className="experience-polaroid-role">{copy.role}</p>
        ) : null}
        <div className="experience-polaroid-details">
          <span className="experience-polaroid-detail">
            <span className="experience-polaroid-detail-label">
              {copy.locationLabel}
            </span>
            <span>{copy.location}</span>
          </span>
          <span className="experience-polaroid-detail">
            <span className="experience-polaroid-detail-label">
              {copy.timeLabel}
            </span>
            <span>{copy.timePeriod}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
