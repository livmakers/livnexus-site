"use client";

import { useState } from "react";
import { COMPANY, CONTACT_SUBJECTS } from "@/config/company";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const company = String(f.get("company") || "");
    const name = String(f.get("name") || "");
    const email = String(f.get("email") || "");
    const tel = String(f.get("tel") || "");
    const subject = String(f.get("subject") || "");
    const message = String(f.get("message") || "");

    const mailSubject = `【お問い合わせ】${subject}${company ? ` / ${company}` : ""} ${name}`;
    const body = [
      `お問い合わせ種別：${subject}`,
      `会社名：${company}`,
      `お名前：${name}`,
      `メールアドレス：${email}`,
      `電話番号：${tel}`,
      "",
      "■お問い合わせ内容",
      message,
    ].join("\n");

    // メールソフトが起動し、送信先（COMPANY.contactEmail）宛に内容が入力されます
    window.location.href = `mailto:${COMPANY.contactEmail}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-paper">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal variant="reveal-l" className="lg:col-span-5">
            <p className="eyebrow font-sans text-[11px] text-sky-deep mb-5">CONTACT</p>
            <h2 className="font-jp font-black text-ink text-3xl md:text-[42px] leading-tight">お問い合わせ</h2>
            <p className="mt-6 text-slate text-sm leading-[1.95]">
              食品卸・水産卸・取扱商品、事業提携やM&A・協業のご相談まで、お気軽にお問い合わせください。担当者より折り返しご連絡いたします。
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate">
                <span className="w-9 h-9 grid place-items-center rounded-lg hairline bg-white text-sky-deep" aria-hidden="true">
                  ☎
                </span>
                <a href={`tel:${COMPANY.tel}`} className="font-sans">
                  {COMPANY.tel}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate">
                <span className="w-9 h-9 grid place-items-center rounded-lg hairline bg-white text-sky-deep" aria-hidden="true">
                  ⌂
                </span>
                〒{COMPANY.postal} {COMPANY.address}
              </div>
            </div>
          </Reveal>

          <Reveal variant="reveal-r" className="lg:col-span-7" delay={1}>
            <form onSubmit={onSubmit} className="card rounded-2xl p-7 md:p-9 grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label className="lbl">会社名</label>
                <input className="inp" type="text" name="company" placeholder="株式会社○○" />
              </div>
              <div className="sm:col-span-1">
                <label className="lbl">
                  お名前 <span className="req">必須</span>
                </label>
                <input className="inp" type="text" name="name" required placeholder="山田 太郎" />
              </div>
              <div className="sm:col-span-1">
                <label className="lbl">
                  メールアドレス <span className="req">必須</span>
                </label>
                <input className="inp" type="email" name="email" required placeholder="name@example.com" />
              </div>
              <div className="sm:col-span-1">
                <label className="lbl">電話番号</label>
                <input className="inp" type="tel" name="tel" placeholder="000-0000-0000" />
              </div>
              <div className="sm:col-span-2">
                <label className="lbl">お問い合わせ種別</label>
                <select className="inp" name="subject">
                  {CONTACT_SUBJECTS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="lbl">
                  お問い合わせ内容 <span className="req">必須</span>
                </label>
                <textarea
                  className="inp min-h-[130px] resize-y"
                  name="message"
                  required
                  placeholder="お問い合わせ内容をご記入ください。"
                />
              </div>
              <div className="sm:col-span-2 -mt-1">
                <p className="text-[11px] text-muted leading-relaxed">
                  ご入力いただいた個人情報は、お問い合わせへの対応の目的にのみ利用します。
                </p>
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                <p className={`text-xs ${sent ? "text-teal" : "text-muted"}`}>
                  {sent
                    ? "メールソフトを起動しました。内容をご確認のうえ送信してください。担当者より折り返しご連絡いたします。"
                    : "「送信する」を押すとメールソフトが起動し、入力内容が担当者宛に作成されます。"}
                </p>
                <button type="submit" className="px-8 py-3.5 rounded-full btn-primary text-sm">
                  {sent ? "メールを作成しました" : "送信する"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
