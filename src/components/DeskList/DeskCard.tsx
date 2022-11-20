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
        pt="251px"
        borderRadius="20px 20px 0 0"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: '1px solid rgba(0, 0, 0, 0.07)',
          borderRadius: '20px 20px 0 0',
        }}
      >
        {desk.thumbnailImgUrl && (
          <Image
            src={desk.thumbnailImgUrl}
            alt=""
            loading="lazy"
            position="absolute"
            top="50%"
            right="50%"
            bottom="50%"
            left="50%"
            w="100%"
            h="100%"
            borderRadius="20px 20px 0 0"
            objectFit="cover"
            transform="translate(-50%, -50%)"
          />
        )}
      </Box>
      <Flex h="80px" mt="-36px" justifyContent="center" zIndex={1}>
        <Box
          position="relative"
          borderRadius="50%"
          w="80px"
          h="80px"
          zIndex={1}
          overflow="hidden"
          bgColor="#fff"
          _after={{
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            border: '1px solid rgba(0, 0, 0, 0.07)',
            borderRadius: '50%',
          }}
        >
          {desk.user.profileImgUrl && (
            <Image
              src={desk.user.profileImgUrl}
              alt=""
              loading="lazy"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          )}
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
