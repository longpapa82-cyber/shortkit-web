// 앱 재미 요소 웹 이식 — Sticker(위글 배지)·Twinkle(반짝임)·LipButton(3D 눌림)·Confetti.
// 앱 src/components/brand/Accents.tsx·LipButton.tsx와 동일 문법(색·각도·모션).
import type { CSSProperties, ReactNode } from 'react';
import styles from './brand.module.css';

/** 위글 스티커 배지 — 옐로 pill + 갈색 텍스트, deg 기준 흔들림(앱 point 색). */
export function Sticker({ text, deg = 6, style }: { text: string; deg?: number; style?: CSSProperties }) {
  return (
    <span
      className={styles.sticker}
      style={{ ...style, ['--deg' as string]: `${deg}deg` }}
    >
      {text}
    </span>
  );
}

/** 반짝이는 점 — 위치·크기·색·지연 개별. */
export function Twinkle({
  size = 6,
  color = 'var(--color-point)',
  delay = 0,
  style,
}: {
  size?: number;
  color?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  return (
    <span
      className="sk-twinkle"
      aria-hidden="true"
      style={{ width: size, height: size, background: color, animationDelay: `${delay}ms`, ...style }}
    />
  );
}

/** 컨페티 조각 — 색 조각(정적, 여백 장식). */
export function Confetti({
  color,
  size = 10,
  round = false,
  rotate = '0deg',
  style,
}: {
  color: string;
  size?: number;
  round?: boolean;
  rotate?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: color,
        borderRadius: round ? '50%' : 3,
        transform: `rotate(${rotate})`,
        opacity: 0.85,
        ...style,
      }}
    />
  );
}

/** 립버튼 — 아래 그림자 + hover/active 눌림(앱 LipButton 3D). a 또는 button. */
export function LipButton({
  children,
  href,
  onClick,
  variant = 'primary',
  style,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'premium';
  style?: CSSProperties;
}) {
  const cls = `${styles.lip} ${variant === 'premium' ? styles.lipPremium : ''}`;
  if (href) {
    return (
      <a className={cls} href={href} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
