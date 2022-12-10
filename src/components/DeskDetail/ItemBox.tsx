import { Box, Flex, Text, Link } from '@chakra-ui/react';

import DeskStoryText from '@/components/DeskDetail/DeskStoryText';
import DeskStoryImage from '@/components/DeskDetail/DeskStoryImage';

import type { DeskItem } from '@/api/desk';

export interface Props {
  item: DeskItem;
}

interface BadgeProps {
  children?: React.ReactNode;
}

const Badge = (props: BadgeProps) => {
  return (
    <Flex
      justifyContent="center"
      minW="50px"
      p="4px 10px"
      borderRadius="6px"
      backgroundColor="rgba(0, 0, 0, 0.4)"
      fontSize="1.4rem"
      fontWeight="500"
    >
      {props.children}
    </Flex>
  );
};

const ItemBox = (props: Props) => {
  const { item } = props;

  return (
    <Box
      maxW="1200px"
      m="0 auto"
      sx={{
        '& + &': {
          marginTop: '40px',
        },
      }}
    >
      <DeskStoryText>{item.story}</DeskStoryText>
      <Box position="relative">
        <DeskStoryImage src={item.imgUrl} />
        <Flex gap="2px" position="absolute" top="6px" left="6px">
          {item.isRecommended && (
            <Badge>
              <Text color="orange.500">추천</Text>
            </Badge>
          )}
          {item.isFavorite && (
            <Badge>
              <Text color="#FFFFFF">애장</Text>
            </Badge>
          )}
        </Flex>
      </Box>
      <Flex
        maxW="1200px"
        margin="14px auto 0"
        padding={{ base: '0 18px', lg: '0' }}
        color="#A8A8A8"
        fontSize="1.4rem"
        fontWeight="500"
        lineHeight="1.4rem"
      >
        아이템명 :&nbsp;
        {item.url ? (
          <Link href={item.url} target="_blank" textDecor="underline">
            {item.name}
          </Link>
        ) : (
          item.name
        )}
      </Flex>
    </Box>
  );
};

export default ItemBox;
