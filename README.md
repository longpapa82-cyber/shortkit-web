# 숏킷(shortKit) 홍보 웹

RN 앱과 독립된 Vite + React + TypeScript 정적 사이트. 랜딩 + 법적 페이지(개인정보·약관·계정삭제)를 한 도메인에서 제공한다.

## 로컬 개발

```bash
cd web
npm install
npm run dev        # 개발 서버
npm run build      # 정적 빌드 → dist/
npm run preview    # 빌드 결과 미리보기
npm run typecheck  # 타입 검사
```

## 구조

```
web/
├── index.html            # SEO 메타·OG·파비콘·Pretendard
├── src/
│   ├── App.tsx           # 섹션 조립
│   ├── sections/         # Hero·HowItWorks·Features·AppShowcase·Pricing·FAQ·Footer
│   ├── components/       # Gnb·LogoMark·StoreBadges
│   ├── constants/site.ts # 스토어 URL·사업자정보·가격·법적경로·asset() 헬퍼
│   ├── hooks/useReveal.ts# 스크롤 등장(IntersectionObserver)
│   └── styles/           # tokens.css(앱 색 이식)·global.css
└── public/
    ├── favicon.svg       # 브라우저 탭 아이콘
    ├── og-image.png      # 1200×630 공유 미리보기
    ├── shots/            # 실기기 스크린샷(WebP)
    └── legal/            # 개인정보·약관·계정삭제 HTML(앱 legal.ts와 동일 소스)
```

## 배포 (GitHub Pages)

`.github/workflows/deploy-web.yml`이 자동 배포한다.

1. GitHub 레포에 push (web/ 변경 시 트리거)
2. 레포 **Settings → Pages → Source = "GitHub Actions"** 설정
3. main 브랜치 push → 자동 빌드·게시

### base 경로 (중요)
- **서브경로 배포**(`user.github.io/레포명/`): 워크플로우가 `VITE_BASE=/레포명/`을 자동 주입. asset() 헬퍼가 모든 자산·링크에 base를 붙여 정상 동작.
- **커스텀 도메인 or user.github.io 루트**: 워크플로우의 `VITE_BASE` env 줄을 제거(또는 `/`로) 하면 됨.

### 배포 후 반드시 할 것
1. **OG 절대 URL**: 카카오톡·슬랙 공유 미리보기는 절대 URL을 요구. 배포 도메인 확정 후 `index.html`의 `og:image`를 `https://도메인/og-image.png`로 교체.
2. **스토어 URL 주입**: 앱 출시 후 `src/constants/site.ts`의 `PLAY_STORE_URL`·`APP_STORE_URL` 채우고 `IS_LAUNCHED = true`.
3. **스토어 심사 URL 등록**: 이 사이트의 `/legal/privacy-policy.html`·`/legal/account-deletion.html`을 Play Console/App Store Connect 및 데이터안전 폼에 등록(BL-3/BL-8 해결).

## 단일 소스 원칙
법적 페이지(`public/legal/*.html`)는 앱 `src/config/legal.ts`와 내용이 동일해야 한다. legal.ts 변경 시 `docs/legal/`과 `web/public/legal/` 양쪽을 함께 갱신할 것.

## 성능 예산
JS < 150kb, CSS < 30kb (gzip). 현재 JS ~51kb / CSS ~3.4kb. 무거운 애니메이션 라이브러리 없이 CSS + IntersectionObserver만 사용.
