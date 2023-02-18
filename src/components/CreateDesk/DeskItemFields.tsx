import { Box, Flex, HStack, Text, Image } from '@chakra-ui/react';
import type { ChangeEventHandler } from 'react';

import useDeskItemFields from '@/hooks/useDeskItemFields';
import useFileUploadMutation from '@/hooks/useFileUploadMutation';

import DeleteButton from '@/components/CreateDesk/DeleteButton';
import InputBox from '@/components/CreateDesk/InputBox';
import Textarea from '@/components/CreateDesk/Textarea';
import TextInput from '@/components/CreateDesk/TextInput';
import ImageInput from '@/components/CreateDesk/ImageInput';
import DeskItemCheckbox from '@/components/CreateDesk/DeskItemCheckbox';
import ActionButton from '@/components/CreateDesk/ActionButton';

const ItemTitle = (props: { children?: React.ReactNode }) => {
  return (
    <Text
      as="strong"
      color="orange.500"
      fontSize="2rem"
      fontWeight={700}
      lineHeight="2rem"
    >
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

  const { mutateAsync } = useFileUploadMutation();

  const onUploadImage = (index: number) => {
    const handler: ChangeEventHandler<HTMLInputElement> = async (event) => {
      if (!event.target.files) {
        return;
      }

      const file = (event.target.files as FileList)[0];

      if (file == null) {
        return;
      }

      try {
        const fileUrl = await mutateAsync(file);
        setValue(`deskItem.${index}.imageUrl`, fileUrl);
      } catch (err) {}
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
          <InputBox
            label="어떤 아이템인가요?"
            helperText="(아이템이 갖고 있는 이야기가 있으면 입력하되, 없으면 아이템명과 사진만 넣어주셔도 됩니다.)"
          >
            <Textarea
              {...register(`deskItem.${index}.story`)}
              placeholder="ex: 어렸을 때 아버지에게 물려 받은 기계식 키보드 입니다. 사용감이 있긴 하지만 그래도 저는 만족하고 있습니다."
            />
          </InputBox>
          <InputBox label="아이템명" isRequired>
            <TextInput
              {...register(`deskItem.${index}.name`)}
              placeholder="ex: 키크론 기계식 키보드"
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
          {/* <InputBox label="구매 링크">
            <TextInput
              {...register(`deskItem.${index}.url`)}
              placeholder="링크를 입력해 주세요"
            />
          </InputBox> */}
          <Box mt="10px" lineHeight={0}>
            <DeskItemCheckbox {...register(`deskItem.${index}.isRecommended`)}>
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
              isRecommended: false,
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
