"use client";

import { useEffect, useState } from "react";

type Mote = { left: string; bottom: string; size: number; dur: number; delay: number };

/** ヒーローに舞う陽光のチリ。クライアントでのみ生成（ハイドレーション差異回避）。 */
export default function Motes({ count = 14 }: { count?: number }) {
  const [motes, setMotes] = useState<Mote[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setMotes(
      Array.from({ length: count }, () => ({
        left: `${Math.random() * 100}%`,
        bottom: `${Math.random() * 40}%`,
        size: 3 + Math.random() * 5,
        dur: 6 + Math.random() * 7,
        delay: -Math.random() * 10,
      }))
    );
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {motes.map((m, i) => (
        <span
          key={i}
          className="mote"
          style={{
            left: m.left,
            bottom: m.bottom,
            width: m.size,
            height: m.size,
            animationDuration: `${m.dur}s`,
            animationDelay: `${m.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
