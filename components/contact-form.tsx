"use client"

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mzzaeyoy"
      method="POST"
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm"
    >
      <div>
        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-600 touch-target"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-600 touch-target"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Custom art, workshop booking, or something else?"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-emerald-600 px-4 py-3 sm:py-2 text-sm sm:text-base font-medium text-white hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-sky-500/50 hover-raise touch-target"
      >
        Send Message
      </button>
      <p className="text-center text-xs sm:text-xs text-slate-500 leading-relaxed">Your info is used only to respond to your inquiry.</p>
    </form>
  )
}
