import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function About() {
  return (
    <>
      <section id="about" className="relative py-28 md:py-36 bg-white">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal variant="reveal-l" className="lg:col-span-5">
              <p className="eyebrow font-sans text-[11px] text-sky-deep mb-5">ABOUT&nbsp;US</p>
              <h2 className="font-jp font-black text-ink text-3xl md:text-[42px] leading-[1.25]">
                地域の商流を、
                <br />
                <span className="text-grad-sea">次の成長ステージへ。</span>
              </h2>
              <div className="mt-8 flex items-center gap-4">
                <CountUp to={2} className="font-sans text-5xl font-extrabold text-grad text-grad-anim" />
                <span className="text-sm text-muted leading-snug">
                  機能を受け継いだ
                  <br />2 つの中核カンパニー
                </span>
              </div>
            </Reveal>

            <Reveal variant="reveal-r" className="lg:col-span-7" delay={1}>
              <p className="text-slate text-[15px] md:text-base leading-[2]">
                リブネクサス株式会社は、旧三河屋物産と旧ヤマツ水産卸株式会社の機能を受け継ぎ、食品卸・水産卸を中心とした商社機能を担う企業です。
                私たちは、産地・市場・メーカー・販売先・消費者をつなぐ
                <span className="text-ink font-semibold">結節点（NEXUS）</span>
                として、安定供給、調達力、営業力、提案力を磨きながら、地域から全国へ、商いの領域を着実に広げていきます。
              </p>
              <p className="mt-6 text-muted text-[15px] md:text-base leading-[2]">
                さらに、タナカ産業・アートナップ・三河屋などグループ各社との連携を通じて、食品・水産にとどまらない多様な商材を扱う総合商社機能へと進化していきます。M&Aや新規事業展開も成長の選択肢です。
              </p>
              <div className="mt-9 grid sm:grid-cols-3 gap-3">
                <div className="card rounded-2xl p-5 lift">
                  <p className="font-sans text-2xl font-bold text-ink">調達</p>
                  <p className="text-xs text-muted mt-1">産地・市場・メーカー</p>
                </div>
                <div className="card rounded-2xl p-5 lift">
                  <p className="font-sans text-2xl font-bold text-ink">提案</p>
                  <p className="text-xs text-muted mt-1">用途・販売先に最適化</p>
                </div>
                <div className="card rounded-2xl p-5 lift">
                  <p className="font-sans text-2xl font-bold text-ink">流通</p>
                  <p className="text-xs text-muted mt-1">食品 × 水産の二軸</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="flowline rounded-full" aria-hidden="true" />
      </div>
    </>
  );
}
