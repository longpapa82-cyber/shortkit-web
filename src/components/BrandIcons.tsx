// 앱 BrandIcons.tsx 이식 — 카테고리·특장점 SVG 아이콘(이모지 대체, 앱-웹 일치).
// 48 그리드, 2톤 + 화이트 하이라이트.

interface P { size?: number }
const S = ({ size = 40, children }: P & { children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">{children}</svg>
);

/** 프라이팬+계란(레시피). */
export const IconPan = ({ size }: P) => (
  <S size={size}>
    <circle cx={20} cy={27} r={14} fill="#FF9F43" />
    <circle cx={20} cy={27} r={10} fill="#FFE3C2" />
    <circle cx={20} cy={27} r={6.5} fill="#fff" />
    <circle cx={20} cy={27} r={3.2} fill="#FFC800" />
    <rect x={32} y={24.4} width={13} height={5.2} rx={2.6} fill="#E5872F" />
    <circle cx={12} cy={19} r={2.4} fill="#fff" opacity={0.55} />
  </S>
);

/** 덤벨(운동). */
export const IconDumbbell = ({ size }: P) => (
  <S size={size}>
    <rect x={15} y={21.8} width={18} height={4.4} rx={2.2} fill="#27AE7F" />
    <rect x={9} y={15} width={7} height={18} rx={3.4} fill="#2ECC8F" />
    <rect x={32} y={15} width={7} height={18} rx={3.4} fill="#2ECC8F" />
    <rect x={4} y={19} width={4.4} height={10} rx={2.2} fill="#27AE7F" />
    <rect x={39.6} y={19} width={4.4} height={10} rx={2.2} fill="#27AE7F" />
    <circle cx={12} cy={18.4} r={1.8} fill="#fff" opacity={0.55} />
  </S>
);

/** 폰+별(리뷰). */
export const IconPhoneStar = ({ size }: P) => (
  <S size={size}>
    <rect x={13} y={6} width={21} height={35} rx={5.5} fill="#4E9BFF" />
    <rect x={16.2} y={10.6} width={14.6} height={21} rx={2.6} fill="#DCEBFF" />
    <circle cx={35} cy={34} r={8.6} fill="#FFC800" />
    <path d="M35 28.6l1.7 3.1 3.1 1.7-3.1 1.7-1.7 3.1-1.7-3.1-3.1-1.7 3.1-1.7 1.7-3.1Z" fill="#fff" />
  </S>
);

/** 전구(지식). */
export const IconBulb = ({ size }: P) => (
  <S size={size}>
    <circle cx={24} cy={19} r={12} fill="#FFC24B" />
    <path d="M19 29h10v4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4Z" fill="#8B95A1" />
    <rect x={20.4} y={36.6} width={7.2} height={3.2} rx={1.6} fill="#6E7987" />
    <circle cx={18.6} cy={12.4} r={2.2} fill="#fff" opacity={0.6} />
  </S>
);

/** 불꽃(스트릭·아낀 시간). */
export const IconFlame = ({ size }: P) => (
  <S size={size}>
    <path d="M24 4C29 12 38 16 38 27a14 14 0 1 1-28 0C10 18 19 12 24 4Z" fill="#FF8A3D" />
    <path d="M24 17c3 4 8 6 8 11a8 8 0 1 1-16 0c0-5 5-7 8-11Z" fill="#FFC24B" />
  </S>
);

/** 선물(보관함·리워드). */
export const IconGift = ({ size }: P) => (
  <S size={size}>
    <rect x={9} y={19} width={30} height={21} rx={4} fill="#7C5CFF" />
    <rect x={7} y={12.6} width={34} height={8.4} rx={3.4} fill="#9B7CFF" />
    <rect x={21.4} y={12.6} width={5.2} height={27.4} fill="#FFC800" />
    <circle cx={19.4} cy={9.6} r={3.6} fill="#FFC800" />
    <circle cx={28.6} cy={9.6} r={3.6} fill="#FFC800" />
  </S>
);

/** 번개(빠름·즉시). */
export const IconBolt = ({ size }: P) => (
  <S size={size}>
    <circle cx={24} cy={24} r={20} fill="#E8F3FF" />
    <path d="M26 8 L14 26 L22 26 L20 40 L34 20 L25 20 Z" fill="#3182F6" />
  </S>
);

/** 링크(붙여넣기). */
export const IconLink = ({ size }: P) => (
  <S size={size}>
    <circle cx={24} cy={24} r={20} fill="#E8F3FF" />
    <path d="M20 28 L28 20 M19 22 A5 5 0 0 0 19 30 L22 33 M29 26 A5 5 0 0 1 29 18 L26 15"
      stroke="#3182F6" strokeWidth={2.8} strokeLinecap="round" fill="none" />
  </S>
);
