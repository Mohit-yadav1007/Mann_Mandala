"use client"

// ProductsPage
// Renders the Products experience with:
// - Sticky SubNav tabs (auto-centering active)
// - One active category displayed at a time (fade transition)
// - Subcategory rows rendered via InfiniteScrollGrid
// - Click on image opens ProductModal with swipe/keyboard navigation
// Data uses "#" images as placeholders for later replacement.

import { useState, useRef, useMemo } from "react"
import SubNav from "./sub-nav"
import InfiniteScrollGrid from "./infinite-scroll-grid"
import ProductModal from "./product-modal"

interface Product {
  name: string
  duration: string
  image: string
}

interface Category {
  name: string
  subcategories: {
    title: string
    products: Product[]
  }[]
}

// Category → Subcategory → 6 placeholder products
const categories: Category[] = [
  {
    name: "Mugs & Glasses",
    subcategories: [
      {
        title: "Mugs",
        products: new Array(6).fill(0).map((_, i) => ({ name: `Mug ${i + 1}`, duration: "Duration: 10–15 days", image: "#" }))
      },
      {
        title: "Wine Glasses",
        products: new Array(6).fill(0).map((_, i) => ({ name: `Wine Glass ${i + 1}`, duration: "Duration: 10–15 days", image: "#" }))
      }
    ]
  },
  {
    name: "Customizable Boxes",
    subcategories: [
      {
        title: "Multipurpose Box",
        products: new Array(6).fill(0).map((_, i) => ({ name: `Multipurpose Box ${i + 1}`, duration: "Duration: 10–15 days", image: "#" }))
      },
      {
        title: "Tissue Box",
        products: new Array(6).fill(0).map((_, i) => ({ name: `Tissue Box ${i + 1}`, duration: "Duration: 10–15 days", image: "#" }))
      }
    ]
  },
  {
    name: "Cute Accessories",
    subcategories: [
      {
        title: "Keychain",
        products: new Array(6).fill(0).map((_, i) => ({ name: `Keychain ${i + 1}`, duration: "Duration: 7–10 days", image: "#" }))
      },
      {
        title: "Bookmark",
        products: new Array(6).fill(0).map((_, i) => ({ name: `Bookmark ${i + 1}`, duration: "Duration: 7–10 days", image: "#" }))
      }
    ]
  },
  {
    name: "Festive Decorations",
    subcategories: [
      { title: "Pooja Thali", products: new Array(6).fill(0).map((_, i) => ({ name: `Pooja Thali ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Incense Holders", products: new Array(6).fill(0).map((_, i) => ({ name: `Incense Holder ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Pooja Chowki", products: new Array(6).fill(0).map((_, i) => ({ name: `Pooja Chowki ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) }
    ]
  },
  {
    name: "Festive Gifts & Spiritual Significance",
    subcategories: [
      { title: "Tea Light Holders", products: new Array(6).fill(0).map((_, i) => ({ name: `Tea Light Holder ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Tray", products: new Array(6).fill(0).map((_, i) => ({ name: `Tray ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Tea Cups & Coasters", products: new Array(6).fill(0).map((_, i) => ({ name: `Tea Cups/Coasters ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Elephant Figurine", products: new Array(6).fill(0).map((_, i) => ({ name: `Elephant Figurine ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Turtles Figurine", products: new Array(6).fill(0).map((_, i) => ({ name: `Turtle Figurine ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Shriyantra", products: new Array(6).fill(0).map((_, i) => ({ name: `Shriyantra ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Seven Chakras", products: new Array(6).fill(0).map((_, i) => ({ name: `Seven Chakras ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) }
    ]
  },
  {
    name: "Corporate Gifts",
    subcategories: [
      { title: "Journals", products: new Array(6).fill(0).map((_, i) => ({ name: `Journal ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Sippers", products: new Array(6).fill(0).map((_, i) => ({ name: `Sipper ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Coffee Mugs", products: new Array(6).fill(0).map((_, i) => ({ name: `Coffee Mug ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "LED Lamps", products: new Array(6).fill(0).map((_, i) => ({ name: `LED Lamp ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) },
      { title: "Wall Plates", products: new Array(6).fill(0).map((_, i) => ({ name: `Wall Plate ${i + 1}`, duration: "Duration: 10–15 days", image: "#" })) }
    ]
  }
]

export default function ProductsPage() {
  // Active category + modal state
  const [activeCategory, setActiveCategory] = useState(categories[0].name)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImages, setCurrentImages] = useState<string[]>([])
  const [currentNames, setCurrentNames] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const categoryNames = useMemo(() => categories.map(cat => cat.name), [])
  const activeData = useMemo(() => categories.find(c => c.name === activeCategory)!, [activeCategory])

  // Click on a tab → fade out current, switch, then scroll to top of new
  const handleCategoryClick = (category: string) => {
    if (category === activeCategory) return
    setFading(true)
    setTimeout(() => {
      setActiveCategory(category)
      setFading(false)
      const element = sectionRefs.current[category]
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      }
    }, 150)
  }

  // Open modal for a subcategory's images from a given index
  const openModalFor = (images: string[], names: string[], index: number) => {
    setCurrentImages(images)
    setCurrentNames(names)
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setCurrentImages([])
    setCurrentNames([])
    setCurrentIndex(0)
  }

  const whatsappHref = "https://wa.me/919999999999?text=Hi%20I%27d%20like%20to%20customize%20a%20product"

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      <SubNav 
        categories={categoryNames}
        onCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div
          ref={(el) => { sectionRefs.current[activeData.name] = el }}
          className={`mb-16 scroll-mt-24 transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-8 text-center">
            {activeData.name}
          </h2>

          {activeData.subcategories.map((subcategory, subIndex) => {
            const images = subcategory.products.map(p => p.image)
            const names = subcategory.products.map(p => p.name)
            const duration = subcategory.products[0]?.duration || "Duration: 10–15 days"
            return (
              <InfiniteScrollGrid
                key={subIndex}
                title={subcategory.title}
                images={images}
                names={names}
                duration={duration}
                buttonText="Make Your Own"
                buttonLink={whatsappHref}
                onImageClick={(i) => openModalFor(images, names, i)}
              />
            )
          })}
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={currentImages}
        names={currentNames}
        index={currentIndex}
        setIndex={setCurrentIndex}
      />
    </div>
  )
}
