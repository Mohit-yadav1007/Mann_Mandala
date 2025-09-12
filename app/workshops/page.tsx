"use client"

import { useMemo } from "react"

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

  // Ten placeholder entries; UI falls back to /placeholder.jpg for "#"
  const photos = useMemo(() => new Array(10).fill("#"), [])

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

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('#')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-amber-900">Mann Mandala Workshops </h1>
          <p className="mt-4 text-amber-800/80 md:text-lg">Hands-on workshops designed to calm the mind, spark creativity, and build stronger teams.</p>
          <button onClick={scrollToIntro} aria-label="Scroll to content" className="mt-10 inline-flex items-center justify-center text-amber-700 hover:text-amber-800 transition-colors hover-raise">
            ↓
          </button>
        </div>
      </section>

      <hr className="my-8 border-amber-200" />

      {/* Introduction */}
      <section id="intro" className="mx-auto max-w-4xl px-4 py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900">About Mandala Art</h2>
        <p className="mt-4 text-amber-800/90 leading-relaxed">
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
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center">Benefits for Participants</h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-amber-100">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" />
              <span className="text-amber-800">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-8 border-amber-200" />

      {/* Pricing (details/summary accordions) */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 text-center">Our Workshop Options</h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
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
      </section>

      <hr className="my-8 border-amber-200" />

      {/* Testimonials (3 rows; CSS marquee via data attributes) */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>

        {/* Row 1 - Left */}
        <div className="scroller" data-direction="left" data-speed="slow">
          <ul className="scroller__inner flex">
            {[...testimonials, ...testimonials].map((t, i) => (
              <li key={`row1-${i}`} className="w-[280px] flex-shrink-0 mx-4 p-6 bg-white shadow-lg rounded-2xl" aria-hidden={i >= testimonials.length}>
                <p className="text-gray-600 italic">“{t.text}”</p>
                <div className="mt-2 font-semibold text-gray-800">– {t.name}</div>
                <div className="text-yellow-500">{"★".repeat(t.rating)}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2 - Right */}
        <div className="scroller mt-6" data-direction="right" data-speed="slow">
          <ul className="scroller__inner flex">
            {[...testimonials, ...testimonials].map((t, i) => (
              <li key={`row2-${i}`} className="w-[280px] flex-shrink-0 mx-4 p-6 bg-white shadow-lg rounded-2xl" aria-hidden={i >= testimonials.length}>
                <p className="text-gray-600 italic">“{t.text}”</p>
                <div className="mt-2 font-semibold text-gray-800">– {t.name}</div>
                <div className="text-yellow-500">{"★".repeat(t.rating)}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 3 - Left */}
        <div className="scroller mt-6" data-direction="left" data-speed="slow">
          <ul className="scroller__inner flex">
            {[...testimonials, ...testimonials].map((t, i) => (
              <li key={`row3-${i}`} className="w-[280px] flex-shrink-0 mx-4 p-6 bg-white shadow-lg rounded-2xl" aria-hidden={i >= testimonials.length}>
                <p className="text-gray-600 italic">“{t.text}”</p>
                <div className="mt-2 font-semibold text-gray-800">– {t.name}</div>
                <div className="text-yellow-500">{"★".repeat(t.rating)}</div>
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
        <div className="scroller" data-direction="left" data-speed="slow">
          <ul className="scroller__inner flex">
            {[...photos, ...photos].map((src, i) => (
              <li key={`photo1-${i}`} className="w-[300px] h-52 flex-shrink-0 mx-3" aria-hidden={i >= photos.length}>
                <img src={src === "#" ? "/placeholder.jpg" : src} alt="Workshop" className="w-full h-full object-cover rounded-2xl shadow-md" />
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2 - Right */}
        <div className="scroller mt-6" data-direction="right" data-speed="slow">
          <ul className="scroller__inner flex">
            {[...photos, ...photos].map((src, i) => (
              <li key={`photo2-${i}`} className="w-[300px] h-52 flex-shrink-0 mx-3" aria-hidden={i >= photos.length}>
                <img src={src === "#" ? "/placeholder.jpg" : src} alt="Workshop" className="w-full h-full object-cover rounded-2xl shadow-md" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="my-8 border-amber-200" />

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900">Ready to Book Your Workshop?</h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition-colors">Book Now</a>
          <button onClick={handleDownload} className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">📥 Download Brochure</button>
        </div>
      </section>

      <hr className="my-8 border-amber-200" />

      {/* Contact Footer (grid layout) */}
      <footer className="mx-auto max-w-4xl px-4 pb-16 text-amber-800/90">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
          <div className="p-4 bg-white rounded-xl border border-amber-100 shadow-sm"><strong>📞 Phone</strong><div>8007367650</div></div>
          <div className="p-4 bg-white rounded-xl border border-amber-100 shadow-sm"><strong>💬 WhatsApp</strong><div>8668765859</div></div>
          <div className="p-4 bg-white rounded-xl border border-amber-100 shadow-sm"><strong>📧 Email</strong><div><a className="underline" href="mailto:mannmandala07@gmail.com">mannmandala07@gmail.com</a></div></div>
          <div className="p-4 bg-white rounded-xl border border-amber-100 shadow-sm"><strong>📷 Instagram</strong><div><a className="underline" href="https://instagram.com/mann_mandalas" target="_blank" rel="noreferrer">@mann_mandalas</a></div></div>
        </div>
      </footer>
    </main>
  )
}
