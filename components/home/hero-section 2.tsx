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
          <span className="poster-word poster-word-fill-main" aria-hidden="true">
            Kristy Shi
          </span>
          <span className="poster-word poster-word-fill-accent" aria-hidden="true">
            Shi
          </span>
          <span className="poster-word poster-word-outline-main" aria-hidden="true">
            Kristy Shi
          </span>
        </h1>
      </div>
    </section>
  );
}
