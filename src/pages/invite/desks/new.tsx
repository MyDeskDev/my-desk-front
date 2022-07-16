import type { NextPage } from 'next';
import { Box, Flex, FormLabel, Text, HStack } from '@chakra-ui/react';

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

const InviteCreateDesk: NextPage = () => {
  return (
    <Box maxW="800px" minW="280px" margin="0 auto">
      <main>
        <TitleBox />
        <CreateGuide />

        <form>
          <Box p="7px 16px 7px 18px">
            <DeskInputSection>
              <InputBox
                label="프로필"
                helperText="자신을 나타낼 수 있는 사진,캐릭터,이모지 등"
                isRequired
              >
                <ImageInput />
              </InputBox>
              <InputBox
                label="이름"
                helperText="서비스에 노출되지 않습니다."
                isRequired
              >
                <TextInput placeholder="입력" />
              </InputBox>
              <InputBox
                label="닉네임"
                helperText="서비스에 보여지는 닉네임 입니다."
                isRequired
              >
                <TextInput placeholder="입력" />
              </InputBox>
              <InputBox
                label="이메일 주소"
                helperText="책상이야기 승인을 하기 위함이며, 노출은 안됩니다."
                isRequired
              >
                <TextInput placeholder="입력" />
              </InputBox>
              <InputBox label="공간 형태" isRequired>
                <TextInput placeholder="예) 소형,대형 사무실,공용오피스,내방,기타 등" />
              </InputBox>
            </DeskInputSection>
            <DeskInputSection>
              <FormSectionLabel label="프로필 작성" />
              <InputBox label="성별" isRequired>
                <SquareRadioGroup name="gender">
                  <SquareRadio value="male">남자</SquareRadio>
                  <SquareRadio value="female">여자</SquareRadio>
                </SquareRadioGroup>
              </InputBox>
              <InputBox label="연령대" isRequired>
                <SquareRadioGroup name="ageGroup">
                  <SquareRadio value="20">20대</SquareRadio>
                  <SquareRadio value="30">30대</SquareRadio>
                  <SquareRadio value="40">40대</SquareRadio>
                  <SquareRadio value="50">50대</SquareRadio>
                </SquareRadioGroup>
              </InputBox>
              <InputBox label="거주지 국가" isRequired>
                <Select placeholder="선택">
                  <option value="KR">한국</option>
                </Select>
              </InputBox>
              <InputBox label="직업" isRequired>
                <Select placeholder="선택">
                  <option value="developer">개발자</option>
                  <option value="designer">디자이너</option>
                  <option value="freelancer">프리랜서</option>
                  <option value="student">학생</option>
                </Select>
              </InputBox>
              <InputBox label="컨셉스타일" isRequired>
                <Select placeholder="선택">
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
                <Select placeholder="선택">
                  <option value="A">A형</option>
                  <option value="B">B형</option>
                  <option value="O">O형</option>
                  <option value="AB">AB형</option>
                </Select>
              </InputBox>
              <InputBox label="MBTI">
                <Select placeholder="선택">
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
                <TextInput placeholder="예) 책상은 나의 영혼과 같은 존재입니다." />
              </InputBox>
              <InputBox
                label="구성 비용"
                helperText="데스크톱과 노트북 등 고가 장비 제외하여 선택해 주세요."
                isRequired
              >
                <Select placeholder="선택">
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
              <InputBox label="내용" isRequired>
                <Textarea placeholder="예) 안녕하세요. 저는 마이데스크를 운영하고 있는 기미테디입니다. 저의 책상을 이렇게 소개하는게 쑥스럽네요 ^^" />
              </InputBox>
              <InputBox label="사진" isRequired>
                <ImageInput />
              </InputBox>
              <HStack spacing="4px" mt="10px">
                <ActionButton>텍스트 추가</ActionButton>
                <ActionButton>사진 추가</ActionButton>
              </HStack>
            </DeskInputSection>
            <DeskInputSection>
              <FormSectionLabel
                label="추천 아이템"
                helperText="사용자에게 추천 하고 싶은 아이템"
              />
              <InputBox label="추천 이유" isRequired>
                <Textarea placeholder="예) 제가 이 아이템을 추천하는 이유는..." />
              </InputBox>
              <InputBox label="아이템명" isRequired>
                <TextInput placeholder="예) 애플 매직 키보드" />
              </InputBox>
              <InputBox label="사진" isRequired>
                <ImageInput />
              </InputBox>
              <InputBox label="구매처 링크">
                <TextInput placeholder="구매하셨던 사이트 링크를 입력해 주세요." />
              </InputBox>
              <HStack spacing="4px" mt="10px">
                <ActionButton>아이템 추가</ActionButton>
              </HStack>
            </DeskInputSection>
          </Box>
        </form>
      </main>
    </Box>
  );
};

export default InviteCreateDesk;
