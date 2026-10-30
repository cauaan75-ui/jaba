"use client";

import React, { useState } from "react";
import { galleryConfig } from "@/lib/config";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("todos");

  const { images } = galleryConfig;

  // Use placeholder images if no real images are configured
  const displayImages = images.length > 0 ? images : [
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
      alt: "Churrasco na brasa",
      category: "churrasco",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
      alt: "Buffet de self-service",
      category: "buffet",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      alt: "Prato servido",
      category: "pratos",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      alt: "Ambiente do restaurante",
      category: "ambiente",
    },
    {
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
      alt: "Variedade de pratos",
      category: "pratos",
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
      alt: "Churrasqueira",
      category: "churrasco",
    },
  ];

  // Get unique categories
  const categories = ["todos", ...Array.from(new Set(displayImages.map(img => img.category)))];

  // Filter images based on active filter
  const filteredImages = activeFilter === "todos"
    ? displayImages
    : displayImages.filter(img => img.category === activeFilter);

  // Category labels
  const categoryLabels: Record<string, string> = {
    todos: "Todos",
    churrasco: "Churrasco",
    buffet: "Buffet",
    pratos: "Pratos",
    ambiente: "Ambiente",
  };

  return (
    <section id="galeria" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Galeria
          </h2>
          <div className="w-24 h-1 bg-ember mx-auto mb-6" />
          <p className="text-ink/70 max-w-2xl mx-auto">
            Conheça nosso espaço e nossas delícias
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? "bg-ember text-on-accent shadow-lg"
                  : "bg-surface-alt text-ink hover:bg-wood-hover hover:text-ink-inverse"
              }`}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-115 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-ink-inverse opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-ink-inverse hover:text-ember transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
