// 사이트 상수 — 스토어 URL·사업자 정보.
// 사업자 정보는 앱 legal.ts와 동일(단일 소스: 에이아이소프트).

// iOS 출시 완료(App Store, 2026-10-03). Apple ID 6816935944 / 번들 com.shortkit.app.
export const APP_STORE_URL = 'https://apps.apple.com/kr/app/id6816935944';
// Android 앱 프로덕션 출시됨(2026-11-16, versionCode 9). 공개 Play URL 전파 확인 후 주입:
// 'https://play.google.com/store/apps/details?id=com.shortkit.app'
// 🔴 전파 전 빈 문자열 유지 — 배지가 깨진 링크로 노출되지 않게(ANDROID_LAUNCHED와 함께 전환).
export const PLAY_STORE_URL = '';

// 플랫폼별 출시 상태 — 배지 활성(링크)/준비중 분기에 사용.
export const IOS_LAUNCHED = true; // App Store 출시됨
// 🔴 앱은 출시됐으나 공개 Play URL 전파 확인 전까지 false 유지(배지 "준비중").
//    전파 확인 시 true + 위 PLAY_STORE_URL 주입 → Google Play 배지 자동 활성화(2단계).
export const ANDROID_LAUNCHED = false;

export const BUSINESS_INFO = {
  name: '에이아이소프트',
  ceo: '박훈재',
  address: '경기도 안양시 동안구 관악대로 339번길 72, 302호',
  regNo: '411-18-92743',
  mailOrder: '통신판매업 신고 면제 대상',
  email: 'longpapa82@gmail.com',
} as const;

export const APP = {
  name: '숏킷',
  nameEn: 'shortKit',
  tagline: '긴 영상, 핵심만 30초',
  package: 'com.shortkit.app',
} as const;

// 요금(표시용) — App Store·Google Play 동일가(둘 다 ₩4,400/월·₩33,000/연, 2026-11 확인).
// 실제 결제가는 앱 내 스토어 표시가 우선.
export const PRICING = {
  monthly: '₩4,400',
  yearly: '₩33,000',
  yearlyPerMonth: '₩2,750', // 33,000 ÷ 12
  trialDays: 3,
  freeDaily: 3,
} as const;

// 배포 base(루트 '/' 또는 GitHub Pages 서브경로 '/shortKit/') 접두.
// public 자산·정적 HTML은 Vite가 코드 내 문자열은 rewrite하지 않으므로 직접 붙인다.
const BASE = import.meta.env.BASE_URL; // 예: '/' or '/shortKit/'
export const asset = (p: string): string => `${BASE}${p.replace(/^\//, '')}`;

// 법적 페이지(정적 HTML — web/public/legal, 단일 소스 = 앱 legal.ts)
export const LEGAL = {
  privacy: asset('legal/privacy-policy.html'),
  terms: asset('legal/terms.html'),
  accountDeletion: asset('legal/account-deletion.html'),
} as const;
