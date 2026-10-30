"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function ChefTips() {
  const tips = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      title: "O Segredo da Picanha",
      description: "A picanha deve ser grelhada com a gordura voltada para baixo primeiro, para derreter e realçar o sabor. Vire apenas no momento certo para não ressecar.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Tempo de Descanso",
      description: "Após grelhar, deixe a carne descansar por 5-10 minutos antes de servir. Isso redistribui os sucos e garante uma carne mais suculenta.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Tempero com Tradição",
      description: "O segredo está no tempero simples: sal grosso na medida certa, pimenta-do-reino moída na hora e um toque de alho. Menos é mais!",
    },
  ];

  return (
    <section className="py-20 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
              Dicas do Chef
            </h2>
            <div className="w-24 h-1 bg-ember mx-auto mb-6" />
            <p className="text-ink/70 max-w-2xl mx-auto">
              Segredos da culinária para você apreciar ainda mais nosso churrasco
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="bg-surface rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ember/10 rounded-full mb-6 group-hover:bg-ember/20 transition-colors">
                    <div className="text-ember">{tip.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
