import { Box, HStack, Flex, Image } from '@chakra-ui/react';
import { useMemo } from 'react';

import type { ChangeEventHandler } from 'react';

import useDeskStoryFields from '@/hooks/useDeskStoryFields';
import useFileUploadMutation from '@/hooks/useFileUploadMutation';

import InputBox from '@/components/CreateDesk/InputBox';
import Textarea from '@/components/CreateDesk/Textarea';
import ImageInput from '@/components/CreateDesk/ImageInput';
import ActionButton from '@/components/CreateDesk/ActionButton';

const DeskStoryFields = () => {
  const { fields, append, remove, register, setValue, watch } =
    useDeskStoryFields();

  const onDelete = (index: number) => {
    remove(index);
  };

  const { mutateAsync } = useFileUploadMutation();

  const onUploadImage = (index: number) => {
    const handler: ChangeEventHandler<HTMLInputElement> = async (event) => {
      const { type } = fields[index];

      if (type !== 'IMAGE') {
        return;
      }

      if (!event.target.files) {
        return;
      }

      const file = (event.target.files as FileList)[0];

      if (file == null) {
        return;
      }

      try {
        const fileUrl = await mutateAsync(file);
        setValue(`deskStory.${index}.imageUrl`, fileUrl);
      } catch (err) {
        alert('사진 업로드 실패');
        console.log(err);
      }
    };

    return handler;
  };

  const firstImageIndex = useMemo(() => {
    const index = fields.findIndex((field) => field.type === 'IMAGE');

    return index;
  }, [fields]);

  const getImageInputLabel = (index: number) => {
    return index === firstImageIndex ? '대표 이미지' : '사진';
  };

  return (
    <>
      {fields.map((item, index) => {
        if (item.type === 'TEXT') {
          return (
            <InputBox
              key={item.id}
              label="내용"
              isRequired
              isDeletable
              onDelete={() => onDelete(index)}
            >
              <Textarea
                {...register(`deskStory.${index}.text`)}
                placeholder="예) 안녕하세요. 저는 마이데스크를 운영하고 있는 기미테디입니다. 저의 책상을 이렇게 소개하는게 쑥스럽네요 ^^"
              />
            </InputBox>
          );
        } else {
          return (
            <Box key={item.id}>
              <InputBox
                label={getImageInputLabel(index)}
                isRequired
                isDeletable
                onDelete={() => onDelete(index)}
              >
                <ImageInput
                  {...register(`deskStory.${index}.image`, {
                    onChange: onUploadImage(index),
                  })}
                />
              </InputBox>
              {watch(`deskStory.${index}.imageUrl`) && (
                <Flex justifyContent="center">
                  <Image
                    src={watch(`deskStory.${index}.imageUrl`)}
                    alt=""
                    maxW="100%"
                  />
                </Flex>
              )}
            </Box>
          );
        }
      })}
      <HStack spacing="4px" mt="10px">
        <ActionButton
          onClick={() =>
            append({
              type: 'TEXT',
              text: '',
              image: null,
              imageUrl: '',
            })
          }
        >
          텍스트 추가
        </ActionButton>
        <ActionButton
          onClick={() =>
            append({
              type: 'IMAGE',
              text: '',
              image: null,
              imageUrl: '',
            })
          }
        >
          사진 추가
        </ActionButton>
      </HStack>
    </>
  );
};

export default DeskStoryFields;
