// Hero — 앱 홈 히어로 카드를 웹으로 재현. "긴 영상, 핵심만 30초" + 폰 목업 + 스토어 배지.
import { Gnb } from '../components/Gnb';
import { StoreBadges } from '../components/StoreBadges';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.hero}>
      <Gnb />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            긴 영상, 핵심만 <span className={styles.chip}>30초</span>
          </h1>
          <p className={styles.sub}>
            링크만 붙여넣으면 AI가 대신 봐드려요.<br />
            자막이 없어도 음성까지 읽어 핵심만 정리해요.
          </p>
          <StoreBadges />
          <p className={styles.note}>하루 3회 무료 · Pro는 무제한·광고 없이</p>
        </div>

        {/* 폰 목업 — 앱 히어로 카드 축약 재현 */}
        <div className={styles.phone} aria-hidden="true">
          <div className={styles.phoneScreen}>
            <div className={styles.card}>
              <div className={styles.cardTitleRow}>
                <span className={styles.cardTitle}>긴 영상, 핵심만</span>
                <span className={styles.cardChip}>30초</span>
              </div>
              <p className={styles.cardSub}>유튜브 링크를 붙여넣으면 끝이에요</p>
              <div className={styles.cardInput}>https://youtu.be/...</div>
              <div className={styles.cardCta}>요약하기</div>
            </div>
            <div className={styles.cats}>
              <span className={styles.cat}>🍳 레시피</span>
              <span className={styles.cat}>💪 운동</span>
              <span className={styles.cat}>📱 리뷰</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
