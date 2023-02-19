import { useEffect } from 'react';
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

  const { fields, append, remove, update, replace } = useFieldArray<{
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

  // useEffect(() => {
  //   const defaultValues: {
  //     text: string;
  //     image: string | null;
  //     imageUrl: string;
  //     type: DeskStoryFormType;
  //   }[] = [
  //     {
  //       text: '',
  //       image: null,
  //       imageUrl: '',
  //       type: 'TEXT',
  //     },
  //     {
  //       text: '',
  //       image: null,
  //       imageUrl: '',
  //       type: 'IMAGE',
  //     },
  //   ];

  //   replace(defaultValues);
  // }, [replace]);

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
