import { useForm, useFieldArray } from 'react-hook-form';

export const useDeskItemForm = (name: string = 'item') => {
  const { control } = useForm<{
    [name: string]: {
      name: string;
      image: string;
      url: string;
      story: string;
    }[];
  }>({ defaultValues: { [name]: [] } });
  const { fields, append, remove } = useFieldArray({ control, name });

  return {
    fields,
    append,
    remove,
  };
};

export default useDeskItemForm;
