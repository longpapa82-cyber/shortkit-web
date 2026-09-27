// 숫자 카운트업 — 마운트 시 0→target을 rAF로 이징 카운트(앱 TimeSavedCounter 감성).
// reduced-motion이면 즉시 최종값(접근성 폴백).
import { useEffect, useState } from 'react';

export function useCountUp(target: number, durationMs = 900, delayMs = 300): number {
  // 초기값 = target: JS 미실행(크롤러·초기 페인트)에도 최종 숫자가 보이게(SEO·폴백).
  // 애니메이션은 effect에서 0으로 되감아 재생.
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / durationMs);
      // ease-out-cubic — 끝에서 감속(체감 자연스러움).
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delayMs);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [target, durationMs, delayMs]);

  return value;
}
