import { Box, Image, Text, Flex } from '@chakra-ui/react';

import type { DeskPreview } from '@/api/desk';

export interface Props {
  desk: DeskPreview;
}

const DeskCard = (props: Props) => {
  const { desk } = props;

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
          src={desk.mainImgUrl}
          alt=""
          loading="lazy"
          position="absolute"
          top="50%"
          right="50%"
          bottom="50%"
          left="50%"
          w="100%"
          h="100%"
          objectFit="cover"
          transform="translate(-50%, -50%)"
        />
      </Box>
      <Flex h="80px" mt="-36px" justifyContent="center" zIndex={1}>
        <Box
          borderRadius="50%"
          w="80px"
          h="80px"
          zIndex={1}
          bgColor="gray"
          overflow="hidden"
        >
          <Image
            src={desk.user.profileImgUrl}
            alt=""
            loading="lazy"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>
      <Box p="15px 49px 49px">
        <Text
          color="#2D2D2D"
          fontSize="1.6rem"
          fontWeight={500}
          lineHeight="2rem"
          textAlign="center"
        >
          {desk.title}
        </Text>
      </Box>
    </Box>
  );
};

export default DeskCard;
