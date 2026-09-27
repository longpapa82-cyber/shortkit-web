// Footer — 사업자 정보 + 법적 링크(스토어 심사 요건). 법적 페이지는 정적 HTML.
import { LogoMark } from '../components/LogoMark';
import { BUSINESS_INFO, LEGAL } from '../constants/site';
import styles from './Footer.module.css';

export function Footer() {
  const b = BUSINESS_INFO;
  return (
    <footer className={styles.footer}>
      <div className="container">
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
