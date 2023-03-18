import { Box, Flex, Link } from '@chakra-ui/react';

import { mapoFlowerIslandFont } from '@/styles/variables';

const BaseFooter = () => {
  return (
    <Box p="50px 0">
      <Flex
        justifyContent="center"
        fontFamily={mapoFlowerIslandFont}
        color="#83765D"
        fontSize="1.4rem"
        fontWeight="400"
        lineHeight="1.6rem"
      >
        <Link
          href="https://shade-plow-693.notion.site/82a58ce13ea04d34bcd1e77444d60538"
          target="_blank"
          textDecoration="underline"
        >
          마이데스크 프로젝트
        </Link>
        는 무엇인가요?
      </Flex>
    </Box>
  );
};

export default BaseFooter;
