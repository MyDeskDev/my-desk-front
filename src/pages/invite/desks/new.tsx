import React from 'react';
import { Box, Flex, FormLabel, Text, HStack, Image } from '@chakra-ui/react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import type { NextPage } from 'next';
import type { ChangeEventHandler } from 'react';

import TitleBox from '@/components/CreateDesk/TitleBox';
import CreateGuide from '@/components/CreateDesk/CreateGuide';
import ImageInput from '@/components/CreateDesk/ImageInput';
import InputBox from '@/components/CreateDesk/InputBox';
import TextInput from '@/components/CreateDesk/TextInput';
import SquareRadio from '@/components/CreateDesk/SquareRadio';
import SquareRadioGroup from '@/components/CreateDesk/SquareRadioGroup';
import Select from '@/components/CreateDesk/Select';
import Textarea from '@/components/CreateDesk/Textarea';
import ActionButton from '@/components/CreateDesk/ActionButton';
import DeleteButton from '@/components/CreateDesk/DeleteButton';
import DeskItemCheckbox from '@/components/CreateDesk/DeskItemCheckbox';
import DeskStoryFields from '@/components/CreateDesk/DeskStoryFields';

import useDeskStoryForm from '@/hooks/useDeskStoryForm';
import useDeskItemForm from '@/hooks/useDeskItemForm';
import useFileUploadMutation from '@/hooks/useFileUploadMutation';

const DeskInputSection = (props: { children: React.ReactNode }) => {
  return (
    <Flex
      flexDir="column"
      mb="30px"
      sx={{
        '& + &': {
          pt: '30px',
          borderTop: '2px solid #F1F1F1',
        },
      }}
    >
      {props.children}
    </Flex>
  );
};

interface FormSectionLabelProps {
  label: string;
  helperText?: string;
}

const FormSectionLabel = (props: FormSectionLabelProps) => {
  return (
    <Box mb="28px">
      <FormLabel m="0" color="orange.500" fontSize="2.6rem" fontWeight="700">
        {props.label}
      </FormLabel>
      {props.helperText && (
        <Text mt="10px" color="#6C6C6C" fontSize="1.6rem" lineHeight="2.4rem">
          {props.helperText}
        </Text>
      )}
    </Box>
  );
};

const ItemTitle = (props: { children?: React.ReactNode }) => {
  return (
    <Text as="strong" fontSize="2rem" lineHeight="2rem">
      {props.children}
    </Text>
  );
};

