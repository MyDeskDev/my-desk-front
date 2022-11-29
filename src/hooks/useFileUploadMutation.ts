import { useMutation } from '@tanstack/react-query';

import FileApi from '@/api/file';

const useFileUploadMutation = () => {
  return useMutation(async (file: File) => await FileApi.upload(file));
};

export default useFileUploadMutation;
