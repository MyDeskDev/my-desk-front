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
    return index === firstImageIndex
      ? '대표 이미지를 업로드 해주세요'
      : '사진을 업로드 해주세요';
  };

  const getImageInputContainerProps = (isImageSelected: boolean) => {
    const selectedBeforeProps = {};
    const selectedAfterProps = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
    };

    return isImageSelected ? selectedAfterProps : selectedBeforeProps;
  };

  return (
    <>
      {fields.map((item, index) => {
        if (item.type === 'TEXT') {
          return (
            <InputBox
              key={item.id}
              label="내용을 입력해 주세요."
              isRequired
              isDeletable
              isMovable
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
                isMovable
                onDelete={() => onDelete(index)}
              >
                <Box position="relative">
                  <Box
                    {...getImageInputContainerProps(
                      !!watch(`deskStory.${index}.imageUrl`)
                    )}
                  >
                    <ImageInput
                      {...register(`deskStory.${index}.image`, {
                        onChange: onUploadImage(index),
                      })}
                    />
                  </Box>
                  {watch(`deskStory.${index}.imageUrl`) && (
                    <Flex display="inline-flex" justifyContent="center">
                      <Image
                        src={watch(`deskStory.${index}.imageUrl`)}
                        alt=""
                        w="150px"
                        h="150px"
                        borderRadius="10px"
                        objectFit="cover"
                      />
                    </Flex>
                  )}
                </Box>
              </InputBox>
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
