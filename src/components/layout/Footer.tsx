import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  footerPlatformItems,
  footerTutorItems,
  footerTrustItems,
  footerLegalItems,
} from "@/config/navigation";
import type { NavItem } from "@/types";

function FooterColumn({
  heading,
  items,
}: {
  heading: string;
  items: NavItem[];
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold text-foreground mb-4">
        {heading}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[13px] text-foreground-muted hover:text-foreground transition-colors leading-relaxed py-1"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-alt">
      {/* Main footer — 4 columns */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Brand & positioning */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/fawrii-logo.png"
                alt={siteConfig.name}
                width={120}
                height={40}
                className="h-[32px] w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-[13px] text-foreground-subtle leading-relaxed">
              {siteConfig.footerStatement}
            </p>
          </div>

          {/* Column 2 — Platform */}
          <FooterColumn heading="Platform" items={footerPlatformItems} />

          {/* Column 3 — For Tutors */}
          <FooterColumn heading="For Tutors" items={footerTutorItems} />

          {/* Column 4 — Trust & Standards */}
          <FooterColumn heading="Trust & Standards" items={footerTrustItems} />
        </div>
      </div>

      {/* Bottom utility bar — legal + company + social */}
      <div className="border-t border-border">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Legal links + copyright */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {footerLegalItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-foreground-subtle hover:text-foreground-muted transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
              <span className="text-xs text-foreground-subtle">
                &copy; {currentYear} {siteConfig.companyLine}
              </span>
            </div>

            {/* Social icons — small, monochrome, low-contrast */}
            <div className="flex items-center gap-4">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="text-xs text-foreground-subtle hover:text-foreground-muted transition-colors"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
