"use client";

import React from "react";
import { restaurantConfig } from "@/lib/config";

export default function Delivery() {
  const { services } = restaurantConfig;

  return (
    <section id="delivery" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Delivery e Marmitex
          </h2>
          <div className="w-24 h-1 bg-ember mx-auto mb-6" />
          <p className="text-ink/70 max-w-2xl mx-auto">
            Peça suas delícias no conforto de casa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-surface rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-ink mb-4">Informações de Entrega</h3>
            <p className="text-ink/70 mb-6">{services.delivery.deliveryArea}</p>

            {services.delivery.platforms.length > 0 && (
              <div>
                <h4 className="font-semibold text-ink mb-4">Peça pelas plataformas:</h4>
                <div className="flex flex-wrap gap-4">
                  {services.delivery.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="bg-surface-alt text-ink px-6 py-3 rounded-full font-semibold border border-line"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {services.marmitex.available && (
            <div className="bg-ink/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ink mb-4">Marmitex</h3>
              <p className="text-ink/70 mb-6">
                Oferecemos marmitex média que serve 1 pessoa, com diversas opções de carnes e acompanhamentos. Consulte nosso cardápio completo na seção de marmitex.
              </p>
              <button
                onClick={() => {
                  const section = document.querySelector("#cardapio");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-ember text-on-accent px-8 py-3 rounded-full font-semibold hover:bg-wood-hover transition-colors"
              >
                Ver opções de marmitex
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
