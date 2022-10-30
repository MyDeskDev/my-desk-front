import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import config from '@/config';

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
};

export default Desk;
