// 스토어 배지 — 출시 전(IS_LAUNCHED=false)엔 "출시 예정" 상태.
import { PLAY_STORE_URL, APP_STORE_URL, IS_LAUNCHED } from '../constants/site';
import styles from './StoreBadges.module.css';

export function StoreBadges() {
  if (!IS_LAUNCHED) {
    return (
      <div className={styles.wrap}>
        <span className={styles.soon}>🚀 Android 먼저 출시 예정</span>
      </div>
    );
  }
  return (
    <div className={styles.wrap}>
      {PLAY_STORE_URL && (
        <a className={styles.badge} href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
          Google Play
        </a>
      )}
      {APP_STORE_URL && (
        <a className={styles.badge} href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          App Store
        </a>
      )}
    </div>
  );
}
