"use client"

import { useMemo, useState } from "react"

/**
 * WorkshopsPage
 * Full workshops landing page composed of:
 * - Hero (with smooth scroll-to-intro button)
 * - Introduction, Benefits, Pricing (expandable details)
 * - Testimonials (3 seamless marquee rows)
 * - Workshop Photos (2 seamless marquee rows)
 * - CTA (WhatsApp + brochure download)
 * - Contact grid
 * Notes:
 * - Images use "#" placeholder; UI falls back to /placeholder.jpg.
 * - Marquee rows are CSS-driven via .scroller/.scroller__inner (see app/globals.css).
 */
export default function WorkshopsPage() {
  // External links
  const whatsapp = "https://wa.me/918668765859"
  // Retained for reference; actual download uses /Mandala-Brochure.pdf via handleDownload
  const brochure = "/mnt/data/Mandala Corporate Workshops_(1).pdf"

  // Static content blocks (memoized to avoid re-creation on re-render)
  const benefits = useMemo(() => [
    "Reduce Stress levels",
    "Help with concentration",
    "Meditation & Relaxation tool",
    "Build confidence",
    "Problem solving",
    "Balance left and right brain",
    "Increase focus",
    "Enhance team communication",
    "Boost creativity & innovation",
    "Relationship building",
  ], [])

  const pricing = useMemo(() => ([
    { option: "Mandala Art on Sheets", duration: "1–1.5 hrs", participants: "Up to 100", price: "₹25,000", desc: "Participant’s complete their mandalas in sheets given with Black pen.Colour the mandalas with the choice of shades, using colour therapy to calm the mind. Introduction to basic shapes, patterns and designs and Learn tips andtricks to create mandala. Grid making and patterns of mandala.How to fill the patterns and create own designs." },
    { option: "Mandala Art on MDF", duration: "1–1.5 hrs", participants: "Up to 100", price: "₹35,000", desc: "Participants will paint a 6 inch mandala piece with acrylic brush pens. It will be a wooden base and can be used as table or wall decorative in future." },
    { option: "Bookmark / Keychain / Magnet / Coaster", duration: "1–1.5 hrs", participants: "Up to 50 (batch 20–25)", price: "₹40,000", desc: "Create your own bookmarks with mandala patterns. Dot mandala art using acrylic paints and dotting tools Attach tassels or jute with punch machine learn colour therapy and meditative dotting art." },
    { option: "Dot Mandala Mug Workshop", duration: "2 hrs", participants: "20–25 per batch", price: "₹799 per person", desc: "Participants will create their own dot mandala coffee mugs with multi surface acrylic paints. Mugs will be washable and microwaveable for daily use. No artistic skill is required for these workshops.." },
    { option: "Tote Bag Workshop", duration: "1–1.5 hrs", participants: "Up to 100", price: "₹40,000", desc: "Participants will hand-paint their own unique tote bags using multi surface acrylic paints. These reusable fabric bags are washable and eco-friendly — ideal for everyday use. The workshop is beginner-friendly and requires no prior artistic experience. Just bring your creativity!." },
    { option: "Lippan Art Workshop", duration: "2 hrs", participants: "Up to 100", price: "₹55,000", desc: "Lippan art is a traditional craft from Kutch, Gujarat, made using mud, clay, and mirrors to create decorative patterns. Get hands-on experience creating your own Lippan art piece Suitable for all skill levels, from beginners to advanced artists." },
    { option: "Family & Festive Day Workshop", duration: "Custom", participants: "Flexible", price: "On Request", desc: "Employees and their families engage together in a shared, calming creative experience — building stronger emotional connections. A perfect stress-free activity where every family member — young or old — can participate and enjoy together.." },
  ]), [])

  const testimonials = useMemo(() => ([
    { name: "Rahul", text: "Amazing experience! Very relaxing and creative.", rating: 5 },
    { name: "Ananya", text: "Our team bonded so well. Highly recommend.", rating: 5 },
    { name: "Suresh", text: "Perfect for stress relief. Beautiful session.", rating: 4 },
    { name: "Meera", text: "Loved the techniques, even as a beginner!", rating: 5 },
    { name: "Pooja", text: "The mug workshop was my favorite!", rating: 5 },
    { name: "Ravi", text: "Great for corporate team building.", rating: 4 },
    { name: "Aditi", text: "The tote bag art was so fun!", rating: 5 },
    { name: "Vikram", text: "Super creative and calming.", rating: 5 },
    { name: "Priya", text: "Mandala therapy worked wonders!", rating: 5 },
    { name: "Neha", text: "Family day was a huge success.", rating: 5 },
    { name: "Arjun", text: "Truly relaxing and mindful.", rating: 4 },
    { name: "Simran", text: "Loved every bit of it!", rating: 5 },
  ]), [])

  // Workshop photos for row 1 (20 photos from wo1)
  const photosRow1 = useMemo(() => [
    'w1.jpg', 'w2.jpg', 'w3.jpg', 'w4.jpg', 'w5.jpg', 'w6.jpg', 'w7.jpg', 'w8.jpg', 'w9.jpg', 'w10.jpg',
    'w11.jpg', 'w12.jpg', 'w13.jpg', 'w14.jpg', 'w15.jpg', 'w16.jpg', 'w17.jpg', 'w18.jpg', 'w19.jpg', 'w20.jpg'
  ], [])

  // Workshop photos for row 2 (15 photos from wo2)
  const photosRow2 = useMemo(() => [
    'wo1.jpg', 'wo2.jpg', 'wo3.jpg', 'wo4.jpg', 'wo5.jpg', 'wo6.jpg', 'wo7.jpg', 'wo8.jpg', 'wo9.jpg', 'wo10.jpg',
    'wo11.jpg', 'wo12.jpg', 'wo13.jpg', 'wo14.jpg', 'wo15.jpg'
  ], [])

  /**
   * Smoothly scrolls the viewport to the Introduction section
   */
  const scrollToIntro = () => {
    const el = document.getElementById('intro')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /**
   * Programmatic brochure download from /public
   * Ensures download works without opening a new tab.
   */
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Mandala-Brochure.pdf"
    link.setAttribute("download", "Mandala-Corporate-Workshops.pdf")
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  // State for fullscreen image modal
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null)

  /**
   * Opens the fullscreen image modal
   */
  const openFullscreen = (src: string) => {
    setFullscreenSrc(src)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('#')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-6xl px-3 sm:px-4 py-16 sm:py-20 md:py-24 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 leading-tight">Mann Mandala Workshops </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-amber-800/80 leading-relaxed">Hands-on workshops designed to calm the mind, spark creativity, and build stronger teams.</p>
          <button onClick={scrollToIntro} aria-label="Scroll to content" className="mt-8 sm:mt-10 inline-flex items-center justify-center text-amber-700 hover:text-amber-800 transition-colors hover-raise touch-target">
            ↓
          </button>
        </div>
      </section>

      {/* Removed extra separator before CTA per request */}

      {/* Introduction */}
      <section id="intro" className="mx-auto max-w-4xl px-3 sm:px-4 py-6 sm:py-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900 leading-tight">About Mandala Art</h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-amber-800/90 leading-relaxed">
         The Sacred geometry; It is the combination of circles and beautiful
  pattern drawn around it. Mandala painting is a symbolic picture of
  the universe, the circle that represents wholeness, totality, infinity,
  timelessness, and unity. We live in a world that is so fast-paced
  and most of the time we are so caught up in trying to fit in, and
  what controls our everyday lives is the fear of missing out or the
  need to be perfect .Drawing Mandalas brings in several benefits
  when practiced regularly
        </p>
      </section>

      <hr className="my-8 border-amber-200" />

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-3 sm:px-4 py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900 text-center leading-tight">Benefits for Participants</h2>
        <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {benefits.map((b, i) => (
            <li 
              key={i} 
              className="group flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-amber-100 
                         cursor-pointer benefit-glow
                         hover:border-amber-300 hover:scale-105
                         active:scale-95
                         hover:bg-gradient-to-br hover:from-amber-50 hover:to-white
                         transform hover:-translate-y-1"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-600 transition-all duration-300 
                             group-hover:bg-amber-500 group-hover:shadow-lg group-hover:shadow-amber-400/50" />
              <span className="text-amber-800 transition-colors duration-300 hover:text-amber-900 font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-8 border-amber-200" />

      {/* Pricing (details/summary accordions) */}
      <section className="mx-auto max-w-6xl px-3 sm:px-4 py-6 sm:py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900 text-center leading-tight">Our Workshop Options</h2>
        
        {/* Desktop Table View */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm hidden md:block">
          <div className="grid grid-cols-4 gap-0 bg-amber-50 text-amber-900 font-semibold px-4 py-3 text-sm md:text-base">
            <div>Option</div>
            <div>Duration</div>
            <div>Participants</div>
            <div>Price</div>
          </div>
          <div className="divide-y">
            {pricing.map((row, idx) => (
              <details key={idx} className="group">
                <summary className="grid grid-cols-4 items-center px-4 py-4 cursor-pointer hover:bg-amber-50/60 transition-colors">
                  <div className="font-medium text-amber-900">{row.option}</div>
                  <div className="text-amber-800/90">{row.duration}</div>
                  <div className="text-amber-800/90">{row.participants}</div>
                  <div className="text-amber-900 font-semibold">{row.price}</div>
                </summary>
                <div className="px-4 pb-4 text-amber-800/90 bg-amber-50/50">{row.desc}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="mt-8 space-y-4 md:hidden">
          {pricing.map((row, idx) => (
            <details key={idx} className="group bg-white border border-amber-100 rounded-2xl shadow-sm overflow-hidden">
              <summary className="px-4 py-4 cursor-pointer hover:bg-amber-50/60 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-amber-900 text-sm leading-tight">
                    {row.option}
                  </div>
                  <div className="text-amber-900 font-semibold text-sm">
                    {row.price}
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-amber-800/90">
                  <div>
                    <span className="font-medium">Duration:</span> {row.duration}
                  </div>
                  <div className="text-right">
                    <span className="font-medium">Participants:</span><br />
                    <span className="leading-tight">{row.participants}</span>
                  </div>
                </div>
              </summary>
              <div className="px-4 pb-4 pt-2 text-amber-800/90 bg-amber-50/50 text-sm leading-relaxed">
                {row.desc}
              </div>
            </details>
          ))}
        </div>
        {/* Booking & Download buttons placed directly under pricing table */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:justify-between">
          <button 
            onClick={handleDownload} 
            className="w-full sm:w-auto px-5 py-2.5 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors text-center text-sm sm:text-base"
          >
            📥 Download Brochure
          </button>
          <a 
            href={whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-5 py-2.5 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors text-center text-sm sm:text-base"
          >
            Book Now
          </a>
        </div>
      </section>

      <hr className="my-8 border-amber-200" />

      {/* Testimonials (3 rows; CSS marquee via data attributes) */}
      <section className="my-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">What Our Clients Say</h2>

        {/* Row 1 - Left */}
        <div className="scroller" data-direction="left" data-speed="slow">
          <ul className="scroller__inner flex">
            {[...testimonials, ...testimonials].map((t, i) => (
              <li key={`row1-${i}`} className="w-[260px] sm:w-[280px] flex-shrink-0 mx-2 sm:mx-4 p-4 sm:p-6 bg-white shadow-lg rounded-2xl" aria-hidden={i >= testimonials.length}>
                <p className="text-gray-600 italic text-sm sm:text-base">"{t.text}"</p>
                <div className="mt-2 font-semibold text-gray-800 text-sm sm:text-base">– {t.name}</div>
                <div className="text-yellow-500 text-sm sm:text-base">{"★".repeat(t.rating)}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2 - Right */}
        <div className="scroller mt-4 sm:mt-6" data-direction="right" data-speed="slow">
          <ul className="scroller__inner flex">
            {[...testimonials, ...testimonials].map((t, i) => (
              <li key={`row2-${i}`} className="w-[260px] sm:w-[280px] flex-shrink-0 mx-2 sm:mx-4 p-4 sm:p-6 bg-white shadow-lg rounded-2xl" aria-hidden={i >= testimonials.length}>
                <p className="text-gray-600 italic text-sm sm:text-base">"{t.text}"</p>
                <div className="mt-2 font-semibold text-gray-800 text-sm sm:text-base">– {t.name}</div>
                <div className="text-yellow-500 text-sm sm:text-base">{"★".repeat(t.rating)}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 3 - Left */}
        <div className="scroller mt-4 sm:mt-6" data-direction="left" data-speed="slow">
          <ul className="scroller__inner flex">
            {[...testimonials, ...testimonials].map((t, i) => (
              <li key={`row3-${i}`} className="w-[260px] sm:w-[280px] flex-shrink-0 mx-2 sm:mx-4 p-4 sm:p-6 bg-white shadow-lg rounded-2xl" aria-hidden={i >= testimonials.length}>
                <p className="text-gray-600 italic text-sm sm:text-base">"{t.text}"</p>
                <div className="mt-2 font-semibold text-gray-800 text-sm sm:text-base">– {t.name}</div>
                <div className="text-yellow-500 text-sm sm:text-base">{"★".repeat(t.rating)}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="my-8 border-amber-200" />

      {/* Workshop Photos (2 rows; CSS marquee via data attributes) */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Workshop Moments</h2>

        {/* Row 1 - Left */}
        <div className="scroller" data-direction="left" data-speed="slower">
          <ul className="scroller__inner flex">
            {[...photosRow1, ...photosRow1].map((src, i) => (
              <li key={`photo1-${i}`} className="w-[300px] h-52 flex-shrink-0 mx-3" aria-hidden={i >= photosRow1.length}>
                <button
                  type="button"
                  onClick={() => openFullscreen(`/images/workshop/wo1/${src}`)}
                  className="w-full h-full p-0 m-0 border-0 bg-transparent cursor-pointer rounded-2xl shadow-md overflow-hidden"
                  aria-label={`Open workshop photo ${i + 1} fullscreen`}
                >
                  <img src={`/images/workshop/wo1/${src}`} alt="Workshop" className="w-full h-full object-cover rounded-2xl" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2 - Right */}
        <div className="scroller mt-6" data-direction="right" data-speed="slower">
          <ul className="scroller__inner flex">
            {[...photosRow2, ...photosRow2].map((src, i) => (
              <li key={`photo2-${i}`} className="w-[300px] h-52 flex-shrink-0 mx-3" aria-hidden={i >= photosRow2.length}>
                <button
                  type="button"
                  onClick={() => openFullscreen(`/images/workshop/wo2/${src}`)}
                  className="w-full h-full p-0 m-0 border-0 bg-transparent cursor-pointer rounded-2xl shadow-md overflow-hidden"
                  aria-label={`Open workshop photo ${i + 1} fullscreen`}
                >
                  <img src={`/images/workshop/wo2/${src}`} alt="Workshop" className="w-full h-full object-cover rounded-2xl" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Fullscreen image modal */}
        {fullscreenSrc && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
            onClick={() => setFullscreenSrc(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen workshop photo"
          >
            <img src={fullscreenSrc} alt="Fullscreen workshop" className="max-w-full max-h-full rounded-lg shadow-lg" />
          </div>
        )}
      </section>

      {/* Contact grid removed to use global footer instead */}
    </main>
  )
}


 