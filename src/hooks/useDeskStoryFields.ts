import { useFieldArray, useFormContext } from 'react-hook-form';

export type DeskStoryFormType = 'TEXT' | 'IMAGE';

export const useDeskStoryFields = () => {
  const { control, setValue, register, watch } = useFormContext<{
    deskStory: {
      text: string;
      image: string | null;
      imageUrl: string;
      type: DeskStoryFormType;
    }[];
  }>();

  const { fields, append, remove, update } = useFieldArray<{
    deskStory: {
      text: string;
      image: string | null;
      imageUrl: string;
      type: DeskStoryFormType;
    }[];
  }>({
    control,
    name: 'deskStory',
  });

  return {
    fields,
    append,
    remove,
    update,
    setValue,
    register,
    watch,
  };
};

export default useDeskStoryFields;
