import { useFieldArray, useFormContext } from 'react-hook-form';

export type DeskStoryFormType = 'TEXT' | 'IMAGE';

export const useDeskStoryFields = () => {
  const {
    control,
    setValue,
    register,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext<{
    deskStory: {
      text: string;
      imageUrl: string;
      type: DeskStoryFormType;
    }[];
  }>();

  const { fields, append, remove, update, move } = useFieldArray<{
    deskStory: {
      text: string;
      imageUrl: string;
      type: DeskStoryFormType;
    }[];
  }>({
    control,
    name: 'deskStory',
  });

  const watchedDeskStory = watch('deskStory');
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchedDeskStory[index],
    };
  });

  return {
    fields: controlledFields,
    append,
    remove,
    update,
    setValue,
    register,
    watch,
    move,
    errors,
    trigger,
    control,
  };
};

export default useDeskStoryFields;
