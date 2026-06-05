"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** 表示の遅延（stagger）: 1〜4 */
  delay?: 1 | 2 | 3 | 4;
  /** アニメーションの向き */
  variant?: "reveal" | "reveal-l" | "reveal-r";
};

/**
 * スクロールでふわっと表示するラッパー。
 * IntersectionObserver で画面内に入ったら `.in` を付与する。
 * variant で下から / 左から / 右からのスライドインを切り替え。
 */
export default function Reveal({ children, as, className = "", delay, variant = "reveal" }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${variant} ${className}`} {...(delay ? { "data-d": String(delay) } : {})}>
      {children}
    </Tag>
  );
}
