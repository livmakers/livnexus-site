"use client";

import { useEffect, useRef } from "react";

/**
 * ヒーロー背景の「商流ネットワーク」アニメーション（昼テーマ）。
 * 青いルート上を、荷（パルス）が流れていく。結節点（NEXUS）を体現。
 * 画面外・タブ非表示では停止。prefers-reduced-motion では静止描画。
 */
export default function NetworkCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const COLORS = ["rgba(14,165,233,", "rgba(37,99,235,", "rgba(13,148,136,"];

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let nodes: { x: number; y: number; vx: number; vy: number; r: number; c: string }[] = [];
    let pulses: { a: number; b: number; t: number; sp: number }[] = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(26, Math.min(64, Math.floor((w * h) / 24000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.7,
        c: COLORS[(Math.random() * COLORS.length) | 0],
      }));
      pulses = Array.from({ length: 7 }, () => ({
        a: (Math.random() * nodes.length) | 0,
        b: (Math.random() * nodes.length) | 0,
        t: Math.random(),
        sp: 0.0035 + Math.random() * 0.004,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const d = Math.hypot(dx, dy);
          if (d < 140) {
            const a = (1 - d / 140) * 0.32;
            ctx.strokeStyle = `rgba(37,99,235,${a.toFixed(3)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
        const mdx = n.x - mouse.x;
        const mdy = n.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 175) {
          const a = (1 - md / 175) * 0.55;
          ctx.strokeStyle = `rgba(14,165,233,${a.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          n.x -= mdx * 0.004;
          n.y -= mdy * 0.004;
        }
      }
      // 移動する荷
      for (const p of pulses) {
        const A = nodes[p.a];
        const B = nodes[p.b];
        if (!A || !B) {
          p.a = (Math.random() * nodes.length) | 0;
          p.b = (Math.random() * nodes.length) | 0;
          continue;
        }
        p.t += p.sp;
        if (p.t >= 1) {
          p.t = 0;
          p.a = p.b;
          p.b = (Math.random() * nodes.length) | 0;
        }
        const x = A.x + (B.x - A.x) * p.t;
        const y = A.y + (B.y - A.y) * p.t;
        ctx.beginPath();
        ctx.fillStyle = "rgba(245,158,11,0.85)";
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "rgba(245,158,11,0.18)";
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fill();
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = n.c + "0.9)";
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = n.c + "0.10)";
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      if (running) raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (!running && !reduce) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    if (reduce) step();
    else start();

    // 画面外・タブ非表示では停止
    const vio = new IntersectionObserver(
      (ents) => ents.forEach((e) => (e.isIntersecting ? start() : stop())),
      { threshold: 0 }
    );
    vio.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    const onResize = () => {
      stop();
      resize();
      if (!reduce) start();
    };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("resize", onResize);
    if (!reduce) {
      window.addEventListener("mousemove", onMove);
      canvas.addEventListener("mouseleave", onLeave);
    }
    return () => {
      stop();
      vio.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
