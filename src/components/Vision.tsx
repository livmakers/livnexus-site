import { VISION, VISION_STEPS } from "@/config/company";
import Reveal from "./Reveal";

const STEP = {
  cyan: { ring: "bg-white border border-line text-sky-deep shadow-sm", en: "text-sky-deep" },
  sky: { ring: "bg-white border border-line text-ocean shadow-sm", en: "text-ocean" },
  teal: { ring: "bg-white border border-line text-teal shadow-sm", en: "text-teal" },
  primary: { ring: "btn-primary", en: "text-sky-deep" },
} as const;

export default function Vision() {
  return (
    <section id="vision" className="relative py-28 md:py-36 overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(14,165,233,.12),transparent_60%)]" />
      <span className="sun-glow w-[300px] h-[300px] top-8 right-[8%] opacity-70" aria-hidden="true" />
      <div className="absolute inset-x-0 top-10 flex justify-center" aria-hidden="true">
        <span className="watermark text-[16vw] leading-none">CONNECT</span>
      </div>
      <div className="relative mx-auto max-w-content px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow font-sans text-[11px] text-sky-deep mb-5">VISION</p>
          <h2 className="font-jp font-black text-ink text-3xl md:text-[46px] leading-[1.2]">
            {VISION.lead}
            <br />
            <span className="text-grad text-grad-anim">{VISION.leadAccent}</span>
          </h2>
          <p className="mt-7 text-slate text-[15px] md:text-base leading-[2] max-w-2xl">{VISION.body}</p>
        </Reveal>

        {/* 成長ステップ Local → Regional → National →（その先へ） */}
        <Reveal className="mt-16" delay={1}>
          <div className="relative">
            <div className="absolute left-0 right-0 top-[26px] h-[3px] bg-line rounded-full hidden md:block" />
            <div
              className="tl-fill absolute left-0 top-[26px] h-[3px] rounded-full bg-gradient-to-r from-sky via-ocean to-teal hidden md:block"
              aria-hidden="true"
            />
            <ol className="grid md:grid-cols-4 gap-5">
              {VISION_STEPS.map((s) => {
                const c = STEP[s.color];
                return (
                  <li key={s.no} className="relative">
                    <div className="flex md:block items-center gap-4">
                      <span
                        className={`relative z-10 grid place-items-center w-[54px] h-[54px] rounded-full font-sans font-bold ${c.ring}`}
                      >
                        {s.no}
                      </span>
                      <div className="md:mt-5">
                        <p className={`font-sans text-xs tracking-[.2em] ${c.en}`}>{s.en}</p>
                        <p className="font-jp font-bold text-ink mt-1">{s.jp}</p>
                        <p className="text-xs text-muted mt-1.5 leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
