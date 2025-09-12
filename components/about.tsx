"use client"
import { SectionTitle } from "./section-title"

export default function About() {
  return (
    <section id="about" className="relative">
      <img
        src="/images/decor-corner-left.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 hidden h-auto w-20 object-contain opacity-15 sm:block md:w-28 lg:w-36"
      />
      <img
        src="/images/decor-corner-left.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 hidden h-auto w-20 object-contain opacity-15 sm:block md:w-28 lg:w-36"
      />
      <img
        src="/images/decor-corner-right.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 rotate-180 hidden h-auto w-20 object-contain opacity-15 sm:block md:w-28 lg:w-36"
      />
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <SectionTitle>About Me</SectionTitle>
        <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-pretty text-slate-700">
              I stumbled into the world of mandalas and got hooked—it's more than art, it’s a way to find balance and
              inspire others. I craft custom pieces and lead hands-on workshops and team sessions that bring calm focus
              and creativity.
            </p>
            <p className="mt-4 text-pretty text-slate-700">
              Based in Pune, India, I’m passionate about creating harmonious, mindful spaces for everyone—one dot at a
              time.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-amber-600">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEcZnBojd1Bsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729347156150?e=1759363200&v=beta&t=gkPtN32QXEX3tIjEYARq10bVtcFuhF1nr9nvjFgg6o0"
                alt="Artist portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
