import type {
  Gender,
  AgeGroup,
  CountryCode,
  Job,
  DeskStyle,
  BloodType,
  Mbti,
  DeskCost,
} from '@/types';

type GenderKey = 'MALE' | 'FEMALE' | 'UNKNOWN';
export const GENDER: { [K in GenderKey]: Gender } = {
  MALE: 'M',
  FEMALE: 'F',
  UNKNOWN: 'U',
} as const;

export const AGE_GROUP: AgeGroup[] = [20, 30, 40, 50];

export const COUNTRY_CODE: { [K in CountryCode]: CountryCode } = {
  KR: 'KR',
} as const;

export const JOB: { [K in Job]: Job } = {
  DEVELOPER: 'DEVELOPER',
  DESIGNER: 'DESIGNER',
  FREELANCER: 'FREELANCER',
  STUDENT: 'STUDENT',
} as const;

export const DESK_STYLE: { [K in DeskStyle]: DeskStyle } = {
  NATURAL: 'NATURAL',
  MODERN: 'MODERN',
  NORTH_EUROPE: 'NORTH_EUROPE',
  VINTAGE: 'VINTAGE',
  MINIMAL: 'MINIMAL',
  LOVELY: 'LOVELY',
  CLASSIC: 'CLASSIC',
  FRENCH: 'FRENCH',
  INDUSTRIAL: 'INDUSTRIAL',
  KOREAN: 'KOREAN',
  UNIQUE: 'UNIQUE',
} as const;

export const BLOOD_TYPE: { [K in BloodType]: BloodType } = {
  A: 'A',
  B: 'B',
  AB: 'AB',
  O: 'O',
} as const;

export const MBTI: { [K in Mbti]: Mbti } = {
  INTJ: 'INTJ',
  INTP: 'INTP',
  ENTJ: 'ENTJ',
  ENTP: 'ENTP',
  INFJ: 'INFJ',
  INFP: 'INFP',
  ENFJ: 'ENFJ',
  ENFP: 'ENFP',
  ISTJ: 'ISTJ',
  ISFJ: 'ISFJ',
  ESTJ: 'ESTJ',
  ESFJ: 'ESFJ',
  ISTP: 'ISTP',
  ISFP: 'ISFP',
  ESTP: 'ESTP',
  ESFP: 'ESFP',
};

export const DESK_COST: DeskCost[] = [0, 10, 20, 30, 40, 50];

export const SEO_DEFAULT = {
  title: 'My Desk Project',
  description: '당신의 책상 이야기를 들려주세요.',
  image: '/images/open-graph.png',
};

export const DragTypes = {
  DESK_STORY: 'deskStory',
};
