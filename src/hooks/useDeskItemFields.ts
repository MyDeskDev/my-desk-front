import { useFormContext, useFieldArray } from 'react-hook-form';
import { useEffect } from 'react';

export interface DeskItemField {
  name: string;
  url: string;
  story: string;
  imageUrl: string;
  isFavorite: boolean;
  isRecommended: boolean;
}

export const useDeskItemFields = () => {
  const name = 'deskItem';

  const {
    control,
    register,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useFormContext<{
    [name]: DeskItemField[];
  }>();

  const { fields, append, remove, update, replace, move } = useFieldArray({
    control,
    name,
  });

  const watchedDeskItems = watch(name);
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchedDeskItems[index],
    };
  });

  useEffect(() => {
    const defaultValues: DeskItemField[] = [
      {
        name: '',
        url: '',
        story: '',
        imageUrl: '',
        isFavorite: false,
        isRecommended: false,
      },
    ];

    replace(defaultValues);
  }, [replace]);

  return {
    name,
    fields: controlledFields,
    append,
    remove,
    update,
    register,
    watch,
    setValue,
    move,
    control,
    errors,
    trigger,
  };
};

export default useDeskItemFields;
