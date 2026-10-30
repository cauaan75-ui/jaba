"use client";

import React from "react";
import { restaurantConfig } from "@/lib/config";

export default function Location() {
  const { address } = restaurantConfig;

  const hasAddress = !address.fullAddress.includes("[PREENCHER");

  return (
    <section id="localizacao" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Localização
          </h2>
          <div className="w-24 h-1 bg-ember mx-auto mb-6" />
          <p className="text-ink/70 max-w-2xl mx-auto">
            Encontre-nos facilmente
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Address Information */}
            <div className="bg-surface-alt rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ink mb-6">Endereço</h3>

              {hasAddress ? (
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-ember flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-ink font-medium">{address.fullAddress}</p>
                      <p className="text-ink/70">{address.neighborhood}</p>
                      <p className="text-ink/70">{address.city} - {address.state}</p>
                    </div>
                  </div>

                  {address.reference && !address.reference.includes("[PREENCHER") && (
                    <div className="flex items-start space-x-4">
                      <svg className="w-6 h-6 text-ember flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-ink/70">Referência: {address.reference}</p>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      if (hasAddress) {
                        const query = encodeURIComponent(address.fullAddress);
                        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank", "noopener,noreferrer");
                      }
                    }}
                    className="w-full bg-ember text-on-accent py-3 rounded-full font-semibold hover:bg-wood-hover transition-colors mt-6"
                  >
                    Abrir rota no Google Maps
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-wood mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <p className="text-ink/70 mb-4">Endereço em atualização</p>
                  <button
                    onClick={() => {
                      const section = document.querySelector("#contato");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-ember text-on-accent px-6 py-3 rounded-full font-semibold hover:bg-wood-hover transition-colors"
                  >
                    Entre em contato
                  </button>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="bg-surface-alt rounded-2xl overflow-hidden min-h-[400px]">
              {hasAddress && address.coordinates.lat && address.coordinates.lng ? (
                <iframe
                  src={`https://www.google.com/maps/embed?pb=${encodeURIComponent(
                    `!1m18!1m12!1m3!1d3657.197587026632!2d${address.coordinates.lng}!3d${address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${address.coordinates.lat}!2s${address.coordinates.lng}!5e0!3m2!1spt-BR!2sbr!4v1`
                  )}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-ink/10">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-wood mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-ink/70">Mapa em atualização</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
