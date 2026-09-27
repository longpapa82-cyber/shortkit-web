// FAQ — 불안 해소. 앱·약관과 일관된 정직한 카피(AI 한계·해지 방법 명시).
import { useReveal } from '../hooks/useReveal';
import styles from './FAQ.module.css';

const QA = [
  {
    q: '무료로 쓸 수 있나요?',
    a: '네, 하루 3회까지 무료로 요약할 수 있어요. 광고를 보면 추가로 요약할 수도 있어요. 더 많이 쓰고 싶다면 Pro를 이용하세요.',
  },
  {
    q: '어떤 영상을 요약할 수 있나요?',
    a: '자막이 있는 영상은 물론, 자막이 없어도 음성을 인식해 요약해요. 레시피·운동·리뷰·강의 등 대부분의 유튜브 영상에 쓸 수 있어요.',
  },
  {
    q: '요약이 항상 정확한가요?',
    a: 'AI가 자동으로 생성하기 때문에 원본과 차이가 있을 수 있어요. 중요한 내용은 원본 영상으로 한 번 더 확인하시길 권해요.',
  },
  {
    q: 'Pro는 어떻게 해지하나요?',
    a: '스토어(Google Play / App Store) 계정의 구독 관리에서 언제든 해지할 수 있어요. 3일 무료 체험 중 해지하면 요금이 청구되지 않아요.',
  },
  {
    q: '계정을 삭제하고 싶어요.',
    a: '앱 설정 화면 맨 아래 "회원 탈퇴"에서 삭제할 수 있어요. 앱에 접근할 수 없다면 계정 삭제 안내 페이지를 참고하세요.',
  },
];

export function FAQ() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`reveal ${styles.section}`} aria-labelledby="faq-title">
      {/* 상·하단 경계 크로스페이드 — Pricing/Footer와의 평면 경계를 녹임 */}
      <span className="sk-edge sk-edge-top" style={{ ['--edge-bg' as string]: 'var(--color-surface)' }} aria-hidden="true" />
      <span className="sk-edge sk-edge-bottom" style={{ ['--edge-bg' as string]: '#F0FAF5' }} aria-hidden="true" />
      <div className="container">
        <h2 id="faq-title" className={styles.title}>자주 묻는 질문</h2>
        <div className={`${styles.list} stagger`}>
          {QA.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary className={styles.q}>{item.q}</summary>
              <p className={styles.a}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
