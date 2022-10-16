import { useQuery } from 'react-query';

import type { UseQueryResult } from 'react-query';
import type { AxiosError } from 'axios';

import DeskApi from '@/api/desk';

import type { DeskPreview } from '@/api/desk';

export const useDesksQuery = <T = DeskPreview[]>(): UseQueryResult<
  T,
  AxiosError
> => {
  return useQuery(['desks'], async () => {
    const desks = await DeskApi.getAll();

    return desks;
  });
};

export default useDesksQuery;
