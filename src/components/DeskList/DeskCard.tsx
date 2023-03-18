import { Box, Image, Text, Flex, AspectRatio } from '@chakra-ui/react';

import type { DeskPreview } from '@/api/desk';

import { antiheroFont } from '@/styles/variables';

export interface Props {
  desk: DeskPreview;
}

const DeskCard = (props: Props) => {
  const { desk } = props;

  return (
    <Box
      position="relative"
      minW="315px"
      w={{ base: '100%', md: '315px' }}
      p="18px"
      backgroundColor="#fff"
      sx={{
        aspectRatio: '5 / 6',
      }}
    >
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Image src="/images/masking-tape-ivory.png" alt="" height="36px" />
      </Box>
      <Box
        position="relative"
        w="100%"
        h="220px"
        borderRadius="20px 20px 0 0"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: '1px solid rgba(0, 0, 0, 0.07)',
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
            objectFit="cover"
            transform="translate(-50%, -50%)"
          />
        )}
      </Box>
      <Flex justifyContent="space-between" mt="20px" gap="4px">
        <Text
          as="span"
          display="inline-block"
          flex="1"
          color="#383838"
          fontFamily={antiheroFont}
          fontSize="1.4rem"
          lineHeight="1.6rem"
        >
          No. {desk.id}
        </Text>
        <Text
          as="span"
          display="inline-block"
          flex="0 0 180px"
          overflow="hidden"
          w="180px"
          color="#4B4B4B"
          fontSize="1.4rem"
          fontWeight={600}
          lineHeight="1.4rem"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          textAlign="end"
        >
          {desk.user.nickname ?? '알 수 없음'}
        </Text>
      </Flex>
      <Box mt="14px">
        <Text
          display="-webkit-box"
          overflow="hidden"
          height="6rem"
          color="#858585"
          fontSize="1.3rem"
          fontWeight={300}
          lineHeight="2rem"
          sx={{
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {desk.title}
        </Text>
      </Box>
    </Box>
  );
};

export default DeskCard;
