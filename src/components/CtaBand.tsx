import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#0EA5E9,#2563EB_55%,#0D9488)]" />
      <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden="true" />
      <span className="sun-glow w-[360px] h-[360px] -top-20 right-[12%] opacity-60" aria-hidden="true" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      <Reveal className="relative mx-auto max-w-content px-5 md:px-8 text-center">
        <p className="font-sans text-[11px] tracking-[.3em] text-white/80 mb-6">LET&apos;S BUILD THE NEXT TRADE</p>
        <h2 className="font-jp font-black text-white text-[clamp(2rem,7vw,3.75rem)] sm:text-5xl md:text-6xl leading-[1.15]">
          新しい商流を、<span className="text-white/95">共につくる。</span>
        </h2>
        <p className="mt-7 text-white/85 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          「こんな商材を、こんな量で」——その一言から、商流は動きます。仕入れも、提携も、まずはご相談ください。
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-ocean font-bold text-sm transition-all hover:translate-y-[-2px] hover:shadow-xl shadow-lg"
          >
            仕入れ・取引のご相談
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/40 text-white font-bold text-sm transition-all hover:bg-white/10 hover:translate-y-[-2px]"
          >
            事業提携・M&Aのご相談
          </a>
        </div>
      </Reveal>
    </section>
  );
}
