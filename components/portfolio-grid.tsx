"use client"
import React from "react"
import Lightbox from "./lightbox"

type Item = { src: string; alt: string; title: string; caption: string }

const items: Item[] = [
  {
    src: "/images/p3.jpg",
    alt: "Pastel green mandala artwork",
    title: "Pastel Green Mandala Magic",
    caption: "Serene and calming design perfect for meditation spaces",
  },
  {
    src: "/images/p1.png",
    alt: "Collage of vibrant mandala artworks",
    title: "Vibrant Dot Art Creation",
    caption: "Colorful and energetic pieces for modern interiors",
  },
  {
    src: "/images/p2.jpg",
    alt: "Workshop group showcasing mandalas",
    title: "Workshop Group Photo",
    caption: "Creating memories and art together",
  },
]

export default function PortfolioGrid() {
  const [openSrc, setOpenSrc] = React.useState<string | null>(null)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <button
            key={it.title}
            className="group text-left rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg animate-in-up"
            style={{ animationDelay: `${idx * 70}ms` }}
            onClick={() => setOpenSrc(it.src)}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
              <img
                src={it.src || "/placeholder.svg"}
                alt={it.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="m-2 rounded-md bg-white/90 p-2">
                  <p className="text-xs font-medium text-slate-800">{it.title}</p>
                  <p className="text-[11px] text-slate-600">{it.caption}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-slate-900">{it.title}</h3>
              <p className="text-sm text-slate-600">{it.caption}</p>
            </div>
          </button>
        ))}
      </div>
      <Lightbox src={openSrc} onClose={() => setOpenSrc(null)} />
    </>
  )
}
