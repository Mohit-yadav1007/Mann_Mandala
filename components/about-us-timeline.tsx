"use client"

import { SectionTitle } from "./section-title"

export default function AboutUsTimeline() {
  const timelineEvents = [
    {
      year: "2020",
      title: "Covid Hit",
      description: "Mansi instinctively turned inward, dedicating time to creativity for mental health and expression.",
      image: "/images/painting/p1.jpeg",
      side: "left"
    },
    {
      year: "Mid-2020",
      title: "First Dot Mandala",
      description: "She discovered her true passion with dotting and acrylics. The circle and intricate patterns became her solace.",
      image: "/images/painting/p2.jpeg",
      side: "right"
    },
    {
      year: "2020–2025",
      title: "Journey as an Artist",
      description: "Her intricate works, taking anywhere from 10 to 100 hours, embody harmony, balance, and peace — transferring these feelings to the viewer.",
      image: "/images/painting/p3.jpeg",
      side: "left"
    }
  ]

  const showcaseImages = [
    { src: "/images/painting/p1.jpeg", alt: "Grand Dot Mandala" },
    { src: "/images/painting/p2.jpeg", alt: "Seven Chakras" },
    { src: "/images/painting/p3.jpeg", alt: "Lotus Mandala" },
    { src: "/images/painting/p4.jpeg", alt: "Buddha Mandala" },
    { src: "/images/mirrors/mr1.jpeg", alt: "Mirror Art" },
    { src: "/images/painting/p5.jpeg", alt: "Geometric Patterns" },
    { src: "/images/painting/p6.jpeg", alt: "Sacred Geometry" },
    { src: "/images/mirrors/mr2.jpeg", alt: "Decorative Mirror" }
  ]

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-white">
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 z-20">
          <img
            src="/images/decor-corner-left.png"
            alt=""
            className="w-full h-full object-contain opacity-80"
          />
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 z-20">
          <img
            src="/images/decor-corner-right.png"
            alt=""
            className="w-full h-full object-contain opacity-80"
          />
        </div>

        {/* Background Mandala Accent */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img
            src="/images/mandala-accent.png"
            alt=""
            className="w-96 h-96 sm:w-[32rem] sm:h-[32rem] md:w-[40rem] md:h-[40rem] object-contain"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-3 sm:px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
            About Us
          </h1>
          
          {/* Floral Gold Divider */}
          <div className="flex justify-center mb-8">
            <img
              src="/images/floral-gold.png"
              alt=""
              className="w-32 h-8 sm:w-40 sm:h-10 md:w-48 md:h-12 object-contain"
            />
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-medium">
            The Journey of Mansi & Mann Mandala
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-amber-600 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-amber-600 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-amber-50/30 overflow-hidden">
        {/* Background Mandala Accents */}
        <div className="absolute top-1/4 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-5">
          <img
            src="/images/mandala-accent.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-1/4 left-0 w-40 h-40 sm:w-56 sm:h-56 opacity-5">
          <img
            src="/images/mandala-accent.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-3 sm:px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-8">
              About the Artist
            </h2>
            
            {/* Floral Gold Divider */}
            <div className="flex justify-center mb-8">
              <img
                src="/images/floral-gold.png"
                alt=""
                className="w-24 h-6 sm:w-32 sm:h-8 md:w-40 md:h-10 object-contain"
              />
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 hidden md:block"></div>

            {/* Mobile Timeline Line */}
            <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 md:hidden"></div>

            {/* Timeline Events */}
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                    event.side === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Circle */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-16 md:ml-0 md:w-5/12 group">
                    <div className="bg-white rounded-2xl border-2 border-amber-200 p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-amber-400 transition-all duration-500 hover:-translate-y-2">
                      {/* Year Badge */}
                      <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {event.year}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-amber-800 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="ml-16 md:ml-0 md:w-5/12">
                    <div className="relative group">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section Divider */}
        <div className="flex justify-center pt-16 sm:pt-20">
          <img
            src="/images/floral-gold.png"
            alt=""
            className="w-32 h-8 sm:w-40 sm:h-10 md:w-48 md:h-12 object-contain"
          />
        </div>
      </section>

      {/* About Mann Mandala Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-amber-50 via-white to-amber-50 overflow-hidden">
        {/* Background Mandala Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-8">
          <img
            src="/images/mandala-accent.png"
            alt=""
            className="w-[32rem] h-[32rem] sm:w-[40rem] sm:h-[40rem] md:w-[48rem] md:h-[48rem] object-contain"
          />
        </div>

        {/* Corner Decorations */}
        <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-60">
          <img
            src="/images/decor-corner-left.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-60">
          <img
            src="/images/decor-corner-right.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-3 sm:px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-8 sm:mb-12">
            Mann Mandala by Mansi
          </h2>
          
          {/* Floral Gold Divider */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <img
              src="/images/floral-gold.png"
              alt=""
              className="w-24 h-6 sm:w-32 sm:h-8 md:w-40 md:h-10 object-contain"
            />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-amber-200 p-8 sm:p-12 md:p-16 shadow-xl">
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto">
              Mann Mandala was conceptualized to bring the timeless benefits of mandala art into contemporary designer products for everyday life. In today's fast-paced world, where stress is inevitable, our handcrafted dot mandala merchandise brings calm, beauty, and spiritual connection. Each piece integrates sacred geometry, colors, and patterns, helping to relieve stress and anxiety while drawing you closer to your inner self.
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Grid Showcase */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-amber-50/30 overflow-hidden">
        {/* Repeating Background Mandala Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-40 sm:h-40">
            <img src="/images/mandala-accent.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-48 sm:h-48">
            <img src="/images/mandala-accent.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-44 sm:h-44">
            <img src="/images/mandala-accent.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-0 right-1/2 w-28 h-28 sm:w-36 sm:h-36">
            <img src="/images/mandala-accent.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-3 sm:px-4 mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-8">
            Our Artwork
          </h2>
          
          {/* Floral Gold Divider */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/floral-gold.png"
              alt=""
              className="w-24 h-6 sm:w-32 sm:h-8 md:w-40 md:h-10 object-contain"
            />
          </div>
          
          <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto">
            Discover the beauty and tranquility of our handcrafted mandala art pieces
          </p>
        </div>

        <div className="relative">
          {/* Scrolling container */}
          <div className="flex gap-6 sm:gap-8 animate-scroll">
            {[...showcaseImages, ...showcaseImages, ...showcaseImages].map((image, index) => (
              <div 
                key={index} 
                className="group flex-shrink-0 w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer relative bg-white"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
                  <div className="p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bold text-lg sm:text-xl mb-2">{image.alt}</h3>
                    <p className="text-sm sm:text-base opacity-90 mb-3">Handcrafted mandala art piece</p>
                    <div className="flex items-center gap-2 text-amber-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm font-medium">View Details</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Connect Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-amber-50 to-white overflow-hidden">
        {/* Background Mandala Behind Icons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-8">
          <img
            src="/images/mandala-accent.png"
            alt=""
            className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] object-contain"
          />
        </div>

        {/* Corner Decorations */}
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 opacity-50">
          <img
            src="/images/decor-corner-left.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 opacity-50">
          <img
            src="/images/decor-corner-right.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 mb-8">
              Connect With Us
            </h2>
            
            {/* Floral Gold Divider */}
            <div className="flex justify-center mb-6">
              <img
                src="/images/floral-gold.png"
                alt=""
                className="w-24 h-6 sm:w-32 sm:h-8 md:w-40 md:h-10 object-contain"
              />
            </div>
            
            <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto">
              Stay connected with us and be part of our creative journey
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
              {/* Instagram */}
              <a
                href="https://instagram.com/mann_mandalas"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 touch-target"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 flex items-center justify-center text-white transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl shadow-lg group-hover:shadow-purple-500/25">
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-sm sm:text-base font-bold text-amber-800 group-hover:text-purple-600 transition-colors">Instagram</span>
                  <p className="text-xs sm:text-sm text-amber-600 mt-1">@mann_mandalas</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918668765859?text=Hi%20I%27d%20like%20to%20ask%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 touch-target"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 flex items-center justify-center text-white transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl shadow-lg group-hover:shadow-green-500/25">
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-sm sm:text-base font-bold text-amber-800 group-hover:text-green-600 transition-colors">WhatsApp</span>
                  <p className="text-xs sm:text-sm text-amber-600 mt-1">Business Chat</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:mannmandala07@gmail.com"
                className="group flex flex-col items-center gap-4 touch-target"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 flex items-center justify-center text-white transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl shadow-lg group-hover:shadow-red-500/25">
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.909L12 9.545l8.455-5.724h1.909c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-sm sm:text-base font-bold text-amber-800 group-hover:text-red-600 transition-colors">Email</span>
                  <p className="text-xs sm:text-sm text-amber-600 mt-1">mannmandala07@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/mann-mandala-by-mansi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 touch-target"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 flex items-center justify-center text-white transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl shadow-lg group-hover:shadow-blue-500/25">
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-sm sm:text-base font-bold text-amber-800 group-hover:text-blue-600 transition-colors">LinkedIn</span>
                  <p className="text-xs sm:text-sm text-amber-600 mt-1">Mann Mandala by Mansi</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer Divider */}
        <div className="relative flex justify-center pt-16 sm:pt-20">
          <img
            src="/images/floral-gold.png"
            alt=""
            className="w-32 h-8 sm:w-40 sm:h-10 md:w-48 md:h-12 object-contain"
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-gradient-to-r from-amber-800 to-amber-900 py-16 sm:py-20 text-center text-white overflow-hidden">
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-30">
          <img
            src="/images/decor-corner-left.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-30">
          <img
            src="/images/decor-corner-right.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Background Mandala */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img
            src="/images/mandala-accent.png"
            alt=""
            className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-3 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
            "Let's create something beautiful together."
          </h2>
          
          {/* Floral Gold Divider */}
          <div className="flex justify-center mb-8">
            <img
              src="/images/floral-gold.png"
              alt=""
              className="w-24 h-6 sm:w-32 sm:h-8 md:w-40 md:h-10 object-contain opacity-80"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-800 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-lg touch-target"
            >
              Explore Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </a>
            <a
              href="/workshops"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-amber-800 transition-all duration-300 hover:scale-105 touch-target"
            >
              Explore Workshops
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
