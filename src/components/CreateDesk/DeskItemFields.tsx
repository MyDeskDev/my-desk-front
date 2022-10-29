import { Box, Flex, HStack, Text, Image } from '@chakra-ui/react';

import useDeskItemFields from '@/hooks/useDeskItemFields';

import DeleteButton from '@/components/CreateDesk/DeleteButton';
import InputBox from '@/components/CreateDesk/InputBox';
import Textarea from '@/components/CreateDesk/Textarea';
import type { ChangeEventHandler } from 'react';

import TextInput from '@/components/CreateDesk/TextInput';
import ImageInput from '@/components/CreateDesk/ImageInput';
import DeskItemCheckbox from '@/components/CreateDesk/DeskItemCheckbox';
import ActionButton from '@/components/CreateDesk/ActionButton';

const ItemTitle = (props: { children?: React.ReactNode }) => {
  return (
    <Text as="strong" fontSize="2rem" lineHeight="2rem">
      {props.children}
    </Text>
  );
};

const DeskItemFields = () => {
  const { fields, register, watch, append, remove, setValue } =
    useDeskItemFields();

  const onDelete = (index: number) => {
    remove(index);
  };

  const onUploadImage = (index: number) => {
    const handler: ChangeEventHandler<HTMLInputElement> = async (event) => {
      if (!event.target.files) {
        return;
      }

      const file = (event.target.files as FileList)[0];

      if (file == null) {
        return;
      }

      const fileUrl = URL.createObjectURL(file);

      setValue(`deskItem.${index}.imageUrl`, fileUrl);
    };

    return handler;
  };

  return (
    <>
      {fields.map((field, index) => (
        <Box
          key={field.id}
          sx={{
            '& + &': {
              mt: '48px',
            },
          }}
        >
          <Flex justifyContent="space-between">
            <ItemTitle>{`아이템 ${index + 1}`}</ItemTitle>
            <DeleteButton onClick={() => onDelete(index)} />
          </Flex>
          <InputBox label="어떤 아이템인가요?" isRequired>
            <Textarea
              {...register(`deskItem.${index}.story`)}
              placeholder="ex: 자주 쓰는 키보드예요"
            />
          </InputBox>
          <InputBox label="아이템명" isRequired>
            <TextInput
              {...register(`deskItem.${index}.name`)}
              placeholder="ex: 애플 매직 키보드"
            />
          </InputBox>
          <InputBox label="사진" isRequired>
            <ImageInput
              {...register(`deskItem.${index}.image`, {
                onChange: onUploadImage(index),
              })}
            />
          </InputBox>
          {watch(`deskItem.${index}.imageUrl`) && (
            <Flex justifyContent="center">
              <Image
                src={watch(`deskItem.${index}.imageUrl`)}
                alt=""
                maxW="100%"
              />
            </Flex>
          )}
          <InputBox label="구매 링크">
            <TextInput
              {...register(`deskItem.${index}.url`)}
              placeholder="링크를 입력해 주세요"
            />
          </InputBox>
          <Box mt="10px" lineHeight={0}>
            <DeskItemCheckbox {...register(`deskItem.${index}.isRecommend`)}>
              추천하는 아이템인가요?
            </DeskItemCheckbox>
          </Box>
          <Box mt="10px" lineHeight={0}>
            <DeskItemCheckbox {...register(`deskItem.${index}.isFavorite`)}>
              애장하는 아이템인가요?
            </DeskItemCheckbox>
          </Box>
        </Box>
      ))}
      <HStack spacing="4px" mt="20px">
        <ActionButton
          onClick={() =>
            append({
              name: '',
              story: '',
              image: null,
              url: '',
              imageUrl: '',
              isFavorite: false,
              isRecommend: false,
            })
          }
        >
          아이템 추가
        </ActionButton>
      </HStack>
    </>
  );
};

export default DeskItemFields;
