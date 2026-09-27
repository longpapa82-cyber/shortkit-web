import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 숏킷 홍보 웹 — 정적 빌드.
// base: 배포처에 맞춰 VITE_BASE로 주입.
//  - 커스텀 도메인 or 루트 배포: '/' (기본)
//  - GitHub Pages 서브경로: '/shortKit/'(레포명) — 워크플로우가 자동 주입
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
  },
});
