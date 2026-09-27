// How It Works — 앱 DEMO_STEPS("자막 추출→핵심 정리→30초 요약") 3단계.
import { useReveal } from '../hooks/useReveal';
import { IconLink, IconBrain, IconSummary } from '../components/BrandIcons';
import styles from './HowItWorks.module.css';

const STEPS = [
  { n: '1', Icon: IconLink, title: '링크 붙여넣기', desc: '유튜브 영상 링크만 복사해서 붙여넣으면 끝이에요.' },
  { n: '2', Icon: IconBrain, title: 'AI가 분석', desc: '자막을 읽고, 자막이 없으면 음성까지 인식해 내용을 파악해요.' },
  { n: '3', Icon: IconSummary, title: '30초 핵심 요약', desc: '영상이 말하려는 핵심만 30초 분량으로 정리해드려요.' },
];

export function HowItWorks() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`reveal ${styles.section}`} aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title" className={styles.title}>
          이렇게 <span className={styles.accent}>3단계</span>면 끝
        </h2>
        <div className={styles.steps}>
          {STEPS.map((s) => (
            <div key={s.n} className={styles.step}>
              <div className={styles.badge}>{s.n}</div>
              <div className={styles.icon}><s.Icon size={48} /></div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
