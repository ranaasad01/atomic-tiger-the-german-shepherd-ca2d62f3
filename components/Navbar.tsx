"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import { navLinks } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations();
  const navT = t.raw("nav") as Record<string, string>;

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(255, 248, 236, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "2px solid var(--border)",
        boxShadow: "0 2px 16px 0 rgba(245, 166, 35, 0.10)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span
            whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl select-none"
            aria-hidden="true"
          >
            🐾
          </motion.span>
          <span
            className="text-xl font-extrabold tracking-tight"
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              color: "var(--primary)",
            }}
          >
            Tiger
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={getLinkHref(link.href)}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="relative px-4 py-2 rounded-full text-sm font-700 transition-all duration-200 group"
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative z-10 block"
              >
                {navT[link.key] ?? link.label}
              </motion.span>
              <motion.span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(245, 166, 35, 0.12)" }}
              />
            </Link>
          ))}
          <motion.a
            href={pathname === "/" ? "#joke-button" : "/#joke-button"}
            onClick={(e) => handleAnchorClick(e, "#joke-button")}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="ml-3 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer"
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              background: "var(--primary)",
              color: "#fff",
              boxShadow: "0 4px 14px 0 rgba(245, 166, 35, 0.35)",
            }}
          >
            {t("nav.cta")}
          </motion.a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl transition-colors"
          style={{ color: "var(--foreground)" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "var(--background)",
              borderTop: "1px solid var(--border)",
            }}
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    href={getLinkHref(link.href)}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="block px-4 py-3 rounded-2xl font-semibold text-base transition-colors"
                    style={{
                      fontFamily: "'Baloo 2', sans-serif",
                      color: "var(--foreground)",
                    }}
                  >
                    {navT[link.key] ?? link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={pathname === "/" ? "#joke-button" : "/#joke-button"}
                onClick={(e) => handleAnchorClick(e as React.MouseEvent<HTMLAnchorElement>, "#joke-button")}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.25 }}
                className="mt-2 block text-center px-4 py-3 rounded-2xl font-bold text-base cursor-pointer"
                style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  background: "var(--primary)",
                  color: "#fff",
                }}
              >
                {t("nav.cta")}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}