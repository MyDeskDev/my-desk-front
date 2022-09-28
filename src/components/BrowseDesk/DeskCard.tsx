import { Box, Image, Text, Flex } from '@chakra-ui/react';

export interface Props {
  deskId: number;
  avatar: React.ReactNode;
}

const DeskCard = (props: Props) => {
  const { avatar } = props;

  const desk = {
    id: 1,
    summary: '자유로운 영혼이 어울리는 그의 자리를 소개합니다.',
    thumbnail: {
      name: '',
      url: '',
    },
  };

  return (
    <Box>
      <Box
        position="relative"
        overflow="hidden"
        pt="251px"
        borderRadius="20px 20px 0 0"
        bgColor="lightgray"
      >
        <Image
          src={desk.thumbnail.url}
          alt={desk.thumbnail.name}
          loading="lazy"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          htmlHeight="251px"
          objectFit="cover"
        />
      </Box>
      <Flex h="80px" mt="-36px" justifyContent="center" zIndex={1}>
        <Box
          borderRadius="50%"
          w="80px"
          h="80px"
          zIndex={1}
          bgColor="gray"
        ></Box>
      </Flex>
      <Box p="15px 49px 49px">
        <Text
          color="#2D2D2D"
          fontSize="1.6rem"
          fontWeight={500}
          lineHeight="2rem"
          textAlign="center"
        >
          {desk.summary}
        </Text>
      </Box>
    </Box>
  );
};

export default DeskCard;
