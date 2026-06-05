import { BUSINESSES, TRADING, GROUP_PARTNERS, MATERIALS } from "@/config/company";
import Reveal from "./Reveal";

const ACCENT = {
  earth: {
    chip: "text-green bg-green/10 border-green/20",
    glow: "bg-green/10",
    badge: "text-green/25",
    lead: "text-grad-earth",
    reveal: "reveal-l" as const,
  },
  sea: {
    chip: "text-sky-deep bg-sky/10 border-sky/20",
    glow: "bg-sky/10",
    badge: "text-sky/25",
    lead: "text-grad-sea",
    reveal: "reveal-r" as const,
  },
} as const;

export default function Business() {
  return (
    <section id="business" className="relative py-28 md:py-36 bg-paper">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow font-sans text-[11px] text-sky-deep mb-5">BUSINESS</p>
          <h2 className="font-jp font-black text-ink text-3xl md:text-[44px] leading-tight">事業内容</h2>
          <p className="mt-5 text-muted text-sm md:text-base">2つの事業の柱が、食と水産の商流を支えます。</p>
        </Reveal>

        {/* 左右対比 */}
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {BUSINESSES.map((b) => {
            const a = ACCENT[b.accent];
            return (
              <Reveal
                key={b.id}
                as="article"
                variant={a.reveal}
                className="group relative rounded-3xl card p-8 md:p-10 overflow-hidden lift"
              >
                <div className={`absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl ${a.glow}`} />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[11px] tracking-widest border font-sans ${a.chip}`}>
                      {b.no}
                    </span>
                    <span className={`font-sans text-5xl font-black ${a.badge}`}>{b.badge}</span>
                  </div>
                  <h3 className="mt-6 font-jp font-black text-2xl text-ink">{b.name}</h3>
                  <p className={`mt-2 font-bold text-[15px] ${a.lead}`}>{b.lead}</p>
                  <p className="mt-5 text-slate text-sm leading-[1.95]">{b.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {b.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* 商社機能 */}
        <Reveal as="article" className="mt-5 relative rounded-3xl overflow-hidden p-8 md:p-12 glow-sky card">
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(700px_220px_at_85%_0%,rgba(14,165,233,.12),transparent_70%)]" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="px-3 py-1 rounded-full text-[11px] tracking-widest text-sky-deep bg-sky/10 border border-sky/20 font-sans">
                TRADING BUSINESS
              </span>
              <h3 className="mt-5 font-jp font-black text-2xl md:text-3xl text-ink">{TRADING.lead}</h3>
              <p className="mt-4 text-slate text-sm md:text-[15px] leading-[1.95] max-w-2xl">{TRADING.body}</p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="tradeflow flex items-center gap-2 font-sans text-xs">
                {TRADING.flow.map((f, i) => (
                  <span key={f} className="flex items-center gap-2">
                    {i === TRADING.flow.length - 1 ? (
                      <span className="px-3 py-2 rounded-lg btn-primary" style={{ animationDelay: `${i}s` }}>
                        {f}
                      </span>
                    ) : (
                      <span className="tf-step px-3 py-2 rounded-lg bg-white" style={{ animationDelay: `${i}s` }}>
                        {f}
                      </span>
                    )}
                    {i < TRADING.flow.length - 1 && (
                      <span className="tf-arrow" style={{ animationDelay: `${i + 0.5}s` }}>
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* グループ連携（リブメーカーズグループ各社） */}
        <Reveal className="mt-14">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-7">
            <div>
              <p className="eyebrow font-sans text-[11px] text-sky-deep mb-3">GROUP NETWORK</p>
              <h3 className="font-jp font-black text-ink text-2xl md:text-3xl">グループ連携で、商材の幅を広げる。</h3>
            </div>
            <p className="text-muted text-sm max-w-md">
              1社では揃わない品揃えを、グループ横断の調達で。食品・水産から包装・生活用品まで、発注も納品も一本にまとめます。
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {GROUP_PARTNERS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                className="card rounded-2xl p-6 lift group/card block"
                {...(p.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className="flex items-start justify-between">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-sky/10 border border-sky/20 text-sky-deep font-jp font-black">
                    {p.initial}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-muted group-hover/card:text-sky-deep transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </div>
                <p className="font-jp font-bold text-ink mt-5">{p.name}</p>
                <p className="text-xs text-muted mt-1.5 leading-relaxed">{p.field}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* 取扱商材マーキー */}
      <Reveal className="mt-14 marquee-mask overflow-hidden" delay={1}>
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...MATERIALS, ...MATERIALS].map((m, i) => (
            <span key={i} className="flex items-center text-lg md:text-2xl font-jp font-bold text-ink/30">
              <span className="px-7">{m}</span>
              <span className="text-sky/50">◆</span>
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
