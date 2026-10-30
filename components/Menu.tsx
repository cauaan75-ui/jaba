"use client";

import React, { useState } from "react";
import { menuConfig, restaurantConfig } from "@/lib/config";
import { formatCurrency } from "@/lib/format";

function isFilled(value: string) {
  return value.length > 0 && !value.includes("[PREENCHER");
}

function buildWhatsappMessage(itemName: string, price: number | null) {
  const priceText =
    typeof price === "number" ? ` - ${formatCurrency(price)}` : "";
  return encodeURIComponent(
    `Olá! Gostaria de pedir: ${itemName}${priceText}. Poderia confirmar disponibilidade e valor?`,
  );
}

export default function Menu() {
  const categories = menuConfig.categories;
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");

  const activeItems = (
    categories.find((cat) => cat.id === activeCategory)?.items || []
  ).filter((item) => typeof item.image === "string" && item.image.trim() !== "");
  const whatsapp = restaurantConfig.whatsapp;
  const hasWhatsapp = isFilled(whatsapp);

  // Check if menu has items
  const hasMenuItems = categories.some((cat) => cat.items.length > 0);

  if (!hasMenuItems) {
    return (
      <section id="cardapio" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
              Nosso Cardápio
            </h2>
            <div className="w-24 h-1 bg-ember mx-auto mb-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-surface-alt to-surface rounded-3xl p-8 md:p-12 shadow-xl border border-line">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-ember/10 rounded-full mb-6">
                    <svg className="w-10 h-10 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-ink mb-4">Cardápio em Preparação</h3>
                  <p className="text-ink/70 mb-6 leading-relaxed">
                    Estamos trabalhando para preparar nosso cardápio completo com todas as delícias do Bar do Jaba. Em breve você poderá conferir todas as opções disponíveis.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-ink/80">Carnes selecionadas na brasa</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-ink/80">Pratos quentes variados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-ink/80">Acompanhamentos tradicionais</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-ink/80">Saladas frescas</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const section = document.querySelector("#contato");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-ember text-on-accent px-8 py-4 rounded-full font-semibold hover:bg-wood-hover transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Fazer pedido pelo WhatsApp</span>
                  </button>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80"
                      alt="Churrasco no Bar do Jaba"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-ink-inverse font-semibold text-lg">Churrasco na brasa</p>
                    <p className="text-ink-inverse/80 text-sm">Nossa especialidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cardapio" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Nosso Cardápio
          </h2>
          <div className="w-24 h-1 bg-ember mx-auto mb-6" />
          <p className="text-ink/70 max-w-2xl mx-auto">
            Explore nossa variedade de pratos preparados com carinho e tradição brasileira
          </p>
          <div className="mt-4 bg-surface-alt/70 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-ink/80 text-sm">
              <strong>Importante:</strong> Todas as refeições acompanham 1 salada. Saladas adicionais serão cobradas conforme o valor estabelecido.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-3 mb-12 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap snap-start ${
                activeCategory === category.id
                  ? "bg-ember text-on-accent shadow-lg"
                  : "bg-surface-alt text-ink hover:bg-wood-hover hover:text-ink-inverse"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeItems.map((item) => (
              <div
                key={item.id}
                className="bg-surface-alt rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
              >
                {item.image && (
                  <div className="aspect-video overflow-hidden bg-surface-alt">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-ink">{item.name}</h3>
                    {item.featured && (
                      <span className="bg-ember text-on-accent text-xs px-2 py-1 rounded-full">
                        Destaque
                      </span>
                    )}
                  </div>
                  <p className="text-ink/70 mb-4 flex-1">{item.description}</p>
                  <div className="flex items-center justify-between gap-4">
                    {typeof item.price === "number" ? (
                      <div className="text-ember font-bold text-lg">
                        {formatCurrency(item.price)}
                      </div>
                    ) : (
                      <div className="text-ink/60 text-sm">Consulte</div>
                    )}
                    {hasWhatsapp && (
                      <a
                        href={`https://wa.me/${whatsapp}?text=${buildWhatsappMessage(item.name, item.price)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-green px-4 py-2 text-sm font-semibold text-on-accent transition-colors hover:bg-green/90"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Pedir
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-ink/70">Nenhum item disponível nesta categoria.</p>
            </div>
          )}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const section = document.querySelector("#contato");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-green text-on-accent px-8 py-3 rounded-full font-semibold hover:bg-green/90 transition-colors inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Fazer pedido pelo WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
