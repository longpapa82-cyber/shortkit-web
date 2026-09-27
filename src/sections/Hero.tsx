// Hero — 앱 "브랜드 무대" 이식(파란 그라디언트+궤도원+파도) + 진짜 앱 스크린샷 폰목업
// (홈+결과 겹침 tilt) + 옐로 트윙클/스파클 폭발 + 흰 대담 타이포. app onboarding/login 무대 감성.
import { Gnb } from '../components/Gnb';
import { StoreBadges } from '../components/StoreBadges';
import { Sticker, Twinkle } from '../components/brand';
import { useCountUp } from '../hooks/useCountUp';
import { asset } from '../constants/site';
import styles from './Hero.module.css';

export function Hero() {
  // '30초' 브랜드 숫자 카운트업(로드 시 1회, reduced-motion은 즉시 30).
  const sec = useCountUp(30, 900, 400);
  return (
    <header className={styles.hero}>
      {/* 파란 브랜드 무대 배경(그라디언트 + 광원 + 궤도 + 하단 파도) — 앱 Stage 강화 이식 */}
      <svg className={styles.stage} viewBox="0 0 390 640" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="heroStage" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5BA6FF" />
            <stop offset="0.5" stopColor="#3182F6" />
            <stop offset="1" stopColor="#1E63D8" />
          </linearGradient>
          {/* 부드러운 광원(radial glow) */}
          <radialGradient id="heroGlow1" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#8FC2FF" stopOpacity="0.55" />
            <stop offset="1" stopColor="#8FC2FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#2461D6" stopOpacity="0.5" />
            <stop offset="1" stopColor="#2461D6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="390" height="640" fill="url(#heroStage)" />
        {/* 광원 blob — 깊이감(App Showcase 패턴과 통일) + 20s 드리프트(무대가 숨쉼) */}
        <ellipse className={styles.glowA} cx="70" cy="130" rx="210" ry="180" fill="url(#heroGlow1)" />
        <ellipse className={styles.glowB} cx="340" cy="440" rx="240" ry="210" fill="url(#heroGlow2)" />
        {/* 우상단 큰 궤도 링(App Showcase 스타일) — 이중 링 + 초저속 공전(AiSoft cosmosOrbit 이식) */}
        <circle className={styles.ringSlow} cx="378" cy="70" r="170" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" fill="none" />
        <circle className={styles.ringRev} cx="378" cy="70" r="240" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
        {/* 좌하단 보조 링 */}
        <circle className={styles.ringRev} cx="6" cy="500" r="110" stroke="rgba(255,255,255,0.13)" strokeWidth="2.5" fill="none" />
        <circle className={styles.ringSlow} cx="6" cy="500" r="170" stroke="rgba(255,255,255,0.07)" strokeWidth="2" fill="none" />
        {/* 하단 파도(이중 레이어) */}
        <path d="M0 590 Q 98 560 195 586 T 390 582 L390 640 L0 640 Z" fill="#fff" opacity="0.5" />
        <path d="M0 600 Q 98 572 195 596 T 390 592 L390 640 L0 640 Z" fill="var(--color-bg)" />
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
            긴 영상,<br />핵심만 <span className={styles.chip}>{sec}초</span>
          </h1>
          <p className={styles.sub}>
            링크만 붙여넣으면 AI가 대신 봐드려요.<br />
            자막이 없어도 음성까지 읽어 핵심만 정리해요.
          </p>
          {/* 글래스 통계 칩(AiSoft highlight 이식) — 실측 수치만, 백드롭 블러 유리질 */}
          <ul className={styles.stats}>
            <li className={styles.stat}>
              <strong>30초</strong>
              <span>핵심 요약</span>
            </li>
            <li className={styles.stat}>
              <strong>자막 없어도</strong>
              <span>음성 인식 요약</span>
            </li>
            <li className={styles.stat}>
              <strong>3일</strong>
              <span>무료체험</span>
            </li>
          </ul>
          {/* 출시 전이라 '무료로 시작하기'(설치 유도)는 갈 곳이 없어 제거.
              스토어 배지를 주 CTA로 승격(정직한 '준비중' 안내). */}
          <div className={styles.badgesRow}>
            <StoreBadges />
          </div>
          <p className={styles.note}>하루 3회 무료 · Pro는 무제한·광고 없이</p>
        </div>

        {/* 폰 목업 — 진짜 앱 스크린샷(홈 앞 + 결과 뒤 겹침 tilt).
            sk-parallax: 스크롤 따라 스택 전체가 미세 드리프트·회전·접근(내부 정지각과 축분리). */}
        <div className={`${styles.phones} sk-parallax`}>
          <div className={`${styles.phone} ${styles.phoneBack}`}>
            <span className={styles.notch} aria-hidden="true" />
            <img src={asset('shots/result.webp')} alt="숏킷 30초 요약 결과 화면" width={720} height={1498} loading="eager" />
          </div>
          <div className={`${styles.phone} ${styles.phoneFront}`}>
            <span className={styles.notch} aria-hidden="true" />
            <img src={asset('shots/home.webp')} alt="숏킷 홈 화면" width={720} height={1498} loading="eager" />
          </div>
          {/* 스티커 — 뒤 폰(결과 화면) 우상단 모서리에 붙임(붕 뜨지 않게) */}
          <span className={styles.sticker}>
            <Sticker text="14분 → 30초!" deg={7} />
          </span>
        </div>
      </div>
    </header>
  );
}
