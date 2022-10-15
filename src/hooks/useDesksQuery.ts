import { useQuery } from 'react-query';
import axios from 'axios';

import type { UseQueryResult } from 'react-query';
import type { AxiosError } from 'axios';

import config from '@/config';

const instance = axios.create({ baseURL: config.apiUrl });

export const useDesksQuery = <T>(): UseQueryResult<T, AxiosError> => {
  return useQuery(['desks'], async () => {
    const { data } = await instance.get('/api/v1/post');

    return data;
  });
};

export default useDesksQuery;
