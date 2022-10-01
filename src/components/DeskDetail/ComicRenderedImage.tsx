import { Box, Image, Text } from '@chakra-ui/react';

const ComicRenderedImage = () => {
  return (
    <Box padding={{ base: '0 18px', lg: '0' }} maxW="1200" margin="0 auto">
      <Image src="" alt="" w="100%" />
      <Box
        p="10px 85px"
        bgColor="#000000"
        color="#FFFFFF"
        textAlign="center"
        fontSize="1.4rem"
        fontWeight="500"
        lineHeight="1.8rem"
      >
        <Text as="span" color="#1480FF">
          기미테디
        </Text>
        님의 소중한 이야기를 전해주셔서 감사합니다.
      </Box>
    </Box>
  );
};

export default ComicRenderedImage;
