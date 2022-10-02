import { useMutation } from 'react-query';
import axios from 'axios';

import config from '@/config';

import type {
  Gender,
  AgeGroup,
  Job,
  DeskStyle,
  BloodType,
  Mbti,
} from '@/types';

const instance = axios.create({ baseURL: config.apiUrl });

export type DeskCost = '10-' | '10-20' | '20-30' | '30-40' | '40-50' | '50+';

export interface DeskStory {
  type: 'TEXT' | 'IMAGE';
  content: string; // 글 또는 이미지 url
}

export interface DeskItem {
  title: string;
  story: string;
  image: string; //image url
  purchaseUrl: string;
}

export interface DeskForm {
  profileImgUrl: string;
  name: string;
  nickname: string;
  email: string;
  roomType: string;
  gender: Gender;
  ageGroup: AgeGroup;
  job: Job;
  deskStyle: DeskStyle;
  bloodType?: BloodType;
  mbti?: Mbti;
  deskPhrase: string;
  deskCost: DeskCost;
  deskStories: DeskStory[];
  items: DeskItem[];
}

export const useDeskMutation = () => {
  const mutation = useMutation((deskForm: DeskForm) =>
    instance.post('/', deskForm)
  );

  return {
    mutation,
  };
};

export default useDeskMutation;
