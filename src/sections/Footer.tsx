// Footer — 마무리 CTA(큰 카피+스토어 배지) + 브랜드 강조 + 사업자·법적 링크.
import { LogoMark } from '../components/LogoMark';
import { StoreBadges } from '../components/StoreBadges';
import { Twinkle } from '../components/brand';
import { BUSINESS_INFO, LEGAL } from '../constants/site';
import styles from './Footer.module.css';

export function Footer() {
  const b = BUSINESS_INFO;
  return (
    <footer className={styles.footer}>
      {/* 별 트윙클(다크 배경 위 은은하게) */}
      <Twinkle size={5} color="#FFC800" delay={0} style={{ top: '14%', left: '10%' }} />
      <Twinkle size={4} color="#8FC2FF" delay={900} style={{ top: '22%', right: '14%' }} />
      <Twinkle size={5} color="#fff" delay={1600} style={{ top: '40%', left: '26%' }} />

      <div className="container">
        {/* 마무리 CTA — 마지막 전환 기회 */}
        <div className={styles.cta}>
          <LogoMark size={56} />
          <h2 className={styles.ctaTitle}>
            긴 영상은 숏킷에게,<br />남는 시간은 당신에게.
          </h2>
          <div className={styles.ctaBadges}>
            <StoreBadges />
          </div>
        </div>

        <div className={styles.top}>
          <div className={styles.brand}>
            <LogoMark size={28} />
            <span className={styles.brandName}>숏킷 · shortKit</span>
          </div>
          <nav className={styles.links}>
            <a href={LEGAL.privacy}>개인정보처리방침</a>
            <a href={LEGAL.terms}>서비스 이용약관</a>
            <a href={LEGAL.accountDeletion}>계정 삭제 안내</a>
          </nav>
        </div>

        <p className={styles.biz}>
          {b.name} · 대표 {b.ceo} · 사업자등록번호 {b.regNo} · {b.mailOrder}
          <br />
          {b.address} · {b.email}
        </p>
        <p className={styles.copy}>© 2026 {b.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
