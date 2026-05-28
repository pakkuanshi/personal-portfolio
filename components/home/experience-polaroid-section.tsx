"use client";

import type { CSSProperties, RefObject } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  ExperiencePolaroidCard,
  type PolaroidVisualState,
} from "@/components/home/experience-polaroid-card";
import {
  experiencePolaroidSectionCopy,
  experiencePolaroids,
  type PolaroidTransform,
} from "@/content/experiences";
import { usePreferences } from "@/components/preferences/preferences-provider";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function useSectionProgress(sectionRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const update = () => {
      const section = sectionRef.current;

      if (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const scrollDistance = Math.max(rect.height - viewportHeight, 1);
        const nextProgress = clamp(-rect.top / scrollDistance);

        setProgress((currentProgress) =>
          Math.abs(currentProgress - nextProgress) > 0.001
            ? nextProgress
            : currentProgress,
        );
      }

      animationFrame = window.requestAnimationFrame(update);
    };

    animationFrame = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [sectionRef]);

  return progress;
}

function getFinalGridTransform(
  index: number,
  count: number,
  isMobile: boolean,
): PolaroidTransform {
  if (isMobile) {
    return {
      x: 0,
      y: (index - (count - 1) / 2) * 8.2,
      rotation: ((index % 2 === 0 ? -1 : 1) * 2.2),
      scale: 0.62,
    };
  }

  const columns = Math.min(3, count);
  const rows = Math.ceil(count / columns);
  const column = index % columns;
  const row = Math.floor(index / columns);

  return {
    x: (column - (columns - 1) / 2) * 24,
    y: (row - (rows - 1) / 2) * 18.4,
    rotation: ((index % 2 === 0 ? -1 : 1) * 2.4),
    scale: 0.68,
  };
}

function getActiveStep(progress: number, count: number) {
  const finalGridStart = 0.88;

  if (progress >= finalGridStart) {
    return count;
  }

  return Math.min(count - 1, Math.floor((progress / finalGridStart) * count));
}

function getVisualState(
  index: number,
  step: number,
  isMobile: boolean,
): PolaroidVisualState {
  const count = experiencePolaroids.length;
  const isFinalGrid = step >= count;
  const activeIndex = Math.min(step, count - 1);
  const experience = experiencePolaroids[index];
  const released = isMobile
    ? experience.layout.released.mobile
    : experience.layout.released.desktop;
  const final = getFinalGridTransform(index, count, isMobile);

  let transform: PolaroidTransform;
  let opacity = 1;
  let zIndex = experience.zIndex;

  if (isFinalGrid) {
    transform = final;
    opacity = 1;
    zIndex = 40 + index;
  } else if (index < activeIndex) {
    transform = released;
    opacity = 0.74;
    zIndex = 20 + index;
  } else if (index === activeIndex) {
    transform = {
      x: 0,
      y: 0,
      rotation: experience.layout.stack.rotation * 0.2,
      scale: 1,
    };
    opacity = 1;
    zIndex = 100;
  } else {
    transform = experience.layout.stack;
    opacity = 0.92;
    zIndex = 70 - index;
  }

  return {
    ...transform,
    opacity,
    zIndex,
  };
}

export function ExperiencePolaroidSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useSectionProgress(sectionRef);
  const isMobile = useIsMobile();
  const { locale } = usePreferences();
  const sectionCopy = experiencePolaroidSectionCopy[locale];
  const activeStep = getActiveStep(progress, experiencePolaroids.length);

  const visualStates = useMemo(
    () =>
      experiencePolaroids.map((_, index) =>
        getVisualState(index, activeStep, isMobile),
      ),
    [activeStep, isMobile],
  );
  const sectionStyle = {
    "--experience-scroll-height": `${(experiencePolaroids.length + 1) * 64}svh`,
    "--experience-mobile-scroll-height": `${(experiencePolaroids.length + 1) * 68}svh`,
  } as CSSProperties;

  return (
    <section
      className="experience-polaroid-section"
      aria-labelledby="experience-polaroid-title"
      ref={sectionRef}
      style={sectionStyle}
    >
      <div className="experience-polaroid-sticky">
        <div className="site-container experience-polaroid-inner">
          <div className="experience-polaroid-heading">
            <h2
              className="experience-polaroid-title"
              id="experience-polaroid-title"
            >
              {sectionCopy.title}
            </h2>
          </div>

          <div className="experience-polaroid-stage">
            {experiencePolaroids.map((experience, index) => (
              <ExperiencePolaroidCard
                copy={experience.translations[locale]}
                experience={experience}
                key={experience.id}
                state={visualStates[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
