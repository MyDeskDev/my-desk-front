import { Flex, Text } from '@chakra-ui/react';

import { mapoFlowerIslandFont } from '@/styles/variables';

const ThanksBox = (props: { nickname: string }) => {
  return (
    <Flex alignItems="center" h="100px" border="1px solid #E8DED0">
      <Text
        flex="1"
        color="#383838"
        fontFamily={mapoFlowerIslandFont}
        fontSize={{ base: '1.2rem', md: '1.6rem' }}
        fontWeight="400"
        lineHeight={{ base: '1.7rem', md: '2.2rem' }}
        textAlign="center"
      >
        Thanks to.
      </Text>
      <Text
        flex="1"
        color="#383838"
        fontFamily={mapoFlowerIslandFont}
        fontSize={{ base: '1.4rem', md: '1.6rem' }}
        fontWeight="400"
        lineHeight={{ base: '2rem', md: '2.2rem' }}
      >
        {`"${props.nickname}"`} 님의
        <br />
        책상 이야기였습니다.
      </Text>
    </Flex>
  );
};

export default ThanksBox;
