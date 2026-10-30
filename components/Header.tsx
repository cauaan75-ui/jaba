"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useTheme } from "@/contexts/ThemeContext";
import { promotionsConfig, restaurantConfig } from "@/lib/config";

function isFilled(value: string) {
  return value.length > 0 && !value.includes("[PREENCHER");
}

const dayKeys = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

function getOpenStatus(now: Date) {
  const dayKey = dayKeys[now.getDay()];
  const hours = restaurantConfig.hours[dayKey];

  if (hours.closed || !isFilled(hours.open) || !isFilled(hours.close)) {
    return { open: false, label: "Fechado agora" };
  }

  const [openH, openM] = hours.open.split(":").map(Number);
  const [closeH, closeM] = hours.close.split(":").map(Number);

  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  if (nowMinutes >= openMinutes && nowMinutes < closeMinutes) {
    return { open: true, label: `Aberto • fecha às ${hours.close}` };
  }

  if (nowMinutes < openMinutes) {
    return { open: false, label: `Fechado agora • abre às ${hours.open}` };
  }

  return { open: false, label: "Fechado agora" };
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [status, setStatus] = useState<{ open: boolean; label: string }>({
    open: false,
    label: "Horários",
  });

  useEffect(() => {
    const updateStatus = () => setStatus(getOpenStatus(new Date()));
    updateStatus();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    const interval = setInterval(updateStatus, 60000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { name: "Início", href: "#inicio" },
    { name: "Cardápio", href: "#cardapio" },
    { name: "Sobre nós", href: "#sobre" },
    { name: "Galeria", href: "#galeria" },
    ...(promotionsConfig.active
      ? [{ name: "Promoções", href: "#promocoes" }]
      : []),
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Localização", href: "#localizacao" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navColor = isScrolled ? "text-ink" : "text-ink-inverse";
  const logoVariant = isScrolled || isMobileMenuOpen ? "default" : "inverse";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-surface/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo size="md" variant={logoVariant} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`${navColor} hover:text-ember transition-colors font-medium`}
              >
                {item.name}
              </button>
            ))}
            <span
              className={`hidden xl:inline-flex items-center rounded-full px-3 py-1 text-sm ${
                status.open
                  ? "bg-green/15 text-green"
                  : "bg-ink/10 text-ink"
              }`}
            >
              {status.label}
            </span>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? "hover:bg-ink/10" : "hover:bg-ink-inverse/10"
              }`}
              aria-label={
                theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"
              }
            >
              {theme === "light" ? (
                <svg className={`w-6 h-6 ${navColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className={`w-6 h-6 ${navColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => scrollToSection("#contato")}
              className="bg-ember text-on-accent px-6 py-2 rounded-full font-semibold hover:bg-wood-hover hover:text-ink-inverse transition-colors"
            >
              Fale conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isMobileMenuOpen ? "text-ink" : navColor}`}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden mt-4 pb-4 space-y-1 border-t border-line pt-4"
          >
            <div className="pb-2">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${
                  status.open
                    ? "bg-green/15 text-green"
                    : "bg-ink/10 text-ink"
                }`}
              >
                {status.label}
              </span>
            </div>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-ink hover:text-ember transition-colors font-medium py-2"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="flex w-full items-center gap-2 text-left text-ink hover:text-ember transition-colors font-medium py-2"
            >
              {theme === "light" ? "Tema escuro" : "Tema claro"}
            </button>
            <button
              onClick={() => scrollToSection("#contato")}
              className="w-full bg-ember text-on-accent px-6 py-3 rounded-full font-semibold hover:bg-wood-hover hover:text-ink-inverse transition-colors"
            >
              Fale conosco
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
