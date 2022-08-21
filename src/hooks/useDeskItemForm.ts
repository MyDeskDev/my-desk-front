import { useForm, useFieldArray } from 'react-hook-form';

export const useDeskItemForm = (name: string = 'item') => {
  const { control } = useForm<{
    [name: string]: {
      name: string;
      image: string | null;
      url: string;
      story: string;
      imageUrl: string;
    }[];
  }>({
    defaultValues: {
      [name]: [{ name: '', image: null, url: '', story: '', imageUrl: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name });

  return {
    fields,
    append,
    remove,
  };
};

export default useDeskItemForm;