import { Link, Box, Text, Flex } from '@chakra-ui/react';

import YoutubeLogo from '@/icons/youtube-logo.svg';

const YoutubeLinkBox = () => {
  return (
    <Box maxW="1200px" margin="0 auto" padding={{ base: '0 18px', lg: '0' }}>
      <Link>
        <Flex
          h="56px"
          justifyContent="center"
          alignItems="center"
          bgColor="#F8F8F8"
          color="#2D2D2D"
          fontSize="1.4rem"
          fontWeight="500"
          lineHeight="1.8rem"
          textDecoration="underline"
        >
          <Box mr="10px">
            <YoutubeLogo />
          </Box>
          <Text
            as="span"
            color="#FF0000"
            textDecorationColor="#FF0000"
            textDecoration="underline"
          >
            자세한 이야기
          </Text>
          가 듣고 싶으신가요?
        </Flex>
      </Link>
    </Box>
  );
};

export default YoutubeLinkBox;
