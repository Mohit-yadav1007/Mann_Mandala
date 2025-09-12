"use client"

// InfiniteScrollGrid
// Reusable subcategory section with:
// - Title
// - Seamless horizontal marquee-cloned product cards (pause on hover)
// - CTA button + duration note
// Props:
//   title, images, names?, duration, buttonText, buttonLink, onImageClick

import ProductCard from "./product-card"

interface InfiniteScrollGridProps {
  title: string
  images: string[]
  names?: string[]
  duration: string
  buttonText: string
  buttonLink: string
  onImageClick: (index: number) => void
}

export default function InfiniteScrollGrid({ title, images, names = [], duration, buttonText, buttonLink, onImageClick }: InfiniteScrollGridProps) {
  const items = images.map((src, i) => ({ src, name: names[i] || `${title} ${i + 1}` }))
  const duplicated = [...items, ...items]

  return (
    <div className="mb-12">
      <h3 className="text-xl md:text-2xl font-semibold text-amber-700 mb-6 text-center">
        {title}
      </h3>

      <div className="scroller">
        <div className="scroller__inner gap-6 pr-6">
          {duplicated.map((item, idx) => (
            <div key={idx} className="px-3 first:pl-0 last:pr-0" aria-hidden={idx >= items.length ? true : undefined}>
              <ProductCard
                name={item.name}
                duration={duration}
                image={item.src}
                onImageClick={() => onImageClick(idx % items.length)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 gap-2">
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 hover-raise shadow-lg">
          {buttonText}
        </a>
        <p className="text-xs text-amber-600">{duration}</p>
      </div>
    </div>
  )
}
