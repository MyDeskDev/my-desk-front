import type { NextPage } from 'next';

import BaseHeader from '@/components/layouts/Base/BaseHeader';
import BaseContainer from '@/components/layouts/Base/BaseContainer';
import DeskThumbnail from '@/components/DeskDetail/Thumbnail';

const Desk: NextPage = () => {
  return (
    <div>
      <BaseHeader />
      <main>
        <DeskThumbnail />
      </main>
    </div>
  );
};

export default Desk;
