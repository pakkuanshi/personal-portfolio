import { LocalizedPageIntro } from "@/components/layout/localized-page-intro";

export default function ContactPage() {
  return (
    <section className="-mt-[7rem] min-h-screen bg-background pt-[7rem] text-foreground transition-colors duration-200 dark:bg-[hsl(30_14%_11%)] dark:text-[hsl(42_28%_90%)] lg:-mt-[3.25rem] lg:pt-[3.25rem]">
      <LocalizedPageIntro
        className="min-h-[calc(100svh-15rem)] dark:[&_.body-large]:text-[hsl(38_14%_70%/0.82)] dark:[&_.eyebrow]:text-[hsl(38_14%_68%/0.62)]"
        page="contact"
      />
    </section>
  );
}
