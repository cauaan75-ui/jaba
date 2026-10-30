"use client";

import React from "react";

export default function FinalCTA() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-inverse via-wood-hover to-inverse">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-inverse mb-6">
          Seu próximo almoço tem endereço.
        </h2>
        <p className="text-xl md:text-2xl text-ink-inverse/90 mb-10 max-w-2xl mx-auto">
          Conheça o Bar do Jaba, confira nosso cardápio e entre em contato para planejar sua visita.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("#cardapio")}
            className="w-full sm:w-auto bg-ember text-on-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-wood-hover transition-all transform hover:scale-105 shadow-lg"
          >
            Ver cardápio
          </button>
          <button
            onClick={() => scrollToSection("#contato")}
            className="w-full sm:w-auto bg-transparent border-2 border-ink-inverse text-ink-inverse px-8 py-4 rounded-full font-semibold text-lg hover:bg-ink-inverse hover:text-inverse transition-all"
          >
            Fale conosco
          </button>
          <button
            onClick={() => scrollToSection("#localizacao")}
            className="w-full sm:w-auto bg-green text-on-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-green/90 transition-all transform hover:scale-105 shadow-lg"
          >
            Como chegar
          </button>
        </div>
      </div>
    </section>
  );
}
