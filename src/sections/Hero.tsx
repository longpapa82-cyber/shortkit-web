// Hero — 앱 재미 요소 이식(Sticker·Twinkle·LipButton·float 목업) + 대담한 타이포.
import { Gnb } from '../components/Gnb';
import { StoreBadges } from '../components/StoreBadges';
import { Sticker, Twinkle, LipButton } from '../components/brand';
import { IconPan, IconDumbbell, IconPhoneStar } from '../components/BrandIcons';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.hero}>
      <Gnb />

      {/* 배경 트윙클(은은한 반짝임) */}
      <Twinkle size={8} color="var(--color-point)" delay={200} style={{ top: '18%', left: '12%' }} />
      <Twinkle size={6} color="#BBD8FF" delay={900} style={{ top: '30%', right: '18%' }} />
      <Twinkle size={5} color="var(--color-premium)" delay={1500} style={{ bottom: '22%', left: '20%' }} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
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

        {/* 폰 목업 — float 부유 + Sticker 배지 */}
        <div className={styles.phoneWrap}>
          <Sticker text="14분 → 30초!" deg={6} style={{ position: 'absolute', top: 8, right: -6, zIndex: 3 }} />
          <div className={`${styles.phone} sk-float`} aria-hidden="true">
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
                <span className={styles.cat}><IconPan size={20} /> 레시피</span>
                <span className={styles.cat}><IconDumbbell size={20} /> 운동</span>
                <span className={styles.cat}><IconPhoneStar size={20} /> 리뷰</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
