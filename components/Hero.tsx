"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-inverse via-wood-hover to-inverse">
        <div className="absolute inset-0 bg-black/50" />
        {/* Placeholder for BBQ background image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ink-inverse mb-6 leading-tight">
              Comida de verdade.
              <br />
              <span className="text-ember">Churrasco de respeito.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-lg md:text-xl lg:text-2xl text-ink-inverse/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              No Bar do Jaba, você encontra self-service com churrasco e aquele sabor que transforma o almoço em um bom momento.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("#cardapio")}
                className="w-full sm:w-auto bg-ember text-on-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-wood-hover transition-all transform hover:scale-105 shadow-lg"
              >
                Conheça nosso cardápio
              </button>
              <button
                onClick={() => scrollToSection("#localizacao")}
                className="w-full sm:w-auto bg-transparent border-2 border-ink-inverse text-ink-inverse px-8 py-4 rounded-full font-semibold text-lg hover:bg-ink-inverse hover:text-inverse transition-all"
              >
                Como chegar
              </button>
              <button
                onClick={() => scrollToSection("#contato")}
                className="w-full sm:w-auto bg-green text-on-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-green/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Fale pelo WhatsApp
              </button>
            </div>
          </ScrollReveal>

          {/* Visual Highlights */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ember/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-ink-inverse font-semibold mb-2">Self-Service</h3>
                <p className="text-ink-inverse/70 text-sm">Variedade de opções</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ember/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-ink-inverse font-semibold mb-2">Churrasco</h3>
                <p className="text-ink-inverse/70 text-sm">Carnes na brasa</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ember/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-ink-inverse font-semibold mb-2">Ambiente Acolhedor</h3>
                <p className="text-ink-inverse/70 text-sm">Comida brasileira</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-ink-inverse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
