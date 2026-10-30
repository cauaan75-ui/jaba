"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
                Muito sabor à mesa
              </h2>
              <div className="w-24 h-1 bg-ember mx-auto mb-6" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
                    alt="Ambiente do Bar do Jaba"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ember/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>

            {/* Text Side */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="space-y-6">
                <p className="text-lg text-ink/80 leading-relaxed">
                  O Bar do Jaba é o lugar para quem aprecia uma boa refeição, variedade no prato e o sabor especial do churrasco. Conheça nossa proposta e venha aproveitar uma experiência de comida brasileira em um ambiente acolhedor.
                </p>

                <p className="text-lg text-ink/80 leading-relaxed">
                  Nosso compromisso é oferecer qualidade, sabor e aquele atendimento que faz você se sentir em casa. Cada prato é preparado com cuidado e tradição, respeitando os sabores que fazem parte da cultura brasileira.
                </p>

                <div className="pt-6 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-ember/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">Qualidade Primeira</h4>
                      <p className="text-ink/70 text-sm">Ingredientes selecionados e preparo artesanal</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-ember/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">Tradição Brasileira</h4>
                      <p className="text-ink/70 text-sm">Sabores autênticos e receitas especiais</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-ember/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">Atendimento Especial</h4>
                      <p className="text-ink/70 text-sm">Ambiente acolhedor e equipe dedicada</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
