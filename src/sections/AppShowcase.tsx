// App Showcase — 실기기 스크린샷을 폰 목업에 넣은 갤러리. 앱 디자인을 직접 보여줌.
import { useReveal } from '../hooks/useReveal';
import { Twinkle } from '../components/brand';
import { asset } from '../constants/site';
import styles from './AppShowcase.module.css';

const SHOTS = [
  { src: asset('shots/home.webp'), label: '홈', desc: '링크만 붙여넣으면 바로 요약' },
  { src: asset('shots/result.webp'), label: '30초 요약', desc: '핵심 포인트로 정리된 결과' },
  { src: asset('shots/history.webp'), label: '보관함', desc: '요약이 차곡차곡 쌓여요' },
];

export function AppShowcase() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`reveal ${styles.section}`} aria-labelledby="showcase-title">
      <Twinkle size={9} color="var(--color-point)" delay={0} style={{ top: '14%', left: '16%' }} />
      <Twinkle size={7} color="#fff" delay={600} style={{ top: '22%', right: '20%' }} />
      <Twinkle size={8} color="#7DE3AE" delay={1100} style={{ bottom: '24%', left: '24%' }} />
      <div className="container">
        <h2 id="showcase-title" className={styles.title}>
          직접 보세요, <span className={styles.accent}>이렇게 깔끔해요</span>
        </h2>
        <p className={styles.sub}>누구나 쉽게 쓸 수 있는 밝고 시원한 디자인</p>

        <div className={styles.gallery}>
          {SHOTS.map((s, i) => (
            <figure key={s.src} className={`${styles.item} ${styles[`item${i}`]}`}>
              <div className={styles.phone}>
                <img
                  className={styles.shot}
                  src={s.src}
                  alt={`숏킷 ${s.label} 화면`}
                  width={720}
                  height={1498}
                  loading="lazy"
                />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.capLabel}>{s.label}</span>
                <span className={styles.capDesc}>{s.desc}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
