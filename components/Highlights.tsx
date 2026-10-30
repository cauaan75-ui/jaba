import React from "react";

export default function Highlights() {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Self-Service",
      description: "Variedade de opções para montar seu prato do jeito que preferir",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      title: "Churrasco",
      description: "Carnes selecionadas preparadas na brasa com maestria",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Comida Brasileira",
      description: "Pratos tradicionais e acompanhamentos que fazem parte da nossa cultura",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Atendimento Especial",
      description: "Ambiente acolhedor e equipe dedicada a fazer você se sentir em casa",
    },
  ];

  return (
    <section className="py-20 bg-inverse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-inverse mb-4">
            Nossos Diferenciais
          </h2>
          <div className="w-24 h-1 bg-ember mx-auto mb-6" />
          <p className="text-ink-inverse/80 max-w-2xl mx-auto">
            O que torna o Bar do Jaba especial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-ink-inverse/5 rounded-2xl p-8 text-center hover:bg-ink-inverse/10 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ember/20 rounded-full mb-6 group-hover:bg-ember/30 transition-colors">
                <div className="text-ember">{highlight.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-ink-inverse mb-3">
                {highlight.title}
              </h3>
              <p className="text-ink-inverse/70 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
