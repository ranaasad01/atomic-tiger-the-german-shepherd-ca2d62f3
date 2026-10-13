"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from 'lucide-react';
import { navLinks, BRAND_FULL } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations();
  const navT = t.raw("nav") as Record<string, string>;

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  return (
    <footer
      className="w-full mt-0"
      style={{
        background: "var(--foreground)",
        borderTop: "3px solid var(--primary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, -8, 8, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-3xl"
                aria-hidden="true"
              >
                🐾
              </motion.span>
              <span
                className="text-2xl font-extrabold"
                style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  color: "var(--primary)",
                }}
              >
                {BRAND_FULL}
              </span>
            </div>
            <p
              className="text-sm text-center md:text-left"
              style={{ color: "rgba(255,248,236,0.65)" }}
            >
              {t("footer.tagline")}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={getLinkHref(link.href)}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm font-semibold transition-colors duration-200 hover:opacity-80"
                style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  color: "rgba(255,248,236,0.80)",
                }}
              >
                {navT[link.key] ?? link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,248,236,0.12)" }}
        >
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "rgba(255,248,236,0.50)" }}
          >
            {t("footer.madeWith")}
            <Heart
              size={12}
              className="inline"
              style={{ color: "var(--primary)" }}
              aria-hidden="true"
            />
            {t("footer.forTiger")}
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,248,236,0.40)" }}
          >
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}