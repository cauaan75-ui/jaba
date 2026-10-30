"use client";

import React from "react";
import { restaurantConfig } from "@/lib/config";

export default function Hours() {
  const { hours } = restaurantConfig;

  const dayNames = {
    monday: "Segunda-feira",
    tuesday: "Terça-feira",
    wednesday: "Quarta-feira",
    thursday: "Quinta-feira",
    friday: "Sexta-feira",
    saturday: "Sábado",
    sunday: "Domingo",
  };

  const formatTime = (time: string) => {
    if (time.includes("[PREENCHER")) return "---";
    return time;
  };

  const hasHours = Object.values(hours).some(
    (day) => !day.open.includes("[PREENCHER") || day.closed
  );

  return (
    <section className="py-20 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Horários de Funcionamento
          </h2>
          <div className="w-24 h-1 bg-ember mx-auto mb-6" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-surface rounded-2xl p-8 shadow-lg">
            {hasHours ? (
              <div className="space-y-4">
                {Object.entries(hours).map(([day, dayHours]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between py-3 border-b border-line last:border-0"
                  >
                    <span className="font-medium text-ink">{dayNames[day as keyof typeof dayNames]}</span>
                    {dayHours.closed ? (
                      <span className="text-ink/50">Fechado</span>
                    ) : (
                      <span className="text-ink/70">
                        {formatTime(dayHours.open)} - {formatTime(dayHours.close)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-wood mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-ink/70 mb-4">Horários em atualização</p>
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
        </div>
      </div>
    </section>
  );
}
