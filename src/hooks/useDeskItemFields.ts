import { useFormContext, useFieldArray } from 'react-hook-form';
import { useEffect } from 'react';

export interface DeskItemField {
  name: string;
  image: string | null;
  url: string;
  story: string;
  imageUrl: string;
  isFavorite: boolean;
  isRecommend: boolean;
}

export const useDeskItemFields = () => {
  const name = 'deskItem';

  const { control, register, watch, setValue } = useFormContext<{
    [name]: DeskItemField[];
  }>();

  const { fields, append, remove, update, replace } = useFieldArray({
    control,
    name,
  });

  useEffect(() => {
    const defaultValues: DeskItemField[] = [
      {
        name: '',
        image: null,
        url: '',
        story: '',
        imageUrl: '',
        isFavorite: false,
        isRecommend: false,
      },
    ];

    replace(defaultValues);
  }, [replace]);

  return {
    name,
    fields,
    append,
    remove,
    update,
    register,
    watch,
    setValue,
  };
};

export default useDeskItemFields;
