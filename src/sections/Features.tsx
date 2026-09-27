// Features — 앱 핵심 특장점. 유형별 요약·음성인식 폴백·캐시·보관함/스트릭.
import { useReveal } from '../hooks/useReveal';
import styles from './Features.module.css';

const FEATURES = [
  {
    emoji: '🎯',
    title: '유형별 핵심 정리',
    desc: '레시피·운동·리뷰·지식 — 영상 종류에 맞춰 정말 필요한 정보만 뽑아 정리해요.',
    tint: 'var(--color-point-soft)',
  },
  {
    emoji: '🎧',
    title: '자막이 없어도 OK',
    desc: '자막이 없는 영상은 음성을 인식해 요약해요. 강의·팟캐스트도 문제없어요.',
    tint: 'var(--color-primary-soft)',
  },
  {
    emoji: '⚡',
    title: '이미 요약된 영상은 즉시',
    desc: '누군가 요약한 영상은 기다림 없이 바로 결과를 보여줘요.',
    tint: 'var(--color-success-soft, #eaf9f1)',
  },
  {
    emoji: '📚',
    title: '보관함에 차곡차곡',
    desc: '요약한 영상은 보관함에 쌓여요. 검색·유형 필터로 다시 찾기도 쉬워요.',
    tint: 'var(--color-premium-soft)',
  },
  {
    emoji: '🔥',
    title: '아낀 시간이 쌓여요',
    desc: '요약으로 아낀 시간이 매주 기록돼요. 스트릭으로 꾸준함도 챙기고요.',
    tint: 'var(--color-streak-soft)',
  },
  {
    emoji: '🎬',
    title: '원본도 한 번에',
    desc: '요약만으론 아쉬울 때, 원본 영상과 전체 전사도 바로 확인할 수 있어요.',
    tint: 'var(--color-bg)',
  },
];

export function Features() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`reveal ${styles.section}`} aria-labelledby="feat-title">
      <div className="container">
        <h2 id="feat-title" className={styles.title}>
          단순 텍스트 변환이 아니에요.<br />
          <span className={styles.accent}>핵심을 이해</span>해서 정리해요.
        </h2>
        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <article key={f.title} className={styles.card} style={{ background: f.tint }}>
              <div className={styles.emoji} aria-hidden="true">{f.emoji}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
