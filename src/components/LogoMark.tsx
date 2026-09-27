// 숏킷 로고마크 — 앱 BrandIcons.LogoMark(play+bolt 하이브리드) 웹 이식.
// 파란 타일 + 흰 재생 삼각형 + 파란 번개 홈. 앱 아이콘과 동일 컨셉(B안).

interface LogoMarkProps {
  size?: number;
}

const PLAY = 'M17.6 11.6 L17.6 36.4 L36.8 24 Z';
const BOLT = 'M24 18.4 L20.8 24 L23.6 24 L22 30 L27.2 23.2 L24.4 23.2 Z';

export function LogoMark({ size = 40 }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="sklg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5BA4FF" />
          <stop offset="1" stopColor="#2272EB" />
        </linearGradient>
      </defs>
      <rect width={48} height={48} rx={14} fill="url(#sklg)" />
      <path d={PLAY} fill="#fff" />
      <path d={BOLT} fill="#2272EB" />
    </svg>
  );
}

// 로고 + 워드마크(앱 BrandLockup 감성).
export function BrandLockup({ size = 32 }: LogoMarkProps) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <LogoMark size={size} />
      <span
        style={{
          fontSize: size * 0.7,
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: 'var(--color-text)',
        }}
      >
        숏킷<span style={{ color: 'var(--color-primary)' }}>.</span>
      </span>
    </span>
  );
}
