import { useForm, useFieldArray } from 'react-hook-form';

export type DeskStoryFormType = 'TEXT' | 'IMAGE';

export const useDeskStoryForm = () => {
  const { control } = useForm<{
    deskStory: {
      text?: string;
      image?: string | ReadonlyArray<string>;
      imageUrl?: string;
      type: DeskStoryFormType;
    }[];
  }>({
    defaultValues: {
      deskStory: [],
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'deskStory',
  });

  return {
    fields,
    append,
    remove,
    update,
    control,
  };
};

export default useDeskStoryForm;
