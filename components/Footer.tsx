"use client";

import React from "react";
import Logo from "./Logo";
import { restaurantConfig } from "@/lib/config";

export default function Footer() {
  const {
    name,
    tagline,
    whatsapp,
    phone,
    instagram,
    email,
    address,
    paymentMethods,
  } = restaurantConfig;
  const currentYear = 2026;

  const hasWhatsapp = !whatsapp.includes("[PREENCHER");
  const hasPhone = !phone.includes("[PREENCHER");
  const hasInstagram = !instagram.includes("[PREENCHER");
  const hasEmail = !email.includes("[PREENCHER");
  const hasAddress = !address.fullAddress.includes("[PREENCHER");

  const scrollToSection = (href: string) => {
    if (typeof document === "undefined") return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-inverse py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Logo size="md" showTagline={true} variant="inverse" />
            <p className="text-ink-inverse/70 leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-ink-inverse font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("#inicio")} className="text-ink-inverse/70 hover:text-ember transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#cardapio")} className="text-ink-inverse/70 hover:text-ember transition-colors">
                  Cardápio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#sobre")} className="text-ink-inverse/70 hover:text-ember transition-colors">
                  Sobre nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#galeria")} className="text-ink-inverse/70 hover:text-ember transition-colors">
                  Galeria
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#localizacao")} className="text-ink-inverse/70 hover:text-ember transition-colors">
                  Localização
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-ink-inverse font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              {hasWhatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-inverse/70 hover:text-ember transition-colors"
                  >
                    WhatsApp: {whatsapp}
                  </a>
                </li>
              )}
              {hasPhone && (
                <li>
                  <a href={`tel:${phone}`} className="text-ink-inverse/70 hover:text-ember transition-colors">
                    Tel: {phone}
                  </a>
                </li>
              )}
              {hasEmail && (
                <li>
                  <a href={`mailto:${email}`} className="text-ink-inverse/70 hover:text-ember transition-colors">
                    {email}
                  </a>
                </li>
              )}
              {hasAddress && (
                <li>
                  <span className="text-ink-inverse/70">{address.fullAddress}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-ink-inverse font-bold text-lg mb-4">Formas de Pagamento</h3>
            <ul className="space-y-2">
              {paymentMethods.cash && (
                <li className="text-ink-inverse/70 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dinheiro</span>
                </li>
              )}
              {paymentMethods.credit && (
                <li className="text-ink-inverse/70 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Crédito</span>
                </li>
              )}
              {paymentMethods.debit && (
                <li className="text-ink-inverse/70 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Débito</span>
                </li>
              )}
              {paymentMethods.pix && (
                <li className="text-ink-inverse/70 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>PIX</span>
                </li>
              )}
              {paymentMethods.vr && (
                <li className="text-ink-inverse/70 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vale Refeição</span>
                </li>
              )}
              {paymentMethods.va && (
                <li className="text-ink-inverse/70 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vale Alimentação</span>
                </li>
              )}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-ink-inverse font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {hasInstagram && (
                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-ink-inverse/5 rounded-full hover:bg-ember transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-ink-inverse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-line pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-ink-inverse/50 text-sm">
              © {currentYear} {name}. Todos os direitos reservados.
            </p>
            <p className="text-ink-inverse/50 text-sm">
              Feito com carinho para você.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
