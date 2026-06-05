import { COMPANY, OFFICERS, OFFICES } from "@/config/company";
import Reveal from "./Reveal";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4">
      <dt className="col-span-1 px-5 py-4 text-muted bg-paper/60">{label}</dt>
      <dd className="col-span-2 md:col-span-3 px-5 py-4 text-slate">{children}</dd>
    </div>
  );
}

export default function Company() {
  return (
    <section id="company" className="relative py-28 md:py-36 bg-white">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal variant="reveal-l" className="lg:col-span-4">
            <p className="eyebrow font-sans text-[11px] text-sky-deep mb-5">COMPANY</p>
            <h2 className="font-jp font-black text-ink text-3xl md:text-[42px] leading-tight">会社情報</h2>
            <p className="mt-6 text-muted text-sm leading-[1.95]">
              2カンパニーの機能を受け継ぎ、グループの成長を担う中核企業です。
            </p>
            <div className="mt-8 card rounded-2xl p-6">
              <p className="font-sans text-xs tracking-widest text-muted">HEAD OFFICE</p>
              <p className="mt-2 text-ink font-semibold leading-relaxed">
                〒{COMPANY.postal}
                <br />
                {COMPANY.address}
              </p>
              <a href={`tel:${COMPANY.tel}`} className="mt-2 inline-block text-sky-deep font-sans font-medium">
                {COMPANY.tel}
              </a>
            </div>
          </Reveal>

          <Reveal variant="reveal-r" className="lg:col-span-8" delay={1}>
            <div className="rounded-2xl card overflow-hidden">
              <dl className="divide-y divide-line text-sm">
                <Row label="会社名">
                  <span className="text-ink font-medium">{COMPANY.name}</span>
                  <span className="text-muted font-sans ml-2 text-xs">{COMPANY.nameEn}</span>
                </Row>
                <Row label="本社所在地">
                  〒{COMPANY.postal} {COMPANY.address}
                </Row>
                <Row label="電話番号">
                  <span className="font-sans">{COMPANY.tel}</span>
                </Row>
                <Row label="設立">{COMPANY.established}</Row>
                <Row label="役員">
                  <span className="leading-loose">
                    {OFFICERS.map((o) => (
                      <span key={o.name} className="block">
                        {o.title}　{o.name}
                      </span>
                    ))}
                  </span>
                </Row>
                <Row label="事業所">
                  <span className="leading-loose">
                    {OFFICES.map((o) => (
                      <span key={o.label} className="block">
                        {o.label}：{o.value}
                      </span>
                    ))}
                  </span>
                </Row>
                <Row label="事業内容">{COMPANY.business}</Row>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
