import { useState } from 'react';

import type { DeskPreview } from '@/api/desk';

export interface Options {
  defaultLength?: number;
}

export const DEFAULT_LENGTH_PRESET = 10;

export const useDeskListSkeleton = (options: Options = {}) => {
  const { defaultLength = DEFAULT_LENGTH_PRESET } = options;

  const [skeletonLength, setSkeletonLength] = useState(defaultLength);

  return {
    skeletonLength,
    setSkeletonLength,
  };
};

export default useDeskListSkeleton;
