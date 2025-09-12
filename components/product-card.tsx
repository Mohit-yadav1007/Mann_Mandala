
"use client"

// ProductCard
// Compact card with image, name, duration.
// - Click on image invokes parent handler to open modal
// - Uses Next/Image and fades in on load
// - Falls back to /placeholder.jpg when image is "#"

import { useState } from "react"
import Image from "next/image"

interface ProductCardProps {
  name: string
  duration: string
  image: string
  onImageClick: (image: string, name: string) => void
}

export default function ProductCard({ name, duration, image, onImageClick }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const safeSrc = image === "#" ? "/placeholder.jpg" : image

  return (
    <div className="group flex-shrink-0 w-48 md:w-56">
      <div 
        className="relative aspect-square rounded-xl overflow-hidden cursor-pointer hover-raise bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200"
        onClick={() => onImageClick(safeSrc, name)}
      >
        <Image
          src={safeSrc}
          alt={name}
          fill
          className={`object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-amber-300 border-t-amber-600 rounded-full animate-spin"></div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view
        </div>
      </div>
      <div className="mt-3 text-center">
        <h3 className="font-medium text-amber-800 text-sm md:text-base">{name}</h3>
        <p className="text-xs text-amber-600 mt-1">{duration}</p>
      </div>
    </div>
  )
}
