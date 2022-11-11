import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import config from '@/config';

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

const api = axios.create({ baseURL: config.apiHost });

export interface GetAllDeskResponse {
  id: number;
  deskSummary: string;
  userId: number;
  userPicture: string; // url
  deskPicture: string; // url
}

export type GetAllDesksResponse = GetAllDeskResponse[];

// TODO: id 추가
export interface DeskContentResponse {
  id?: number;
  name: string;
  picture?: string; // url
  content?: string;
  contentOrder: number;
}

// TODO: id, 구매 url, 추천 아이템 여부 추가
export interface DeskItemResponse {
  id?: number;
  name: string;
  picture: string; // url
  content: string;
  isFavorite: boolean;
  isRecommended: boolean;
  contentOrder: number;
}

// TODO: user 정보(userId, 닉네임, 직업, 혈액형, mbti, 프로필 이미지), 공간 형태, 컨셉 스타일 추가
// TODO: deskPicture 응답 일원화
export interface GetDeskResponse
  extends Omit<GetAllDeskResponse, 'deskPicture'> {
  picture: string; // url
  deskContents: DeskContentResponse[];
  deskItems: DeskItemResponse[];
  mbti?: Mbti;
  bloodType?: BloodType;
  job: Job;
  nickname: string;
  spaceType: string;
  deskConcept: DeskStyle;
}

// TODO: 응답에 따라 변경
export interface User {
  id: number;
  profileImgUrl: string;
  job?: Job;
  nickname?: string;
  bloodType?: BloodType;
  mbti?: Mbti;
}

// TODO: 응답에 따라 변경
export interface DeskStory {
  id: string | number;
  imgUrl?: string;
  content?: string;
  contentOrder: number;
}

// TODO: 응답에 따라 변경
export interface DeskItem {
  id: string | number;
  imgUrl: string;
  story: string;
  contentOrder: number;
  isFavorite: boolean;
  isRecommended: boolean;
}

export interface DeskPreview {
  id: number;
  title: string;
  thumbnailImgUrl: string;
  user: User;
}

// TODO: 응답에 따라 변경
export interface Desk extends Omit<DeskPreview, 'title'> {
  user: Required<Pick<User, 'job' | 'nickname'>> & User;
  deskStories: DeskStory[];
  deskItems: DeskItem[];
  deskSummary: string;
  roomType: string;
  deskStyle: DeskStyle;
}

// TODO: drived type으로 리팩토링 필요
export interface CreateDeskData {
  profileImageUrl: string;
  name: string;
  nickname: string;
  email: string;
  roomType: string;
  gender: Gender;
  ageGroup: AgeGroup;
  country: CountryCode;
  job: Job;
  deskConcept: DeskStyle;
  bloodType?: BloodType;
  mbti?: Mbti;
  deskSummary: string;
  cost: DeskCost;
  deskStory: {
    type: 'TEXT' | 'IMAGE';
    text: string;
    imageUrl: string;
  }[];
  deskItem: {
    name: string;
    imageUrl: string;
    story: string;
    url?: string;
    isFavorite: boolean;
    isRecommended: boolean;
  }[];
}

const convertGetAllDesksResponse = (
  data: GetAllDesksResponse
): DeskPreview[] => {
  const result: DeskPreview[] = data.map((desk) => {
    const { userPicture, deskPicture, userId, deskSummary, ...rest } = desk;

    const user = {
      id: userId,
      profileImgUrl: userPicture,
    };

    return {
      ...rest,
      thumbnailImgUrl: deskPicture,
      user,
      title: deskSummary,
    };
  });

  return result;
};

const convertDeskContentResponse = (
  deskContent: DeskContentResponse
): DeskStory => {
  const { picture: imgUrl, id = uuidv4(), ...rest } = deskContent;

  const result: DeskStory = {
    id,
    imgUrl,
    ...rest,
  };

  return result;
};

const convertDeskItemResponse = (
  deskItemResponse: DeskItemResponse
): DeskItem => {
  const {
    picture: imgUrl,
    content: story,
    id = uuidv4(),
    ...rest
  } = deskItemResponse;

  return {
    id,
    imgUrl,
    story,
    ...rest,
  };
};

const convertGetDeskResponse = (data: GetDeskResponse): Desk => {
  const {
    picture,
    deskContents,
    deskItems: deskItemsResponse,
    userId,
    userPicture,
    job,
    bloodType,
    mbti,
    nickname,
    spaceType: roomType,
    deskConcept: deskStyle,
    ...rest
  } = data;

  // dummy user
  const user = {
    id: userId,
    profileImgUrl: userPicture,
    job,
    bloodType,
    mbti,
    nickname,
  };
  const deskStories = deskContents.map((deskContent) =>
    convertDeskContentResponse(deskContent)
  );
  const deskItems = deskItemsResponse.map((deskItem) =>
    convertDeskItemResponse(deskItem)
  );

  const result: Desk = {
    thumbnailImgUrl: picture,
    user,
    deskStories,
    deskItems,
    roomType,
    deskStyle,
    ...rest,
  };

  return result;
};

const convertCreateDeskForm = (data: CreateDeskData) => {
  const {
    profileImageUrl,
    gender,
    country: countryCode,
    deskStory,
    deskItem,
    roomType,
    ...rest
  } = data;

  const genderMap = {
    M: 'MALE',
    F: 'FEMALE',
    U: 'UNKNOWN',
  };
  const _gender = genderMap[gender];

  const deskContents = deskStory.map((story) => {
    const { type, text, imageUrl } = story;

    const typeMap = {
      TEXT: 'deskDescription',
      IMAGE: 'deskPicture',
    };
    const _type = typeMap[type];
    const value = type === 'TEXT' ? text : imageUrl;

    const data = { type: _type, value };

    return data;
  });

  const deskItems = deskItem.map((item) => {
    const { imageUrl, story, ...rest } = item;

    const data = {
      picture: imageUrl,
      content: story,
      ...rest,
    };

    return data;
  });

  const formData = {
    profileImgUrl: profileImageUrl,
    gender: _gender,
    countryCode,
    deskContents,
    deskItems,
    spaceType: roomType,
    ...rest,
  };

  return formData;
};

export const Desk = {
  getAll: async () => {
    const res = await api.get<GetAllDesksResponse>('/api/v1/posts');

    const { data: rawData } = res;

    const data = convertGetAllDesksResponse(rawData);

    return data;
  },

  get: async (id: number) => {
    const res = await api.get(`/api/v1/posts/${id}`);

    const { data: rawData } = res;

    console.log(rawData);

    const data = convertGetDeskResponse(rawData);

    return data;
  },

  create: async (data: CreateDeskData) => {
    const _data = convertCreateDeskForm(data);

    console.log(_data);
    const res = await api.post('/api/v1/posts', _data);

    console.log(res);
  },
};

export default Desk;
