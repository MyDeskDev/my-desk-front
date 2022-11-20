import { Box, Flex, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import SuccessIcon from '@/icons/success-icon.svg';

const DeskCreateSuccess = () => {
  return (
    <Flex
      flexDir="column"
      minH="100%"
      maxW="570px"
      m="0 auto"
      px="20px"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="90px" h="90px" mb="30px">
        <SuccessIcon />
      </Box>
      <Text
        mb="30px"
        color="#000"
        fontSize="2rem"
        fontWeight={700}
        lineHeight="2.6rem"
        textAlign="center"
        wordBreak="keep-all"
      >
        소중한 책상이야기가 접수되었습니다.
        <br />
        작성하신 이메일 주소로 승인여부를 안내해드리겠습니다.
      </Text>
      <Text
        as="span"
        color="#929292"
        fontSize="2rem"
        fontWeight={500}
        lineHeight="3.6rem"
      >
        마이데스크 팀
      </Text>
      <Box mt="61px" w="100%">
        <NextLink href="/desks">
          <Link
            d="flex"
            justifyContent="center"
            alignItems="center"
            maxW="300px"
            h="60px"
            m="0 auto"
            bgColor="#000"
            color="#fff"
            fontSize="2rem"
            fontWeight={700}
            _hover={{
              textDecor: 'none',
            }}
          >
            홈으로 가기
          </Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default DeskCreateSuccess;
