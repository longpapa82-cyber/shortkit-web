// 스토어 배지 — 애플/구글 로고 + 스토어명 + 작은 '준비중' 뱃지. 한 줄 배치.
import { PLAY_STORE_URL, APP_STORE_URL, IS_LAUNCHED } from '../constants/site';
import styles from './StoreBadges.module.css';

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M16.5 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.15-2.8.85-3.5.85-.72 0-1.85-.83-3.05-.8-1.57.02-3.02.9-3.83 2.3-1.63 2.83-.42 7 1.17 9.3.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.6-.76 3.02-.76 1.4 0 1.8.76 3.04.73 1.26-.02 2.05-1.14 2.82-2.27.88-1.3 1.25-2.56 1.27-2.63-.03-.01-2.44-.94-2.46-3.72zM14.2 5.9c.64-.78 1.08-1.86.96-2.94-.93.04-2.05.62-2.72 1.4-.6.68-1.12 1.78-.98 2.83 1.04.08 2.1-.53 2.74-1.29z"/>
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
    <path fill="#EA4335" d="M5.3 9.4 3.6 6.5C5.4 3.3 8.9 1.2 12 1.2c2.9 0 5.4 1.1 7.3 2.9l-3.1 3.1C15 6 13.6 5.4 12 5.4c-2.9 0-5.4 1.9-6.7 4z" transform="scale(0.9) translate(1.3,1.3)"/>
    <path fill="#4285F4" d="M23 12.3c0-.8-.07-1.5-.2-2.3H12v4.5h6.2c-.27 1.4-1.08 2.6-2.3 3.4l3.5 2.7c2-1.9 3.6-4.7 3.6-8.3z" transform="scale(0.9) translate(1.3,1.3)"/>
    <path fill="#34A853" d="M12 23c3 0 5.5-1 7.4-2.7l-3.5-2.7c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7l-3.6 2.8C3.9 20.5 7.6 23 12 23z" transform="scale(0.9) translate(1.3,1.3)"/>
    <path fill="#FBBC05" d="M5.6 13.9c-.2-.7-.36-1.4-.36-2.2s.13-1.5.35-2.2L1.9 6.7C1.15 8.2.7 9.9.7 11.7s.45 3.5 1.2 5z" transform="scale(0.9) translate(1.3,1.3)"/>
  </svg>
);

function Badge({ Logo, store, href }: { Logo: () => JSX.Element; store: string; href: string }) {
  const content = (
    <>
      <span className={styles.logo}><Logo /></span>
      <span className={styles.storeCol}>
        <span className={styles.storeName}>{store}</span>
        {!IS_LAUNCHED && <span className={styles.ready}>준비중</span>}
      </span>
    </>
  );
  if (IS_LAUNCHED && href) {
    return <a className={styles.badge} href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  }
  return <span className={`${styles.badge} ${styles.soon}`}>{content}</span>;
}

export function StoreBadges() {
  return (
    <div className={styles.wrap}>
      <Badge Logo={AppleLogo} store="App Store" href={APP_STORE_URL} />
      <Badge Logo={GoogleLogo} store="Google Play" href={PLAY_STORE_URL} />
    </div>
  );
}
