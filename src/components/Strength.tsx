import { STRENGTHS } from "@/config/company";
import Reveal from "./Reveal";

/** 強みごとのアイコン（調達/提案/流通/成長） */
const ICONS: Record<string, JSX.Element> = {
  "01": <path d="M3 7h13l-2-3M21 17H8l2 3M3 7l5 5M21 17l-5-5" />,
  "02": <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11v2h6v-2a6 6 0 0 0-3-11z" />,
  "03": (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M5 6h14M5 6l7 12M19 6l-7 12" />
    </>
  ),
  "04": <path d="M3 17l5-5 4 4 8-9M21 7v5M21 7h-5" />,
};

export default function Strength() {
  return (
    <section id="strength" className="relative py-28 md:py-36 bg-white">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow font-sans text-[11px] text-sky-deep mb-5">STRENGTH</p>
          <h2 className="font-jp font-black text-ink text-3xl md:text-[44px] leading-tight">私たちの強み</h2>
          <p className="mt-5 text-muted text-sm md:text-base">卸売の堅実さと、総合商社への成長性を支える4つの力。</p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STRENGTHS.map((s, i) => (
            <Reveal
              key={s.no}
              delay={(i || undefined) as 1 | 2 | 3 | undefined}
              className="card rounded-2xl p-7 lift"
            >
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-sky/15 to-ocean/15 border border-sky/20 text-sky-deep">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                  {ICONS[s.no]}
                </svg>
              </div>
              <p className="font-sans text-xs tracking-widest text-sky-deep mt-6 font-semibold">{s.no}</p>
              <h3 className="font-jp font-bold text-lg text-ink mt-1">{s.title}</h3>
              <p className="text-sm text-slate leading-[1.9] mt-3">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
