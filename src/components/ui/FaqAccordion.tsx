"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons";

// ===== Types =====

interface FaqItem {
  question: string;
  answer: string;
  /** Optional lighter clarification text shown below the answer. */
  clarification?: string;
}

interface FaqAccordionProps {
  /** Array of FAQ question/answer pairs to render. */
  items: FaqItem[];
}

// ===== Component =====

/**
 * Expandable FAQ accordion.
 *
 * Usage:
 *   <FaqAccordion items={[{ question: "...", answer: "...", clarification: "..." }]} />
 *
 * Only one item is open at a time. Clicking the open item closes it.
 * The chevron rotates to indicate open/closed state.
 */
export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="divide-y divide-border rounded-xl border border-border shadow-sm">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div key={idx}>
            {/* Question row — always visible */}
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-all duration-200 hover:bg-background-alt/60"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-foreground">
                {item.question}
              </span>
              <ChevronRightIcon
                className={`w-4 h-4 text-foreground-subtle flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* Answer panel — shown when open */}
            {isOpen && (
              <div className="px-5 pb-5">
                <p className="text-foreground-muted leading-relaxed">
                  {item.answer}
                </p>
                {item.clarification && (
                  <p className="mt-2 text-sm text-foreground-subtle leading-relaxed">
                    {item.clarification}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
