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
        className="group/link inline-flex max-w-full items-start gap-2 break-words font-serif text-[clamp(1.55rem,3vw,2.25rem)] leading-[1.04] tracking-normal text-[hsl(220_18%_12%/0.9)] transition-colors duration-200 hover:text-[hsl(28_24%_38%)] dark:text-[hsl(42_28%_90%/0.9)] dark:hover:text-[hsl(42_30%_96%)]"
        href={item.href}
      >
        <span className="break-all">{item.value}</span>
        <span
          aria-hidden="true"
          className="mt-1 text-[0.8em] transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        >
          ↗
        </span>
      </Link>
    );
  }

  if (Array.isArray(item.value)) {
    return (
      <div className="grid gap-1 font-serif text-[clamp(1.55rem,3vw,2.25rem)] leading-[1.08] tracking-normal text-[hsl(220_18%_12%/0.88)] dark:text-[hsl(42_28%_90%/0.88)]">
        {item.value.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    );
  }

  return (
    <p className="max-w-xl font-serif text-[clamp(1.55rem,3vw,2.25rem)] leading-[1.08] tracking-normal text-[hsl(220_18%_12%/0.88)] dark:text-[hsl(42_28%_90%/0.88)]">
      {item.value}
    </p>
  );
}

export function ContactPageContent() {
  const { locale } = usePreferences();
  const copy = contactContent[locale];

  return (
    <section className="-mt-[7rem] min-h-screen bg-[hsl(38_30%_94%)] pt-[7rem] text-[hsl(220_18%_12%)] transition-colors duration-200 dark:bg-[hsl(30_14%_11%)] dark:text-[hsl(42_28%_90%)] lg:-mt-[3.25rem] lg:pt-[3.25rem]">
      <div className="site-container grid min-h-[calc(100svh-3.25rem)] content-between gap-16 py-16 md:gap-20 md:py-24">
        <header className="max-w-5xl">
          <p className="text-xs font-semibold uppercase leading-none text-[hsl(220_9%_34%/0.62)] dark:text-[hsl(38_14%_68%/0.62)]">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-[clamp(4.1rem,11vw,9rem)] font-medium leading-[0.9] tracking-normal text-[hsl(220_18%_12%/0.94)] dark:text-[hsl(42_28%_90%/0.94)]">
            {copy.title}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-[hsl(220_9%_34%/0.74)] dark:text-[hsl(38_14%_70%/0.82)] md:text-lg md:leading-8">
            {copy.description}
          </p>
        </header>

        <div className="border-t border-[hsl(34_18%_68%/0.34)] pt-8 dark:border-[hsl(32_12%_30%/0.55)] md:pt-10">
          <div className="grid gap-4 md:grid-cols-2">
            {copy.items.map((item) => (
              <article
                className="min-h-[13rem] border border-[hsl(34_18%_68%/0.28)] bg-[hsl(42_30%_94%/0.46)] p-5 transition-colors duration-200 hover:border-[hsl(28_24%_52%/0.38)] hover:bg-[hsl(42_34%_96%/0.7)] dark:border-[hsl(38_18%_58%/0.16)] dark:bg-[hsl(30_12%_16%/0.42)] dark:hover:border-[hsl(38_22%_68%/0.26)] dark:hover:bg-[hsl(30_13%_19%/0.62)] md:p-6"
                key={item.label}
              >
                <p className="mb-7 text-xs font-semibold uppercase leading-none text-[hsl(220_9%_34%/0.62)] dark:text-[hsl(38_14%_68%/0.62)]">
                  {item.label}
                </p>
                <ContactValue item={item} />
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-2xl font-serif text-[clamp(1.45rem,2.8vw,2.4rem)] leading-[1.12] tracking-normal text-[hsl(220_18%_12%/0.86)] dark:text-[hsl(42_28%_90%/0.86)] md:mt-10">
            {copy.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
