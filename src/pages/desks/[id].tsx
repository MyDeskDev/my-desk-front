import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import BaseHeader from '@/components/layouts/Base/BaseHeader';
import BaseContainer from '@/components/layouts/Base/BaseContainer';
import DeskThumbnail from '@/components/DeskDetail/Thumbnail';
import UserProfileImage from '@/components/DeskDetail/UserProfileImage';
import UserSummary from '@/components/DeskDetail/UserSummary';
import DeskTypeContainer from '@/components/DeskDetail/DeskTypeContainer';
import DeskSummary from '@/components/DeskDetail/DeskSummary';

const Desk: NextPage = () => {
  return (
    <div>
      <BaseHeader />
      <main>
        <DeskThumbnail />
        <UserProfileImage />
        <Box p="20px 0">
          <UserSummary />
        </Box>
        <DeskTypeContainer />
        <DeskSummary />
      </main>
    </div>
  );
};

export default Desk;
