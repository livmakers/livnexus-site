"use client";

import { useEffect, useState } from "react";
import { COMPANY, NAV } from "@/config/company";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-head shadow-[0_8px_30px_-18px_rgba(11,36,64,0.35)]" : ""
      }`}
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <a href="#top" className="flex items-center leading-none">
            <span>
              <span className="block font-extrabold tracking-wide text-ink text-[15px] md:text-base">
                {COMPANY.name}
              </span>
              <span className="block text-[10px] tracking-[.28em] text-muted font-sans mt-0.5">{COMPANY.nameShort}</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium">
            {NAV.map((n) => (
              <a key={n.href} className="nav-link" href={n.href}>
                {n.label}
              </a>
            ))}
            <a href="#contact" className="ml-1 px-4 py-2 rounded-full btn-primary text-[13px]">
              お問い合わせ
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-lg hairline bg-white/70"
            aria-label="メニューを開く"
          >
            <span className="block w-5 space-y-[5px]">
              <span className="block h-[2px] bg-ink rounded" />
              <span className="block h-[2px] bg-ink rounded" />
              <span className="block h-[2px] bg-ink rounded" />
            </span>
          </button>
        </div>
      </div>

      {/* モバイルドロワー */}
      <div className={`lg:hidden fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/30 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          className={`absolute right-0 top-0 h-full w-[78%] max-w-[320px] bg-white border-l border-line p-7 flex flex-col gap-1 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-[11px] tracking-[.28em] text-muted font-sans">MENU</span>
            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 grid place-items-center rounded-lg hairline text-ink"
              aria-label="メニューを閉じる"
            >
              ✕
            </button>
          </div>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-line text-ink"
            >
              {n.label}
              <span className="block text-[10px] tracking-widest text-muted">{n.jp}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 text-center py-3 rounded-full btn-primary"
          >
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
}
