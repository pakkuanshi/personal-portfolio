import Image from "next/image";

export function HeroSection() {
  return (
    <section className="poster-hero">
      <div className="poster-stage" aria-label="Kristy Shi portfolio cover">
        <div className="poster-photo" aria-hidden="true">
          <Image
            alt=""
            className="poster-photo-image"
            fill
            priority
            sizes="100vw"
            src="/images/kristy-hero.jpg"
          />
        </div>

        <h1 className="poster-type" aria-label="Kristy Shi">
          <span
            className="poster-word poster-word-left"
            data-text="Kristy"
            aria-hidden="true"
          >
            Kristy
          </span>
          <span
            className="poster-word poster-word-right"
            data-text="Shi"
            aria-hidden="true"
          >
            Shi
          </span>
        </h1>
      </div>
    </section>
  );
}
