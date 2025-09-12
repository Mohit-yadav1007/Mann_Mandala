import Hero from "@/components/hero"
import About from "@/components/about"
import { SectionTitle } from "@/components/section-title"
import PortfolioGrid from "@/components/portfolio-grid"
import ConnectCards from "@/components/connect-cards"
import ContactForm from "@/components/contact-form"
import InstagramGallery from "@/components/instagram-gallery"

export default function Page() {
  return (
    <>
      <Hero />

      <main>
        <section id="what-i-do" className="mx-auto max-w-5xl px-4 py-16 md:py-20">
          <SectionTitle>What I Do</SectionTitle>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:translate-y-[-2px] transition-transform duration-300">
            <div className="mb-3 h-10 w-10 rounded-full bg-amber-600/10 text-amber-600 flex items-center justify-center">
              🎨
            </div>
            <h3 className="text-lg font-medium text-slate-900">Custom Art</h3>
            <p className="mt-1 text-sm text-slate-600">
              Unique mandala designs for your home, gifts, and statement decor.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:translate-y-[-2px] transition-transform duration-300">
            <div className="mb-3 h-10 w-10 rounded-full bg-amber-600/10 text-amber-600 flex items-center justify-center">
              🧑🏻‍🤝‍🧑🏽
            </div>
            <h3 className="text-lg font-medium text-slate-900">Workshops</h3>
            <p className="mt-1 text-sm text-slate-600">
              Hands-on sessions for all ages—perfect for a mindful creative break.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:translate-y-[-2px] transition-transform duration-300">
            <div className="mb-3 h-10 w-10 rounded-full bg-amber-600/10 text-amber-600 flex items-center justify-center">
              🏢
            </div>
            <h3 className="text-lg font-medium text-slate-900">Corporate Events</h3>
            <p className="mt-1 text-sm text-slate-600">
              Bring calm, focus, and team bonding with meditative mandala-making.
            </p>
          </div>
        </div>
      </section>

      <About />

      <section id="portfolio" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <SectionTitle>Portfolio Peek</SectionTitle>
          <div className="mt-10">
            <PortfolioGrid />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="py-6 md:py-8">
            <SectionTitle>Instagram Gallery</SectionTitle>
          </div>
        </div>
        <InstagramGallery />
      </section>

      <section className="relative bg-white">
        <img
          src="/images/decor-corner-left.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -left-10 -bottom-10 w-28 h-auto object-contain opacity-20 md:w-40"
        />
        <img
          src="/images/decor-corner-left.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -left-10 -top-10 hidden w-20 h-auto object-contain opacity-15 sm:block md:w-28"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <SectionTitle>Let's Connect</SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-700">
            Drop by, say hi, or let’s create something together.
          </p>
          <div className="mt-8">
            <ConnectCards />
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-slate-50">
        <img
          src="/images/decor-corner-right.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-auto object-contain opacity-15 md:w-56 rotate-180"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-20">
          <SectionTitle>Get in Touch</SectionTitle>
          <div className="mx-auto mt-10 max-w-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="mx-auto mb-3 h-6 w-6 rounded-full bg-amber-600" />
          <p className="text-sm">© 2025 Mann Mandalas by Mansi</p>
          <p className="mt-1 text-xs text-slate-300">Spreading creativity and mindfulness—one dot at a time.</p>
        </div>
      </footer>
      </main>
    </>
  )
}
