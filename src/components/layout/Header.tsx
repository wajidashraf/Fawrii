import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { siteConfig } from "@/config/site";
import { mainNavItems } from "@/config/navigation";
import { links } from "@/content/links";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 [-webkit-backdrop-filter:blur(8px)] backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl font-bold text-foreground"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-2">
            <Button href={links.becomeTutor} className="hidden md:inline-flex">
              Become a Tutor
            </Button>
            <MobileMenu
              navItems={mainNavItems}
              ctaHref={links.becomeTutor}
              ctaLabel="Become a Tutor"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
