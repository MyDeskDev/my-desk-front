import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';

import DeskList from '@/components/DeskList/DeskList';
import BaseContainer from '@/components/layouts/Base/BaseContainer';
import BaseHeader from '@/components/layouts/Base/BaseHeader';

const Desks: NextPage = () => {
  return (
    <Flex flexDir="column" minH="100%">
      <BaseHeader />
      <Flex as="main" flexDir="column" flex="1">
        <BaseContainer>
          <DeskList />
        </BaseContainer>
      </Flex>
    </Flex>
  );
};

export default Desks;
