import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';

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

const UserSummary = () => {
  return (
    <Flex flexDir="column" alignItems="center" gap="10px">
      <Box textAlign="center">
        <SummaryKey>닉네임 : </SummaryKey>
        <SummaryValue>기미테디</SummaryValue>
      </Box>
      <Box textAlign="center">
        <SummaryKey>직업 : </SummaryKey>
        <SummaryValue>디자이너</SummaryValue>
      </Box>
      <Box textAlign="center">
        <SummaryKey>혈액형 : </SummaryKey>
        <SummaryValue>O형</SummaryValue>
      </Box>
      <Box textAlign="center">
        <SummaryKey>MBTI : </SummaryKey>
        <SummaryValue>ENTP</SummaryValue>
      </Box>
    </Flex>
  );
};

export default UserSummary;
