import type { NextPage } from 'next';

import BaseHeader from '@/components/layouts/Base/BaseHeader';
import BaseContainer from '@/components/layouts/Base/BaseContainer';
import DeskThumbnail from '@/components/DeskDetail/Thumbnail';
import UserProfileImage from '@/components/DeskDetail/UserProfileImage';

const Desk: NextPage = () => {
  return (
    <div>
      <BaseHeader />
      <main>
        <DeskThumbnail />
        <UserProfileImage />
      </main>
    </div>
  );
};

export default Desk;
