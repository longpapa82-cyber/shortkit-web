// Pricing — 확정 비즈니스 모델(business-model.plan.md). Free vs Pro + 재미 요소.
import { useReveal } from '../hooks/useReveal';
import { PRICING } from '../constants/site';
import { LipButton, Confetti } from '../components/brand';
import styles from './Pricing.module.css';

export function Pricing() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`reveal ${styles.section}`} id="pricing" aria-labelledby="price-title">
      {/* 컨페티 장식 */}
      <Confetti color="var(--color-point)" rotate="24deg" style={{ top: '12%', left: '8%' }} />
      <Confetti color="var(--color-premium)" size={8} round style={{ top: '20%', right: '10%' }} />
      <Confetti color="var(--color-success)" rotate="-20deg" style={{ bottom: '16%', left: '14%' }} />
      <div className="container">
        <h2 id="price-title" className={styles.title}>
          부담 없이 시작하세요
        </h2>
        <p className={styles.sub}>하루 {PRICING.freeDaily}회는 언제나 무료예요.</p>

        <div className={styles.plans}>
          {/* Free */}
          <div className={styles.card}>
            <div className={styles.planName}>Free</div>
            <div className={styles.price}>₩0</div>
            <ul className={styles.list}>
              <li>하루 {PRICING.freeDaily}회 요약</li>
              <li>유형별 핵심 정리</li>
              <li>보관함 · 아낀 시간 기록</li>
              <li className={styles.muted}>광고 포함 · 광고 보고 +1회</li>
            </ul>
          </div>

          {/* Pro */}
          <div className={`${styles.card} ${styles.pro}`}>
            <div className={styles.badge}>3일 무료 체험</div>
            <div className={styles.planName}>Pro</div>
            <div className={styles.price}>
              {PRICING.monthly}
              <span className={styles.per}> / 월</span>
            </div>
            <div className={styles.yearly}>연간 {PRICING.yearly} (월 약 ₩2,417)</div>
            <ul className={styles.list}>
              <li><b>무제한 요약</b></li>
              <li><b>광고 없이</b> 바로 요약</li>
              <li>유형별 핵심 정리</li>
              <li>보관함 · 아낀 시간 기록</li>
            </ul>
            <div className={styles.proCta}>
              <LipButton href="#" variant="premium">Pro 시작하기</LipButton>
            </div>
            <p className={styles.fine}>{PRICING.trialDays}일 무료 체험 · 언제든 해지 가능</p>
          </div>
        </div>
      </div>
    </section>
  );
}
