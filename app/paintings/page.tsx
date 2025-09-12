import React from "react"
import { SectionTitle } from "@/components/section-title"
import DecorFrame from "@/components/decor-frame"
import PaintingsGrid from "@/components/paintings-grid"

export default function PaintingsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero section for Paintings */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-amber-50/50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <DecorFrame>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-3 md:mb-4">Mandala Paintings</h1>
              <p className="text-base sm:text-lg text-amber-700">Explore our collection of handcrafted mandala artworks</p>
            </DecorFrame>
          </div>
        </div>
      </section>

      {/* Mandala Art History Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle accentSide="right">History of Mandala Art</SectionTitle>
          <div className="max-w-4xl mx-auto mt-6 md:mt-8">
            <div className="prose prose-sm sm:prose-base prose-amber mx-auto px-0 sm:px-4">
              <p className="text-slate-700 mb-4">
                Mandalas have ancient roots spanning multiple cultures and religions. The word "mandala" comes from Sanskrit, meaning "circle." These intricate, geometric designs have been used for centuries as spiritual symbols and meditation aids.
              </p>
              <p className="text-slate-700 mb-4">
                In Hindu and Buddhist traditions, mandalas represent the universe and are used as sacred spaces for meditation and trance induction. The circular designs symbolize wholeness, unity, and harmony.
              </p>
              <p className="text-slate-700 mb-4">
                Tibetan Buddhists create sand mandalas as a spiritual practice, meticulously placing colored sand in intricate patterns, only to ceremonially destroy them afterward—symbolizing the impermanence of life.
              </p>
              <p className="text-slate-700 mb-4">
                In modern times, mandalas have gained popularity in art therapy and mindfulness practices. Creating and coloring mandalas has been shown to reduce anxiety, increase focus, and promote a sense of well-being.
              </p>
              <p className="text-slate-700">
                Today, mandala art continues to evolve, with artists incorporating contemporary elements while honoring the sacred geometry and spiritual significance of these timeless designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paintings Grid Section */}
      <section className="py-12 md:py-16 bg-amber-50/30">
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <SectionTitle>Our Collection</SectionTitle>
          <div className="mt-6 md:mt-8">
            <PaintingsGrid />
          </div>
        </div>
      </section>
    </main>
  )
}