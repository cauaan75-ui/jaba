"use client";

import React, { useState } from "react";
import { restaurantConfig } from "@/lib/config";
import type { ReservationFormData } from "@/lib/types";

export default function Reservations() {
  const { services } = restaurantConfig;

  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    phone: "",
    date: "",
    time: "",
    people: 1,
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Keep the hooks above the early return so their order never changes.
  if (!services.reservations.available) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const message = `Olá! Gostaria de fazer uma reserva no Bar do Jaba.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nData: ${formData.date}\nHorário: ${formData.time}\nQuantidade de pessoas: ${formData.people}\nObservações: ${formData.notes || "Nenhuma"}`;

      const whatsappNumber = restaurantConfig.whatsapp;
      if (whatsappNumber && !whatsappNumber.includes("[PREENCHER")) {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservas" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Faça sua Reserva
          </h2>
          <div className="w-24 h-1 bg-ember mx-auto mb-6" />
          <p className="text-ink/70 max-w-2xl mx-auto">
            Garanta seu lugar e venha aproveitar uma experiência especial
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-surface-alt rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-line focus:border-ember focus:ring-2 focus:ring-ember/20 outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-line focus:border-ember focus:ring-2 focus:ring-ember/20 outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-ink mb-2">
                    Data desejada *
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-line focus:border-ember focus:ring-2 focus:ring-ember/20 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-ink mb-2">
                    Horário desejado *
                  </label>
                  <input
                    type="time"
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-line focus:border-ember focus:ring-2 focus:ring-ember/20 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="people" className="block text-sm font-medium text-ink mb-2">
                  Quantidade de pessoas *
                </label>
                <input
                  type="number"
                  id="people"
                  required
                  min="1"
                  max="50"
                  value={formData.people}
                  onChange={(e) => setFormData({ ...formData, people: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-lg border border-line focus:border-ember focus:ring-2 focus:ring-ember/20 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-ink mb-2">
                  Observações
                </label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-line focus:border-ember focus:ring-2 focus:ring-ember/20 outline-none transition-colors resize-none"
                  placeholder="Alguma observação especial?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ember text-on-accent py-4 rounded-full font-semibold hover:bg-wood-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Solicitar reserva"}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green/10 border border-green text-green px-4 py-3 rounded-lg">
                  Solicitação enviada! Você será redirecionado para o WhatsApp para confirmar os detalhes.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded-lg">
                  Erro ao enviar solicitação. Por favor, tente novamente ou entre em contato pelo WhatsApp.
                </div>
              )}

              <p className="text-sm text-ink/60 text-center">
                * A reserva depende de confirmação pelo estabelecimento
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
