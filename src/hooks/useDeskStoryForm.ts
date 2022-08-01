import { useForm, useFieldArray } from 'react-hook-form';

export type DeskStoryFormType = 'TEXT' | 'IMAGE';

export const useDeskStoryForm = () => {
  const { control } = useForm<{
    deskStory: { value: string; type: DeskStoryFormType }[];
  }>({
    defaultValues: {
      deskStory: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'deskStory',
  });

  return {
    fields,
    append,
    remove,
  };
};

export default useDeskStoryForm;
