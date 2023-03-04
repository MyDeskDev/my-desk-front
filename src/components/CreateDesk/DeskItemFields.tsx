import { Box, Flex, HStack, Text, Image } from '@chakra-ui/react';
import type { ChangeEventHandler } from 'react';

import useDeskItemFields from '@/hooks/useDeskItemFields';
import useFileUploadMutation from '@/hooks/useFileUploadMutation';

import InputBox from '@/components/CreateDesk/InputBox';
import Textarea from '@/components/CreateDesk/Textarea';
import TextInput from '@/components/CreateDesk/TextInput';
import ImageInput from '@/components/CreateDesk/ImageInput';
import DeskItemCheckbox from '@/components/CreateDesk/DeskItemCheckbox';
import ActionButton from '@/components/CreateDesk/ActionButton';
import DeskItemInputBox from '@/components/CreateDesk/DeskItemInputBox';

const DeskItemFields = () => {
  const { fields, register, watch, append, remove, setValue, move } =
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
      {fields.map((field, index) => (
        <DeskItemInputBox
          key={index}
          index={index}
          onDelete={() => onDelete(index)}
          onDrop={move}
        >
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
            <Box position="relative">
              <Box
                {...getImageInputContainerProps(
                  !!watch(`deskItem.${index}.imageUrl`)
                )}
              >
                <ImageInput
                  {...register(`deskItem.${index}.image`, {
                    onChange: onUploadImage(index),
                  })}
                />
              </Box>
              {watch(`deskItem.${index}.imageUrl`) && (
                <Flex display="inline-flex" justifyContent="center">
                  <Image
                    src={watch(`deskItem.${index}.imageUrl`)}
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

          {/* <InputBox label="구매 링크">
            <TextInput
              {...register(`deskItem.${index}.url`)}
              placeholder="링크를 입력해 주세요"
            />
          </InputBox> */}
          <Flex mt="10px" lineHeight={0}>
            <Box mr="30px">
              <DeskItemCheckbox
                {...register(`deskItem.${index}.isRecommended`)}
              >
                다른 사용자에게 추천하고 싶어요
              </DeskItemCheckbox>
            </Box>
            <Box mr="30px">
              <DeskItemCheckbox {...register(`deskItem.${index}.isFavorite`)}>
                애장하는 아이템이예요
              </DeskItemCheckbox>
            </Box>
          </Flex>
        </DeskItemInputBox>
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
