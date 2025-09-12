"use client"

// ProductModal
// Fullscreen image viewer with:
// - Keyboard: ESC to close, ←/→ to navigate
// - Swipe (via hooks/use-swipe in parent usage) handled externally when needed
// - Looping navigation and fade between images
// Props:
//   isOpen, onClose: visibility control
//   images, names: arrays representing current subcategory
//   index, setIndex: controlled index for current image

import { useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  names: string[]
  index: number
  setIndex: (i: number) => void
}

export default function ProductModal({ isOpen, onClose, images, names, index, setIndex }: ProductModalProps) {
  // Prevent background scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((index + 1) % (images.length || 1))
      if (e.key === 'ArrowLeft') setIndex((index - 1 + (images.length || 1)) % (images.length || 1))
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, index, images.length, onClose, setIndex])

  if (!isOpen) return null

  const safeIndex = images.length ? ((index % images.length) + images.length) % images.length : 0
  const src = images[safeIndex] === "#" ? "/placeholder.jpg" : images[safeIndex] || "/placeholder.jpg"
  const title = names[safeIndex] || ""

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>

        <div className="relative rounded-xl overflow-hidden bg-white shadow-2xl animate-zoom-in">
          <div className="relative aspect-square max-h-[80vh] w-full select-none">
            <button
              aria-label="Previous image"
              onClick={() => setIndex((safeIndex - 1 + (images.length || 1)) % (images.length || 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/60"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              aria-label="Next image"
              onClick={() => setIndex((safeIndex + 1) % (images.length || 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/60"
            >
              <ChevronRight size={28} />
            </button>
            <Image
              src={src}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100">
            <h3 className="text-lg font-semibold text-amber-800">{title}</h3>
            <p className="text-sm text-amber-600 mt-1">Tap arrows or swipe. Click outside to close.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
