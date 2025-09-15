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
    <div className="mb-8 sm:mb-10 lg:mb-12">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-700 mb-4 sm:mb-6 text-center leading-tight">
        {title}
      </h3>

      <div className="scroller">
        <div className="scroller__inner gap-4 sm:gap-6 pr-4 sm:pr-6">
          {duplicated.map((item, idx) => (
            <div key={idx} className="px-2 sm:px-3 first:pl-0 last:pr-0" aria-hidden={idx >= items.length ? true : undefined}>
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

      <div className="mt-4 sm:mt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors duration-200 hover-raise shadow text-center text-sm sm:text-base touch-target"
          >
            {buttonText}
          </a>
          <span className="text-xs sm:text-sm text-amber-700 text-center sm:text-right">{duration}</span>
        </div>
      </div>
    </div>
  )
}
