import React from 'react';
import { Box, Flex, FormLabel, Text, HStack, Image } from '@chakra-ui/react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/router';

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
import ActionButton from '@/components/CreateDesk/ActionButton';
import DeskStoryFields from '@/components/CreateDesk/DeskStoryFields';
import DeskItemFields from '@/components/CreateDesk/DeskItemFields';

import useFileUploadMutation from '@/hooks/useFileUploadMutation';
import {
  GENDER,
  AGE_GROUP,
  COUNTRY_CODE,
  JOB,
  DESK_STYLE,
  DESK_COST,
} from '@/constants';
import DeskApi from '@/api/desk';

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

const genderRadios = [
  {
    label: '남자',
    value: GENDER.MALE,
  },
  {
    label: '여자',
    value: GENDER.FEMALE,
  },
];

const ageGroupLabelMap: { [K in typeof AGE_GROUP[number]]: string } = {
  20: '20대',
  30: '30대',
  40: '40대',
  50: '50대',
};

const ageRadios = AGE_GROUP.map((age) => {
  return {
    label: ageGroupLabelMap[age],
    value: age,
  };
});

const countryCodeLabelMap: {
  [K in typeof COUNTRY_CODE[keyof typeof COUNTRY_CODE]]: string;
} = {
  [COUNTRY_CODE.KR]: '한국',
};

const countryCodeOptions = Object.values(COUNTRY_CODE).map((countryCode) => {
  return {
    label: countryCodeLabelMap[countryCode],
    value: countryCode,
  };
});

const jobLabelMap = {
  [JOB.DESIGNER]: '디자이너',
  [JOB.DEVELOPER]: '개발자',
  [JOB.FREELANCER]: '프리랜서',
  [JOB.STUDENT]: '학생',
};

const jobOptions = Object.values(JOB).map((job) => {
  return {
    label: jobLabelMap[job],
    value: job,
  };
});

const deskStyleLabelMap = {
  [DESK_STYLE.NATURAL]: '네추럴',
  [DESK_STYLE.MODERN]: '모던',
  [DESK_STYLE.NORTH_EUROPE]: '북유럽',
  [DESK_STYLE.VINTAGE]: '빈티지&레트로',
  [DESK_STYLE.MINIMAL]: '미니멀&심플',
  [DESK_STYLE.LOVELY]: '러블리&로맨틱',
  [DESK_STYLE.CLASSIC]: '클래식&엔틱',
  [DESK_STYLE.FRENCH]: '프렌치&프로방스',
  [DESK_STYLE.INDUSTRIAL]: '인더스트리얼',
  [DESK_STYLE.KOREAN]: '한국&아시아',
  [DESK_STYLE.UNIQUE]: '유니크',
};

const deskStyleOptions = Object.values(DESK_STYLE).map((deskStyle) => {
  return {
    label: deskStyleLabelMap[deskStyle],
    value: deskStyle,
  };
});

const deskCostLabelMap: {
  [K in typeof DESK_COST[number]]: string;
} = {
  0: '10만원 미만',
  10: '10만원대',
  20: '20만원대',
  30: '30만원대',
  40: '40만원대',
  50: '50만원 이상',
};

const deskCostOptions = DESK_COST.map((cost) => {
  return {
    label: deskCostLabelMap[cost],
    value: cost,
  };
});

const InviteCreateDesk: NextPage = () => {
  const router = useRouter();

  const methods = useForm({
    mode: 'onSubmit',
  });

  const { register, handleSubmit, control, setValue, watch } = methods;

  const fileUploadMutation = useFileUploadMutation();

  const onChangeProfileImage: ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
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

  const onSubmit = async (data: any) => {
    const { deskStory, profileImage, deskItem, mbti, bloodType, ...rest } =
      data;

    if (deskStory.length === 0) {
      alert('책상 이야기는 반드시 작성해야 합니다.');
      return;
    }

    const _deskStory = deskStory.map((story: any) => {
      const { image, ...rest } = story;

      return {
        ...rest,
      };
    });

    const _deskItem = deskItem.map((item: any) => {
      const { image, ...rest } = item;

      return {
        ...rest,
      };
    });

    const _data = {
      ...rest,
      deskStory: _deskStory,
      deskItem: _deskItem,
      ...(mbti && { mbti }),
      ...(bloodType && { bloodType }),
    };

    try {
      await DeskApi.create(_data);

      router.push('/invite/desks/success');
    } catch (err) {
      console.log(err);
      alert('예기치 못한 오류가 발생했습니다.');
    }
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
                        {genderRadios.map(({ label, value }) => {
                          return (
                            <SquareRadio
                              key={value}
                              value={value}
                              name="gender"
                            >
                              {label}
                            </SquareRadio>
                          );
                        })}
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
                        {ageRadios.map(({ label, value }) => {
                          return (
                            <SquareRadio key={value} value={value.toString()}>
                              {label}
                            </SquareRadio>
                          );
                        })}
                      </SquareRadioGroup>
                    )}
                  />
                </InputBox>
                <InputBox label="거주지 국가" isRequired>
                  <Select {...register('country')} placeholder="선택">
                    {countryCodeOptions.map(({ label, value }) => {
                      return (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      );
                    })}
                  </Select>
                </InputBox>
                <InputBox label="직업" isRequired>
                  <Select {...register('job')} placeholder="선택">
                    {jobOptions.map(({ label, value }) => {
                      return (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      );
                    })}
                  </Select>
                </InputBox>
                <InputBox label="컨셉스타일" isRequired>
                  <Select {...register('deskConcept')} placeholder="선택">
                    {deskStyleOptions.map(({ label, value }) => {
                      return (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      );
                    })}
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
                    {deskCostOptions.map(({ label, value }) => {
                      return (
                        <option key={value} value={value.toString()}>
                          {label}
                        </option>
                      );
                    })}
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
                <DeskItemFields />
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
