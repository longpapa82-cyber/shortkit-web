// GNB(글로벌 내비게이션) — 홈·법적 페이지 공통. 로고 클릭 시 홈(/)으로.
// 법적 서브페이지(정적 HTML)에도 동일한 시각의 GNB를 심어 서로 연결(사용자 요청).
import { BrandLockup } from './LogoMark';
import { LEGAL, asset } from '../constants/site';
import styles from './Gnb.module.css';

const HOME = asset('');

export function Gnb() {
  return (
    <div className={styles.sticky}>
      <nav className={styles.gnb} aria-label="주요 메뉴">
        <a href={HOME} className={styles.brand} aria-label="숏킷 홈">
          <BrandLockup size={28} />
        </a>
        <div className={styles.links}>
          <a href={`${HOME}#pricing`}>요금</a>
          <a href={LEGAL.privacy}>개인정보</a>
          <a href={LEGAL.terms}>약관</a>
        </div>
      </nav>
    </div>
  );
}
