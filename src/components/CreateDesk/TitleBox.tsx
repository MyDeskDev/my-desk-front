import { Flex, Heading, Text } from '@chakra-ui/react';

const TitleBox = () => {
  return (
    <Flex
      alignItems="flex-end"
      h="146px"
      p="12px 18px"
      backgroundRepeat="no-repeat"
      backgroundImage={{
        base: 'url(/images/desk-background-small.png)',
        md: 'url(/images/desk-background.png)',
      }}
      backgroundSize="cover"
      backgroundPosition="50% 0"
    >
      <Heading as="h2" color="white" fontSize="2.6rem" lineHeight="2.6rem">
        <Text as="span" color="orange.500">
          마이데스크
        </Text>{' '}
        작성 가이드
      </Heading>
    </Flex>
  );
};

export default TitleBox;
