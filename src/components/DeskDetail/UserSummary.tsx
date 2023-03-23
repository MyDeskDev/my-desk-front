import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';

import { antiheroFont } from '@/styles/variables';

import type { Job, BloodType, Mbti, DeskStyle, DeskCost } from '@/types';

const SummaryKey = (props: { children?: React.ReactNode }) => {
  const { children } = props;

  return <Box flex="1">{children}</Box>;
};

const SummaryValue = (props: { children?: React.ReactNode }) => {
  const { children } = props;

  return <Box flex="1">{children}</Box>;
};

const DetailKeyText = (props: { children?: React.ReactNode }) => {
  {
    const { children } = props;

    return (
      <Text
        color="#858585"
        fontSize="1.2rem"
        fontWeight="300"
        lineHeight="1.4rem"
      >
        {children}
      </Text>
    );
  }
};

const DetailValueText = (props: { children?: React.ReactNode }) => {
  const { children } = props;

  return (
    <Text
      color="#383838"
      fontSize="1.2rem"
      fontWeight="300"
      lineHeight="1.4rem"
    >
      {children}
    </Text>
  );
};

export interface Props {
  user: {
    nickname: string;
    job: Job;
    bloodType?: BloodType;
    mbti?: Mbti;
  };
  desk: {
    id: number | string;
    roomType: string;
    deskStyle: DeskStyle;
    cost: DeskCost;
  };
}

const toJobText = (job: Job) => {
  const jobTextMap: { [K in Job]: string } = {
    DEVELOPER: '개발자',
    DESIGNER: '디자이너',
    FREELANCER: '프리랜서',
    STUDENT: '학생',
  };

  return jobTextMap[job];
};

const toDeskStyleText = (deskStyle: DeskStyle) => {
  const deskStyleTextMap: { [K in DeskStyle]: string } = {
    NATURAL: '내추럴',
    MODERN: '모던',
    NORTH_EUROPE: '북유럽',
    VINTAGE: '빈티지&레트로',
    MINIMAL: '미니멀&심플',
    LOVELY: '러블리&로맨틱',
    CLASSIC: '클래식&엔틱',
    FRENCH: '프렌치&프로방스',
    INDUSTRIAL: '인터스트리얼',
    KOREAN: '한국&아시아',
    UNIQUE: '유니크',
  };

  return deskStyleTextMap[deskStyle];
};

const toDeskCostText = (cost: DeskCost) => {
  const deskCostTextMap: Record<DeskCost, string> = {
    0: '10만원 미만',
    10: '10만원대',
    20: '20만원대',
    30: '30만원대',
    40: '40만원대',
    50: '50만원 이상',
  };

  return deskCostTextMap[cost];
};

const UserSummary = (props: Props) => {
  const { user, desk } = props;

  const job = toJobText(user.job);
  const bloodType = user.bloodType != null ? `${user.bloodType}형` : '-';
  const deskStyle = toDeskStyleText(desk.deskStyle);
  const cost = toDeskCostText(desk.cost);

  return (
    <Flex flexDir="column" gap="14px" width="100%">
      <Flex>
        <SummaryKey>
          <Text
            as="span"
            color="#383838"
            fontSize="1.6rem"
            fontWeight={600}
            lineHeight="3rem"
          >
            닉네임
          </Text>
        </SummaryKey>
        <SummaryValue>
          <Text
            as="span"
            color="#383838"
            fontSize="1.6rem"
            fontWeight={600}
            lineHeight="3rem"
          >
            {user.nickname}
          </Text>
        </SummaryValue>
      </Flex>
      <Flex>
        <SummaryKey>
          <DetailKeyText>직업</DetailKeyText>
        </SummaryKey>
        <SummaryValue>
          <DetailValueText>{job}</DetailValueText>
        </SummaryValue>
      </Flex>
      <Flex>
        <SummaryKey>
          <DetailKeyText>혈액형</DetailKeyText>
        </SummaryKey>
        <SummaryValue>
          <DetailValueText>{bloodType}</DetailValueText>
        </SummaryValue>
      </Flex>
      <Flex>
        <SummaryKey>
          <DetailKeyText>MBTI</DetailKeyText>
        </SummaryKey>
        <SummaryValue>
          <DetailValueText>{user.mbti ?? '-'}</DetailValueText>
        </SummaryValue>
      </Flex>
      <Flex>
        <SummaryKey>
          <DetailKeyText>공간</DetailKeyText>
        </SummaryKey>
        <SummaryValue>
          <DetailValueText>{desk.roomType}</DetailValueText>
        </SummaryValue>
      </Flex>
      <Flex>
        <SummaryKey>
          <DetailKeyText>스타일</DetailKeyText>
        </SummaryKey>
        <SummaryValue>
          <DetailValueText>{deskStyle}</DetailValueText>
        </SummaryValue>
      </Flex>
      <Flex>
        <SummaryKey>
          <DetailKeyText>구성 비용</DetailKeyText>
        </SummaryKey>
        <SummaryValue>
          <DetailValueText>{cost}</DetailValueText>
        </SummaryValue>
      </Flex>
    </Flex>
  );
};

export default UserSummary;
