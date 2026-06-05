import { BRAND } from "@/config/company";
import NetworkCanvas from "./NetworkCanvas";
import Motes from "./Motes";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden bg-daysky">
      <span className="sun-glow w-[420px] h-[420px] -top-24 -right-24" aria-hidden="true" />
      <NetworkCanvas className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
      <Motes />
      <div className="absolute inset-x-0 top-[20%] flex justify-center" aria-hidden="true">
        <span className="watermark text-[24vw] md:text-[20vw] leading-none">NEXUS</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />

      <div className="relative mx-auto max-w-content px-5 md:px-8 w-full pt-24">
        <div className="reveal in max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 hairline text-[11px] tracking-[.2em] text-sky-deep mb-7 animate-float shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            食品卸 ・ 水産卸 ・ 商社機能
          </div>
          <h1 className="font-jp font-black text-ink leading-[1.12] text-[clamp(2.2rem,9vw,3rem)] sm:text-6xl md:text-7xl tracking-tight">
            {BRAND.heroTitleA}
            <br />
            <span className="text-grad text-grad-anim">{BRAND.heroTitleB}</span>
          </h1>
          <p className="mt-7 text-slate text-base md:text-lg leading-relaxed max-w-2xl">{BRAND.heroSub}</p>
          <p className="mt-4 font-sans text-[13px] md:text-sm tracking-[.18em] text-sky-deep font-medium">
            {BRAND.heroEn}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#business" className="px-6 py-3.5 rounded-full btn-primary text-sm">
              事業内容を見る
            </a>
            <a href="#company" className="px-6 py-3.5 rounded-full btn-ghost text-sm">
              会社情報を見る
            </a>
            <a href="#contact" className="px-6 py-3.5 rounded-full btn-ghost text-sm">
              お問い合わせ
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="font-sans text-[10px] tracking-[.3em]">SCROLL</span>
        <span className="w-px h-10 bg-gradient-to-b from-sky to-transparent" />
      </div>
    </section>
  );
}
