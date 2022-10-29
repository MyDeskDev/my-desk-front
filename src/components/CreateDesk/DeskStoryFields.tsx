import { Box, HStack, Flex, Image } from '@chakra-ui/react';

import type { ChangeEventHandler } from 'react';

import useDeskStoryFields from '@/hooks/useDeskStoryFields';

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

      const fileUrl = URL.createObjectURL(file);

      setValue(`deskStory.${index}.imageUrl`, fileUrl);
    };

    return handler;
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
                label="사진"
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