const InviteCreateDesk: NextPage = () => {
  const methods = useForm({
    mode: 'onBlur',
  });

  const { register, handleSubmit, control, setValue, watch, unregister } =
    methods;

  const {
    fields: deskStoryFields,
    append: appendDeskStory,
    remove: removeDeskStory,
  } = useDeskStoryForm();

  const {
    fields: deskItemFields,
    append: appendDeskItem,
    remove: removeDeskItem,
  } = useDeskItemForm('deskItem');

  const fileUploadMutation = useFileUploadMutation();

  const onChangeProfileImage: ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    event.preventDefault();
    const file = (event.target.files as FileList)[0];

    if (file == null) {
      return;
    }

    try {
      const profileImgUrl = await fileUploadMutation.mutateAsync(file);
      setValue('profileImageUrl', profileImgUrl);
    } catch (err) {
      alert('프로필 이미지 업로드 실패');
      console.log(err);
    }
  };

  const onChangeDeskItemImage = (index: number) => {
    const handler: ChangeEventHandler<HTMLInputElement> = (event) => {
      event.preventDefault();

      const file = (event.target.files as FileList)[0];

      if (file == null) {
        return;
      }

      const fileObjUrl = URL.createObjectURL(file);

      setValue(`deskItem.${index}.imageUrl`, fileObjUrl);
    };

    return handler;
  };

  const onDeleteDeskItem = (index: number) => {
    removeDeskItem(index);
    unregister(`deskItem.${index}`);
  };

  const onChangeDeskStory = (index: number) => {
    const handler: ChangeEventHandler<HTMLInputElement> = (event) => {
      event.preventDefault();

      const { type: fieldType } = deskStoryFields[index];

      setValue(`deskStory.${index}.type`, fieldType);

      if (!event.target.files) {
        return;
      }

      const file = (event.target.files as FileList)[0];

      if (file == null) {
        return;
      }

      const fileObjUrl = URL.createObjectURL(file);

      setValue(`deskStory.${index}.imageUrl`, fileObjUrl);
    };

    return handler;
  };

  const onDeleteDeskStory = (index: number) => {
    unregister(`deskStory.${index}`);
    removeDeskStory(index);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box maxW="800px" minW="280px" margin="0 auto">
      <main>
        <TitleBox />
        <CreateGuide />

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box p="7px 16px 7px 18px">
              <DeskInputSection>
                <InputBox
                  label="프로필"
                  helperText="자신을 나타낼 수 있는 사진,캐릭터,이모지 등"
                  isRequired
                >
                  <Box d="inline-block" position="relative">
                    <ImageInput
                      {...register('profileImage', {
                        onChange: onChangeProfileImage,
                      })}
                    />
                    {watch('profileImageUrl') && (
                      <Box
                        position="absolute"
                        top="0"
                        right="0"
                        bottom="0"
                        left="0"
                        bgColor="white"
                      >
                        <Image
                          src={watch('profileImageUrl')}
                          alt=""
                          boxSize="100%"
                          objectFit="cover"
                          borderRadius="50%"
                        />
                      </Box>
                    )}
                  </Box>
                </InputBox>
                <InputBox
                  label="이름"
                  helperText="서비스에 노출되지 않습니다."
                  isRequired
                >
                  <TextInput {...register('name')} placeholder="입력" />
                </InputBox>
                <InputBox
                  label="닉네임"
                  helperText="서비스에 보여지는 닉네임 입니다."
                  isRequired
                >
                  <TextInput {...register('nickname')} placeholder="입력" />
                </InputBox>
                <InputBox
                  label="이메일 주소"
                  helperText="책상이야기 승인을 하기 위함이며, 노출은 안됩니다."
                  isRequired
                >
                  <TextInput {...register('email')} placeholder="입력" />
                </InputBox>
                <InputBox label="공간 형태" isRequired>
                  <TextInput
                    {...register('roomType')}
                    placeholder="예) 소형,대형 사무실,공용오피스,내방,기타 등"
                  />
                </InputBox>
              </DeskInputSection>
              <DeskInputSection>
                <FormSectionLabel label="프로필 작성" />
                <InputBox label="성별" isRequired>
                  <Controller
                    control={control}
                    name="gender"
                    render={({ field: { onChange, value } }) => (
                      <SquareRadioGroup onChange={onChange} value={value}>
                        <SquareRadio value="male" name="gender">
                          남자
                        </SquareRadio>
                        <SquareRadio value="female" name="gender">
                          여자
                        </SquareRadio>
                      </SquareRadioGroup>
                    )}
                  />
                </InputBox>
                <InputBox label="연령대" isRequired>
                  <Controller
                    control={control}
                    name="ageGroup"
                    render={({ field: { onChange, value } }) => (
                      <SquareRadioGroup onChange={onChange} value={value}>
                        <SquareRadio value="20">20대</SquareRadio>
                        <SquareRadio value="30">30대</SquareRadio>
                        <SquareRadio value="40">40대</SquareRadio>
                        <SquareRadio value="50">50대</SquareRadio>
                      </SquareRadioGroup>
                    )}
                  />
                </InputBox>
                <InputBox label="거주지 국가" isRequired>
                  <Select {...register('country')} placeholder="선택">
                    <option value="KR">한국</option>
                  </Select>
                </InputBox>
                <InputBox label="직업" isRequired>
                  <Select {...register('job')} placeholder="선택">
                    <option value="developer">개발자</option>
                    <option value="designer">디자이너</option>
                    <option value="freelancer">프리랜서</option>
                    <option value="student">학생</option>
                  </Select>
                </InputBox>
                <InputBox label="컨셉스타일" isRequired>
                  <Select {...register('deskConcept')} placeholder="선택">
                    <option value="natural">네추럴</option>
                    <option value="modern">모던</option>
                    <option value="north_europe">북유럽</option>
                    <option value="vintage">빈티지&amp;레트로</option>
                    <option value="minimal">미니멀&amp;심플</option>
                    <option value="lovely">러블리&amp;로맨틱</option>
                    <option value="classic">클래식&amp;엔틱</option>
                    <option value="french">프렌치&amp;프로방스</option>
                    <option value="industrial">인더스트리얼</option>
                    <option value="korean">한국&amp;아시아</option>
                    <option value="unique">유니크</option>
                  </Select>
                </InputBox>
                <InputBox label="혈액형">
                  <Select {...register('bloodType')} placeholder="선택">
                    <option value="A">A형</option>
                    <option value="B">B형</option>
                    <option value="O">O형</option>
                    <option value="AB">AB형</option>
                  </Select>
                </InputBox>
                <InputBox label="MBTI">
                  <Select {...register('mbti')} placeholder="선택">
                    <option value="INTJ">INTJ</option>
                    <option value="INTP">INTP</option>
                    <option value="ENTJ">ENTJ</option>
                    <option value="ENTP">ENTP</option>
                    <option value="INFJ">INFJ</option>
                    <option value="INFP">INFP</option>
                    <option value="ENFJ">ENFJ</option>
                    <option value="ENFP">ENFP</option>
                    <option value="ISTJ">ISTJ</option>
                    <option value="ISFJ">ISFJ</option>
                    <option value="ESTJ">ESTJ</option>
                    <option value="ESFJ">ESFJ</option>
                    <option value="ISTP">ISTP</option>
                    <option value="ISFP">ISFP</option>
                    <option value="ESTP">ESTP</option>
                    <option value="ESFP">ESFP</option>
                  </Select>
                </InputBox>
              </DeskInputSection>
              <DeskInputSection>
                <FormSectionLabel label="나의 책상은?" />
                <InputBox
                  label="나의 책상을 한 줄로 요약하면 어떤 책상인가요?"
                  isRequired
                >
                  <TextInput
                    {...register('deskSummary')}
                    placeholder="예) 책상은 나의 영혼과 같은 존재입니다."
                  />
                </InputBox>
                <InputBox
                  label="구성 비용"
                  helperText="데스크톱과 노트북 등 고가 장비 제외하여 선택해 주세요."
                  isRequired
                >
                  <Select {...register('cost')} placeholder="선택">
                    <option value="10-">10만원 미만</option>
                    <option value="10+">10만원대</option>
                    <option value="20+">20만원대</option>
                    <option value="30+">30만원대</option>
                    <option value="40+">40만원대</option>
                    <option value="50+">50만원 이상</option>
                  </Select>
                </InputBox>
              </DeskInputSection>
              <DeskInputSection>
                <FormSectionLabel label="책상 이야기" />
                <DeskStoryFields />
              </DeskInputSection>
              <DeskInputSection>
                <FormSectionLabel
                  label="아이템 작성하기"
                  helperText="보여주고 싶은 아이템이 있으면 작성해 주세요."
                />
                {deskItemFields.map((field, index) => (
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
                      <DeleteButton onClick={() => onDeleteDeskItem(index)} />
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
                          onChange: onChangeDeskItemImage(index),
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
                      <DeskItemCheckbox
                        {...register(`deskItem.${index}.isRecommend`)}
                      >
                        추천하는 아이템인가요?
                      </DeskItemCheckbox>
                    </Box>
                    <Box mt="10px" lineHeight={0}>
                      <DeskItemCheckbox
                        {...register(`deskItem.${index}.isFavorite`)}
                      >
                        애장하는 아이템인가요?
                      </DeskItemCheckbox>
                    </Box>
                  </Box>
                ))}
                <HStack spacing="4px" mt="20px">
                  <ActionButton
                    onClick={() =>
                      appendDeskItem({
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
              </DeskInputSection>
              <HStack spacing="4px" mt="31px">
                {/* <ActionButton h="60px">미리보기</ActionButton> */}
                <ActionButton type="submit" h="60px" bgColor="orange.500">
                  보내기
                </ActionButton>
              </HStack>
            </Box>
          </form>
        </FormProvider>
      </main>
      <DevTool control={control} />
    </Box>
  );
};

export default InviteCreateDesk;
