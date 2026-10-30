"use client";

import React from "react";
import { promotionsConfig } from "@/lib/config";
import { formatCurrency } from "@/lib/format";

export default function Promotions() {
  const { active, items } = promotionsConfig;

  if (!active || items.length === 0) {
    return null;
  }

  return (
    <section id="promocoes" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Promoções
          </h2>
          <div className="w-24 h-1 bg-ember mx-auto mb-6" />
          <p className="text-ink/70 max-w-2xl mx-auto">
            Confira nossas ofertas especiais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((promotion) => (
            <div
              key={promotion.id}
              className="bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {promotion.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={promotion.image}
                    alt={promotion.title}
                    className="w-full h-full object-cover object-center scale-110 hover:scale-115 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-ink">{promotion.title}</h3>
                  {promotion.discount && (
                    <span className="bg-green text-on-accent text-sm px-3 py-1 rounded-full font-semibold">
                      -{promotion.discount}%
                    </span>
                  )}
                </div>
                <p className="text-ink/70 mb-4">{promotion.description}</p>

                {promotion.originalPrice && promotion.promotionalPrice && (
                  <div className="mb-4">
                    <span className="text-ink/50 line-through text-sm">
                      {formatCurrency(promotion.originalPrice)}
                    </span>
                    <div className="text-ember font-bold text-2xl">
                      {formatCurrency(promotion.promotionalPrice)}
                    </div>
                  </div>
                )}

                <div className="text-sm text-ink/60 mb-4">
                  <p>Válido de {new Date(promotion.startDate).toLocaleDateString("pt-BR")} até {new Date(promotion.endDate).toLocaleDateString("pt-BR")}</p>
                  {promotion.conditions && (
                    <p className="mt-1">{promotion.conditions}</p>
                  )}
                </div>

                <button
                  onClick={() => {
                    const section = document.querySelector("#contato");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full bg-ember text-on-accent py-3 rounded-full font-semibold hover:bg-wood-hover transition-colors"
                >
                  Pedir pelo WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
