import React from "react";
import { restaurantConfig } from "@/lib/config";

export default function Reviews() {
  const { reviews } = restaurantConfig;

  return (
    <section id="avaliacoes" className="py-20 bg-surface-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            O que dizem nossos clientes
          </h2>
          <div className="w-24 h-1 bg-ember mx-auto mb-6" />
          <p className="text-ink/70 max-w-2xl mx-auto">
            A opinião de quem já conheceu o Bar do Jaba
          </p>
        </div>

        {reviews.averageRating && reviews.totalReviews ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface rounded-2xl p-8 shadow-lg mb-8 text-center">
              <div className="text-5xl font-bold text-ember mb-2">
                {reviews.averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(reviews.averageRating!)
                        ? "text-ember"
                        : "text-ink/30"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-ink/70">
                Baseado em {reviews.totalReviews} avaliações
              </p>
            </div>

            {reviews.link && (
              <div className="text-center">
                <a
                  href={reviews.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-ember text-on-accent px-8 py-3 rounded-full font-semibold hover:bg-wood-hover transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Ver todas as avaliações no {reviews.platform}</span>
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-surface rounded-2xl p-8">
              <svg className="w-16 h-16 text-wood mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <h3 className="text-2xl font-bold text-ink mb-4">Seja o primeiro a avaliar</h3>
              <p className="text-ink/70 mb-6">
                Ainda não temos avaliações cadastradas. Venha conhecer o Bar do Jaba e compartilhe sua experiência!
              </p>
              {reviews.link && (
                <a
                  href={reviews.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-ember text-on-accent px-8 py-3 rounded-full font-semibold hover:bg-wood-hover transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Avaliar no {reviews.platform}</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
