import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';

import type { Job, BloodType, Mbti } from '@/types';

const SummaryKey = (props: { children?: React.ReactNode }) => {
  const { children } = props;

  return (
    <Text
      as="span"
      color="#B7B7B7"
      fontSize="1.6rem"
      fontWeight="700"
      lineHeight="1.6rem"
    >
      {children}
    </Text>
  );
};

const SummaryValue = (props: { children?: React.ReactNode }) => {
  const { children } = props;

  return (
    <Text
      as="span"
      color="#2D2D2D"
      fontSize="1.6rem"
      fontWeight="700"
      lineHeight="1.6rem"
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

const UserSummary = (props: Props) => {
  const { user } = props;

  const job = toJobText(user.job);

  return (
    <Flex flexDir="column" alignItems="center" gap="10px">
      <Box textAlign="center">
        <SummaryKey>닉네임 : </SummaryKey>
        <SummaryValue>{user.nickname}</SummaryValue>
      </Box>
      <Box textAlign="center">
        <SummaryKey>직업 : </SummaryKey>
        <SummaryValue>{job}</SummaryValue>
      </Box>
      {user.bloodType && (
        <Box textAlign="center">
          <SummaryKey>혈액형 : </SummaryKey>
          <SummaryValue>{user.bloodType}형</SummaryValue>
        </Box>
      )}
      {user.mbti && (
        <Box textAlign="center">
          <SummaryKey>MBTI : </SummaryKey>
          <SummaryValue>{user.mbti}</SummaryValue>
        </Box>
      )}
    </Flex>
  );
};

export default UserSummary;
