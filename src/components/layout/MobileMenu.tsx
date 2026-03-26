"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  navItems: NavItem[];
  ctaHref: string;
  ctaLabel: string;
}

/**
 * Mobile hamburger menu with slide-out drawer.
 * Client component — only mounts on mobile viewports via `md:hidden`.
 */
export function MobileMenu({ navItems, ctaHref, ctaLabel }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change and manage body scroll
  // eslint-disable-next-line
  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] max-w-[80vw] border-l border-border shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: 'var(--background)' }}
      >
        {/* Close button */}
        <div className="flex items-center justify-end p-4">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center h-11 w-11 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-hover transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="px-4 pb-6" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors min-h-[44px] ${
                    pathname === item.href
                      ? "text-primary bg-primary-light"
                      : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="mt-6 px-4">
            <Link
              href={ctaHref}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-hover shadow-sm transition-all duration-200 min-h-[44px]"
            >
              {ctaLabel}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
