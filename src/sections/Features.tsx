// Features — 벤토 그리드(2026 트렌드) + 앱 SVG 아이콘 + hover tilt.
import { useReveal } from '../hooks/useReveal';
import { IconPan, IconPhoneStar, IconBolt, IconGift, IconFlame, IconLink } from '../components/BrandIcons';
import styles from './Features.module.css';

const FEATURES = [
  { Icon: IconPhoneStar, title: '유형별 핵심 정리', desc: '레시피·운동·리뷰·지식 — 영상 종류에 맞춰 정말 필요한 정보만 뽑아 정리해요.', big: true },
  { Icon: IconLink, title: '자막이 없어도 OK', desc: '음성을 인식해 요약. 강의·팟캐스트도.' },
  { Icon: IconBolt, title: '이미 본 영상은 즉시', desc: '요약된 영상은 기다림 없이 바로.' },
  { Icon: IconGift, title: '보관함에 차곡차곡', desc: '검색·유형 필터로 다시 찾기도 쉬워요.' },
  { Icon: IconFlame, title: '아낀 시간이 쌓여요', desc: '매주 아낀 시간과 스트릭을 기록해요.', big: true },
  { Icon: IconPan, title: '원본도 한 번에', desc: '원본 영상·전체 전사도 바로 확인.' },
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
        <div className={styles.bento}>
          {FEATURES.map((f) => (
            <article key={f.title} className={`${styles.card} ${f.big ? styles.big : ''}`}>
              <div className={styles.icon}><f.Icon size={f.big ? 52 : 40} /></div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
