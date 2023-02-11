import type { NextPage } from 'next';
import { Flex, Box } from '@chakra-ui/react';

import DeskList from '@/components/DeskList/DeskList';
import BaseContainer from '@/components/layouts/Base/BaseContainer';
import BaseHeader from '@/components/layouts/Base/BaseHeader';

const Desks: NextPage = () => {
  return (
    <Flex flexDir="column" minH="100%" backgroundColor="#F8F5EF">
      <Box p="100px 0 70px">
        <BaseHeader />
      </Box>
      <Flex as="main" flexDir="column" flex="1">
        <BaseContainer>
          <DeskList />
        </BaseContainer>
      </Flex>
    </Flex>
  );
};

export default Desks;
