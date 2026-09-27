// Hero — 앱 "브랜드 무대" 이식(파란 그라디언트+궤도원+파도) + 진짜 앱 스크린샷 폰목업
// (홈+결과 겹침 tilt) + 옐로 트윙클/스파클 폭발 + 흰 대담 타이포. app onboarding/login 무대 감성.
import { Gnb } from '../components/Gnb';
import { StoreBadges } from '../components/StoreBadges';
import { Sticker, Twinkle, LipButton } from '../components/brand';
import { asset } from '../constants/site';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.hero}>
      {/* 파란 브랜드 무대 배경(그라디언트 + 궤도원 + 하단 파도) — 앱 Stage 이식 */}
      <svg className={styles.stage} viewBox="0 0 390 640" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="heroStage" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4E9BFF" />
            <stop offset="0.55" stopColor="#3182F6" />
            <stop offset="1" stopColor="#2272EB" />
          </linearGradient>
        </defs>
        <rect width="390" height="640" fill="url(#heroStage)" />
        <circle cx="360" cy="60" r="150" stroke="rgba(255,255,255,0.16)" strokeWidth="2.5" fill="none" />
        <circle cx="10" cy="470" r="96" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" fill="none" />
        {/* 하단 파도 — 무대→흰 배경 전환 */}
        <path d="M0 596 Q 98 570 195 592 T 390 588 L390 640 L0 640 Z" fill="var(--color-bg)" />
      </svg>

      <div className={styles.top}>
        <Gnb />
      </div>

      {/* 무대 위 트윙클/스파클 폭발(옐로 포인트) */}
      <Twinkle size={10} color="var(--color-point)" delay={0} style={{ top: '20%', left: '14%' }} />
      <Twinkle size={7} color="#fff" delay={500} style={{ top: '15%', right: '30%' }} />
      <Twinkle size={8} color="var(--color-point)" delay={1000} style={{ top: '38%', left: '42%' }} />
      <Twinkle size={6} color="#BBD8FF" delay={1400} style={{ top: '48%', right: '44%' }} />
      <Twinkle size={9} color="#7DE3AE" delay={800} style={{ top: '30%', right: '12%' }} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <div className={styles.brandBadge}>
            <span className={styles.brandLogo}>
              <svg viewBox="0 0 48 48" width="28" height="28" aria-hidden="true">
                <rect width="48" height="48" rx="14" fill="#fff" />
                <path d="M17.6 11.6 L17.6 36.4 L36.8 24 Z" fill="#3182F6" />
                <path d="M24 18.4 L20.8 24 L23.6 24 L22 30 L27.2 23.2 L24.4 23.2 Z" fill="#fff" />
              </svg>
            </span>
            숏킷 · shortKit
          </div>
          <h1 className={styles.title}>
            긴 영상,<br />핵심만 <span className={styles.chip}>30초</span>
          </h1>
          <p className={styles.sub}>
            링크만 붙여넣으면 AI가 대신 봐드려요.<br />
            자막이 없어도 음성까지 읽어 핵심만 정리해요.
          </p>
          <div className={styles.cta}>
            <LipButton href="#pricing">무료로 시작하기</LipButton>
          </div>
          <div className={styles.badgesRow}>
            <StoreBadges />
          </div>
          <p className={styles.note}>하루 3회 무료 · Pro는 무제한·광고 없이</p>
        </div>

        {/* 폰 목업 — 진짜 앱 스크린샷(홈 앞 + 결과 뒤 겹침 tilt) */}
        <div className={styles.phones}>
          <Sticker text="14분 → 30초!" deg={7} style={{ position: 'absolute', top: -10, right: 20, zIndex: 5 }} />
          <div className={`${styles.phone} ${styles.phoneBack}`}>
            <img src={asset('shots/result.webp')} alt="숏킷 30초 요약 결과 화면" width={720} height={1498} loading="eager" />
          </div>
          <div className={`${styles.phone} ${styles.phoneFront} sk-float`}>
            <img src={asset('shots/home.webp')} alt="숏킷 홈 화면" width={720} height={1498} loading="eager" />
          </div>
        </div>
      </div>
    </header>
  );
}
