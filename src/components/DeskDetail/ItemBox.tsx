import { Box, Flex } from '@chakra-ui/react';

import DeskStoryText from '@/components/DeskDetail/DeskStoryText';
import DeskStoryImage from '@/components/DeskDetail/DeskStoryImage';

const ItemBox = () => {
  return (
    <Box
      sx={{
        '& + &': {
          marginTop: '40px',
        },
      }}
    >
      <DeskStoryText>
        안방에 있던 콘솔을 거실로 옮겨 귀여운 책상공간을 만들었어요.
      </DeskStoryText>
      <DeskStoryImage />
      <Flex
        maxW="1200px"
        margin="14px auto 0"
        padding={{ base: '0 18px', lg: '0' }}
        color="#A8A8A8"
        fontSize="1.4rem"
        fontWeight="500"
        lineHeight="1.4rem"
      >
        아이템명 : apple 에어팟2
      </Flex>
    </Box>
  );
};

export default ItemBox;
