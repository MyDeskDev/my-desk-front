import { Box, Image, Text } from '@chakra-ui/react';

export interface Props {
  image?: {
    src: string;
    alt?: string;
  };
  user: {
    nickname: string;
  };
}

const CartoonRenderedImage = (props: Props) => {
  const { image, user } = props;

  return (
    <Box padding={{ base: '0 18px', lg: '0' }} maxW="960px" margin="0 auto">
      {image && <Image src={image.src} alt={image.alt} w="100%" />}
      <Box
        p="10px 85px"
        bgColor="#000000"
        color="#FFFFFF"
        textAlign="center"
        fontSize="1.4rem"
        fontWeight="500"
        lineHeight="1.8rem"
        wordBreak="keep-all"
      >
        <Text as="span" color="#1480FF">
          {user.nickname}
        </Text>
        님의 소중한 이야기를 전해주셔서 감사합니다.
      </Box>
    </Box>
  );
};

export default CartoonRenderedImage;
