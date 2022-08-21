import { useForm, useFieldArray } from 'react-hook-form';

export type DeskStoryFormType = 'TEXT' | 'IMAGE';

export const useDeskStoryForm = () => {
  const { control } = useForm<{
    deskStory: {
      text: string;
      image: string | null;
      imageUrl: string;
      type: DeskStoryFormType;
    }[];
  }>({
    defaultValues: {
      deskStory: [
        { type: 'TEXT', text: '', image: null, imageUrl: '' },
        { type: 'IMAGE', text: '', image: null, imageUrl: '' },
      ],
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
