import type {
  Gender,
  AgeGroup,
  CountryCode,
  Job,
  DeskStyle,
  BloodType,
  Mbti,
} from '@/types';
import type { DeskCost } from '@/hooks/useDeskMutation';

export const GENDER: { [K: string]: Gender } = {
  MALE: 'M',
  FEMALE: 'F',
  UNKNOWN: 'U',
} as const;

export const AGE_GROUP: { [K: string]: AgeGroup } = {
  '20-': '20-',
  '20-30': '20-30',
  '30-40': '30-40',
  '40-50': '40-50',
  '50-60': '50-60',
} as const;

export const COUNTRY_CODE: { [K: string]: CountryCode } = {
  KR: 'KR',
} as const;

export const JOB: { [K: string]: Job } = {
  DEVELOPER: 'DEVELOPER',
  DESIGNER: 'DESIGNER',
  FREELANCER: 'FREELANCER',
  STUDENT: 'STUDENT',
} as const;

export const DESK_STYLE: { [K: string]: DeskStyle } = {
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

export const BLOOD_TYPE: { [k: string]: BloodType } = {
  A: 'A',
  B: 'B',
  AB: 'AB',
  O: 'O',
} as const;

export const MBTI: { [K: string]: Mbti } = {
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

export const DESK_COST: { [K: string]: DeskCost } = {
  '10-': '10-',
  '10-20': '10-20',
  '20-30': '20-30',
  '30-40': '30-40',
  '40-50': '40-50',
  '50+': '50+',
};
