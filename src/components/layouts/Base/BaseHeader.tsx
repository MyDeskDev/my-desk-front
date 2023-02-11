import { Heading, Image, Text, Box } from '@chakra-ui/react';

import { mapoFlowerIslandFont } from '@/styles/variables';

const BaseHeader = () => {
  return (
    <Box as="header">
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        maxW="768px"
        m="0 auto"
      >
        <Heading
          as="h1"
          color="#000"
          fontSize="3.9rem"
          fontWeight={700}
          lineHeight="5rem"
        >
          <Image src="/images/logo.png" alt="my desk project" w="172px" />
        </Heading>
        <Text
          mt="30px"
          color="#4F4F4F"
          fontFamily={mapoFlowerIslandFont}
          fontSize="1.6rem"
          fontWeight={400}
          lineHeight="3rem"
          textAlign="center"
        >
          책상에 취향을 녹이다.
          <br />
          당신의 책상이야기를 들려주세요
        </Text>
      </Box>
    </Box>
  );
};

export default BaseHeader;
