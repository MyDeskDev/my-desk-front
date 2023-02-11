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
  profileImgUrl: string; // url
  thumbnailImgUrl: string; // url
  nickname: string;
}

export type GetAllDesksResponse = GetAllDeskResponse[];

// TODO: id 추가, 불필요한 필드 백엔드랑 맞춰서 삭제
export interface DeskContentResponse {
  id?: number;
  picture: string | null;
  content: string | null;
  contentOrder: number;
  isFavorite: null;
  isRecommended: null;
  name: null;
  purchaseLink: null;
}

// TODO: id, 구매 url, 추천 아이템 여부 추가
export interface DeskItemResponse {
  id?: number;
  name: string;
  picture: string; // url
  content: string;
  isFavorite: boolean;
  isRecommended: boolean;
  purchaseLink: string | null;
  contentOrder: number;
}

export interface GetDeskResponse extends GetAllDeskResponse {
  cost: DeskCost;
  job: Job;
  nickname: string;
  age: AgeGroup;
  mbti?: Mbti;
  bloodType?: BloodType;
  spaceType: string;
  deskConcept: DeskStyle;
  countryCode: CountryCode;
  deskContents: DeskContentResponse[];
  deskItems: DeskItemResponse[];
}

// TODO: 응답에 따라 변경
export interface User {
  id: number;
  profileImgUrl: string;
  job?: Job;
  nickname: string;
  bloodType?: BloodType;
  mbti?: Mbti;
  countryCode?: CountryCode;
  ageGroup?: AgeGroup;
}

// TODO: 응답에 따라 변경
export interface DeskStory {
  id: string | number;
  type: 'TEXT' | 'IMAGE';
  text?: string;
  imgUrl?: string;
  order: number;
}

// TODO: 응답에 따라 변경
export interface DeskItem {
  id: string | number;
  name: string;
  imgUrl: string;
  story: string;
  order: number;
  isFavorite: boolean;
  isRecommended: boolean;
  url?: string;
}

export interface DeskPreview {
  id: number;
  title: string;
  thumbnailImgUrl: string;
  user: User;
}

// TODO: 응답에 따라 변경
export interface Desk extends Omit<DeskPreview, 'title'> {
  user: Required<Pick<User, 'job' | 'nickname' | 'countryCode' | 'ageGroup'>> &
    User;
  deskStories: DeskStory[];
  deskItems: DeskItem[];
  deskSummary: string;
  roomType: string;
  deskStyle: DeskStyle;
  cost: DeskCost;
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
    const {
      profileImgUrl,
      thumbnailImgUrl,
      userId,
      deskSummary,
      nickname,
      ...rest
    } = desk;

    const user = {
      id: userId,
      profileImgUrl,
      nickname,
    };

    return {
      ...rest,
      thumbnailImgUrl,
      user,
      title: deskSummary,
    };
  });

  return result;
};

const convertDeskContentResponse = (
  deskContent: DeskContentResponse
): DeskStory => {
  const {
    picture: imgUrl,
    content: text,
    id = uuidv4(),
    contentOrder: order,
  } = deskContent;

  const deskStoryType = imgUrl == null ? 'TEXT' : 'IMAGE';

  const result: DeskStory = {
    id,
    type: deskStoryType,
    order,
    ...(imgUrl != null && { imgUrl }),
    ...(text != null && { text }),
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
    purchaseLink: url,
    contentOrder: order,
    ...rest
  } = deskItemResponse;

  return {
    id,
    imgUrl,
    story,
    order,
    ...(url != null && { url }),
    ...rest,
  };
};

const convertGetDeskResponse = (data: GetDeskResponse): Desk => {
  const {
    spaceType: roomType,
    deskConcept: deskStyle,
    userId,
    profileImgUrl,
    job,
    bloodType,
    mbti,
    nickname,
    countryCode,
    age: ageGroup,
    deskContents,
    deskItems: deskItemsResponse,
    ...rest
  } = data;

  // dummy user
  const user = {
    id: userId,
    profileImgUrl,
    job,
    bloodType,
    mbti,
    nickname,
    ageGroup,
    countryCode,
  };
  const deskStories = deskContents.map((deskContent) =>
    convertDeskContentResponse(deskContent)
  );
  const deskItems = deskItemsResponse.map((deskItem) =>
    convertDeskItemResponse(deskItem)
  );

  const result: Desk = {
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
    const res = await api.get<GetDeskResponse>(`/api/v1/posts/${id}`);

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
