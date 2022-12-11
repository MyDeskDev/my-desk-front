export type Gender = 'M' | 'F' | 'U';
export type AgeGroup = 20 | 30 | 40 | 50; // 각 구간의 최소
export type CountryCode = 'KR';
export type Job = 'DEVELOPER' | 'DESIGNER' | 'FREELANCER' | 'STUDENT';
export type DeskStyle =
  | 'NATURAL'
  | 'MODERN'
  | 'NORTH_EUROPE'
  | 'VINTAGE'
  | 'MINIMAL'
  | 'LOVELY'
  | 'CLASSIC'
  | 'FRENCH'
  | 'INDUSTRIAL'
  | 'KOREAN'
  | 'UNIQUE';
export type BloodType = 'A' | 'B' | 'AB' | 'O';
export type Mbti =
  | 'INTJ'
  | 'INTP'
  | 'ENTJ'
  | 'ENTP'
  | 'INFJ'
  | 'INFP'
  | 'ENFJ'
  | 'ENFP'
  | 'ISTJ'
  | 'ISFJ'
  | 'ESTJ'
  | 'ESFJ'
  | 'ISTP'
  | 'ISFP'
  | 'ESTP'
  | 'ESFP';
export type DeskCost = 0 | 10 | 20 | 30 | 40 | 50; // 각 구간의 최소

export interface MetaData {
  title?: string;
  description?: string;
  image?: string;
}
