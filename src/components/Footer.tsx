import { COMPANY, NAV } from "@/config/company";

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white/80">
      <div className="mx-auto max-w-content px-5 md:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div>
              <span className="block font-extrabold text-white text-lg">{COMPANY.name}</span>
              <span className="block text-[10px] tracking-[.28em] text-white/50 font-sans mt-1">{COMPANY.nameEn}</span>
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
              産地、商品、取引先、消費者をつなぎ、新しい商流を創る。食品卸・水産卸を核とした次世代の商社機能。
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-sans text-[11px] tracking-widest text-white/50 mb-4">SITE MAP</p>
            <ul className="space-y-2.5 text-sm text-white/75">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a className="hover:text-sky-soft transition" href={n.href}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-sans text-[11px] tracking-widest text-white/50 mb-4">CONTACT</p>
            <p className="text-sm text-white/75 leading-relaxed">
              〒{COMPANY.postal} {COMPANY.address}
              <br />
              <a href={`tel:${COMPANY.tel}`} className="font-sans hover:text-sky-soft">
                {COMPANY.tel}
              </a>
            </p>
            <a
              href="#contact"
              className="mt-5 inline-block px-5 py-2.5 rounded-full border border-white/20 hover:border-sky-soft hover:text-sky-soft text-xs text-white/80 transition"
            >
              お問い合わせフォーム
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p className="font-sans">{COMPANY.copyright}</p>
          <p>三河屋物産カンパニー ／ ヤマツ水産卸カンパニー</p>
        </div>
      </div>
    </footer>
  );
}
