// 사이트 상수 — 스토어 URL·사업자 정보. 출시 후 스토어 URL 주입.
// 사업자 정보는 앱 legal.ts와 동일(단일 소스: 에이아이소프트).

// ⚠️ 출시 전: 스토어 미등록이라 placeholder. 등록 후 실제 URL로 교체.
export const PLAY_STORE_URL = ''; // 예: https://play.google.com/store/apps/details?id=com.shortkit.app
export const APP_STORE_URL = ''; // 예: https://apps.apple.com/kr/app/id...
export const IS_LAUNCHED = false; // true면 스토어 배지 활성, false면 "출시 예정"

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

// 요금(business-model.plan.md 확정, 표시용) — iOS 우선 출시라 iOS(App Store) 정가 기준.
// Android 출시 시 플랫폼별 가격(₩3,900/₩29,000) 병기 재검토. 실제 결제가는 앱 내 스토어 표시가 우선.
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
