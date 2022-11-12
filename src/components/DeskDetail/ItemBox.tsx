import { Box, Flex } from '@chakra-ui/react';

import DeskStoryText from '@/components/DeskDetail/DeskStoryText';
import DeskStoryImage from '@/components/DeskDetail/DeskStoryImage';

import type { DeskItem } from '@/api/desk';

export interface Props {
  item: DeskItem;
}

const ItemBox = (props: Props) => {
  const { item } = props;

  return (
    <Box
      sx={{
        '& + &': {
          marginTop: '40px',
        },
      }}
    >
      <DeskStoryText>{item.story}</DeskStoryText>
      {/* TODO: 추천, 애장 아이템 표시 추가 */}
      <DeskStoryImage src={item.imgUrl} />
      <Flex
        maxW="1200px"
        margin="14px auto 0"
        padding={{ base: '0 18px', lg: '0' }}
        color="#A8A8A8"
        fontSize="1.4rem"
        fontWeight="500"
        lineHeight="1.4rem"
      >
        {/* TODO: url 추가 */}
        아이템명 : {item.name}
      </Flex>
    </Box>
  );
};

export default ItemBox;
