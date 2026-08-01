"use client";

import Link from "next/link";

import { usePreferences } from "@/components/preferences/preferences-provider";
import { contactContent, type ContactItem } from "@/content/contact";

function isLinkItem(
  item: ContactItem,
): item is Extract<ContactItem, { href: string }> {
  return "href" in item;
}

function ContactValue({ item }: { item: ContactItem }) {
  if (isLinkItem(item)) {
    return (
      <Link
        className="inline-flex max-w-full break-words font-serif text-[clamp(1.22rem,1.9vw,1.78rem)] leading-[1.1] tracking-normal text-[hsl(220_18%_12%/0.9)] underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-[hsl(28_24%_38%)] hover:decoration-current dark:text-[hsl(42_28%_90%/0.9)] dark:hover:text-[hsl(42_30%_96%)]"
        href={item.href}
        rel={item.newTab ? "noopener noreferrer" : undefined}
        target={item.newTab ? "_blank" : undefined}
      >
        <span className="break-words">{item.value}</span>
      </Link>
    );
  }

  if (Array.isArray(item.value)) {
    return (
      <div className="grid gap-1 font-serif text-[clamp(1.22rem,1.9vw,1.78rem)] leading-[1.13] tracking-normal text-[hsl(220_18%_12%/0.88)] dark:text-[hsl(42_28%_90%/0.88)]">
        {item.value.map((line) => (
          <p key={line}>{line}</p>
        ))}
        {item.note ? (
          <p className="mt-4 max-w-xl text-[clamp(1.08rem,1.45vw,1.38rem)] leading-[1.18]">
            {item.note}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <p className="max-w-xl font-serif text-[clamp(1.22rem,1.9vw,1.78rem)] leading-[1.13] tracking-normal text-[hsl(220_18%_12%/0.88)] dark:text-[hsl(42_28%_90%/0.88)]">
      {item.value}
    </p>
  );
}

export function ContactPageContent() {
  const { locale } = usePreferences();
  const copy = contactContent[locale];

  return (
    <section className="-mt-[7rem] min-h-screen bg-[hsl(38_30%_94%)] pt-[7rem] text-[hsl(220_18%_12%)] transition-colors duration-200 dark:bg-[hsl(30_14%_11%)] dark:text-[hsl(42_28%_90%)] lg:-mt-[3.25rem] lg:pt-[3.25rem]">
      <div className="site-container py-20 md:py-24 lg:pb-28 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.36fr)_minmax(18rem,1fr)] lg:gap-16 xl:gap-24">
          <header className="max-w-4xl">
            <p className="text-xs font-semibold uppercase leading-none text-[hsl(220_9%_34%/0.62)] dark:text-[hsl(38_14%_68%/0.62)]">
              {copy.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.2rem,5.2vw,5rem)] font-medium leading-[0.98] tracking-normal text-[hsl(220_18%_12%/0.94)] dark:text-[hsl(42_28%_90%/0.94)]">
              {copy.title}
            </h1>
            <p className="mt-7 max-w-[38rem] text-base leading-7 text-[hsl(220_9%_34%/0.74)] dark:text-[hsl(38_14%_70%/0.82)] md:text-lg md:leading-8">
              {copy.description}
            </p>
          </header>

          <div className="grid content-start gap-12">
            {copy.items.map((item) => (
              <section className="grid gap-4" key={item.label}>
                <p className="text-xs font-semibold uppercase leading-none text-[hsl(220_9%_34%/0.62)] dark:text-[hsl(38_14%_68%/0.62)]">
                  {item.label}
                </p>
                <ContactValue item={item} />
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
