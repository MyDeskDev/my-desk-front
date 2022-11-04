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
  title: string;
  userId: number;
  userPicture: string; // url
  deskPicture: string; // url
}

export type GetAllDesksResponse = GetAllDeskResponse[];

// TODO: id 추가
export interface DeskContentResponse {
  name: string;
  picture?: string; // url
  content?: string;
  contentOrder: number;
}

// TODO: id, 구매 url, 추천 아이템 여부 추가
export interface DeskItemResponse {
  name: string;
  picture: string; // url
  content: string;
  isFavorite: boolean;
  contentOrder: number;
}

// TODO: user 정보(userId, 닉네임, 직업, 혈액형, mbti, 프로필 이미지), 공간 형태, 컨셉 스타일 추가
// TODO: deskPicture 응답 일원화
export interface GetDeskResponse
  extends Omit<GetAllDeskResponse, 'userId' | 'userPicture' | 'deskPicture'> {
  picture: string; // url
  deskContents: DeskContentResponse[];
  deskItems: DeskItemResponse[];
}

// TODO: 응답에 따라 변경
export interface User {
  id: number;
  profileImgUrl: string;
}

// TODO: 응답에 따라 변경
export interface DeskStory {
  id: string;
  imgUrl?: string;
  content?: string;
  contentOrder: number;
}

// TODO: 응답에 따라 변경
export interface DeskItem {
  id: string;
  imgUrl: string;
  content: string;
  contentOrder: number;
  isFavorite: boolean;
}

export interface DeskPreview {
  id: number;
  title: string;
  mainImgUrl: string;
  user: User;
}

// TODO: 응답에 따라 변경
export interface Desk extends DeskPreview {
  user: Required<User>;
  deskStories: DeskStory[];
  deskItems: DeskItem[];
}

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
    isRecommend: boolean;
  }[];
}

const convertGetAllDesksResponse = (
  data: GetAllDesksResponse
): DeskPreview[] => {
  const result: DeskPreview[] = data.map((desk) => {
    const { userPicture, deskPicture, userId, ...rest } = desk;

    const user = {
      id: userId,
      profileImgUrl: userPicture,
    };

    return {
      ...rest,
      mainImgUrl: deskPicture,
      user,
    };
  });

  return result;
};

const convertDeskContentResponse = (
  deskContent: DeskContentResponse
): DeskStory => {
  const { picture: imgUrl, ...rest } = deskContent;

  const id = uuidv4();

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
  const { picture: imgUrl, ...rest } = deskItemResponse;

  const id = uuidv4();

  return {
    id,
    imgUrl,
    ...rest,
  };
};

const convertGetDeskResponse = (data: GetDeskResponse): Desk => {
  const { picture, deskContents, deskItems: deskItemsResponse, ...rest } = data;

  // dummy user
  const user = { id: 0, profileImgUrl: '' };
  const deskStories = deskContents.map((deskContent) =>
    convertDeskContentResponse(deskContent)
  );
  const deskItems = deskItemsResponse.map((deskItem) =>
    convertDeskItemResponse(deskItem)
  );

  const result: Desk = {
    mainImgUrl: picture,
    user,
    deskStories,
    deskItems,
    ...rest,
  };

  return result;
};

const convertCreateDeskForm = (data: CreateDeskData) => {
  const { profileImageUrl, gender, country, deskStory, deskItem, ...rest } =
    data;

  const genderMap = {
    M: 'MALE',
    F: 'FEMALE',
    U: 'UNKNOWN',
  };
  const _gender = genderMap[gender];

  const countryMap = {
    KR: 'KOREA',
  };
  const nationality = countryMap[country];

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
    profileImage: profileImageUrl,
    gender: _gender,
    nationality,
    deskContents,
    deskItems,
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
    const res = await api.get(`/api/v1/post/${id}`);

    const { data: rawData } = res;

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
