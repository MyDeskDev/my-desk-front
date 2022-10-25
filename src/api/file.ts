import axios from 'axios';

import config from '@/config';

const api = axios.create({ baseURL: config.apiHost });

export const File = {
  upload: async (file: File) => {
    const formData = new FormData();

    formData.append('file', file);

    const res = await api.post<string>(`/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const { data } = res;

    return data;
  },
};

export default File;
