"use client"

type Card = { label: string; href: string; note?: string }

const cards: Card[] = [
  { label: "Instagram", href: "https://instagram.com/mann_mandalas", note: "@mann_mandalas" },
  { label: "Facebook", href: "https://facebook.com/mann_mandalas" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mann-mandala-by-mansi", note: "For corporate collaborations" },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=918668765859&text&type=phone_number&app_absent=0",
    note: "Chat directly",
  },
  { label: "Email", href: "mailto:umandals22@gmail.com", note: "umandals22@gmail.com" },
]

// Color variants (kept to five colors total: amber, sky, emerald, white, slate). Replace Instagram rose with amber.
const variant: Record<string, { wrapper: string; dot: string; arrow: string; ring: string }> = {
  Instagram: {
    wrapper: "bg-amber-50 border-amber-200 hover:border-amber-400",
    dot: "bg-amber-500/90",
    arrow: "text-amber-700",
    ring: "focus-visible:ring-amber-500/40",
  },
  Facebook: {
    wrapper: "bg-sky-50 border-sky-200 hover:border-sky-400",
    dot: "bg-sky-600/90",
    arrow: "text-sky-700",
    ring: "focus-visible:ring-sky-500/40",
  },
  LinkedIn: {
    wrapper: "bg-sky-50 border-sky-200 hover:border-sky-400",
    dot: "bg-sky-700/90",
    arrow: "text-sky-800",
    ring: "focus-visible:ring-sky-500/40",
  },
  WhatsApp: {
    wrapper: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
    dot: "bg-emerald-600/90",
    arrow: "text-emerald-700",
    ring: "focus-visible:ring-emerald-500/40",
  },
  Email: {
    wrapper: "bg-amber-50 border-amber-200 hover:border-amber-400",
    dot: "bg-amber-500/90",
    arrow: "text-amber-700",
    ring: "focus-visible:ring-amber-500/40",
  },
}

export default function ConnectCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map((c, i) => {
        const v = variant[c.label] || {
          wrapper: "bg-white border-slate-200",
          dot: "bg-slate-400",
          arrow: "text-slate-500",
          ring: "focus-visible:ring-amber-600/40",
        }
        return (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className={`group rounded-xl border p-4 transition-all duration-300 ${v.wrapper} ${v.ring} animate-in-up hover-raise hover-tilt`}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 font-medium text-slate-900">
                <span className={`h-2.5 w-2.5 rounded-full ${v.dot} pulse-dot`} aria-hidden />
                {c.label}
              </span>
              <span aria-hidden className={`${v.arrow} transition-transform duration-300 group-hover:translate-x-1`}>
                →
              </span>
            </div>
            {c.note && <p className="mt-1 text-sm text-slate-700">{c.note}</p>}
          </a>
        )
      })}
    </div>
  )
}
