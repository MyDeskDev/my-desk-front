import type { NextPage } from 'next';

import TitleBox from '@/components/CreateDesk/TitleBox';
import CreateGuide from '@/components/CreateDesk/CreateGuide';
import ImageInput from '@/components/CreateDesk/ImageInput';

const InviteCreateDesk: NextPage = () => {
  return (
    <div>
      <main>
        <TitleBox />
        <CreateGuide />
        <ImageInput />
      </main>
    </div>
  );
};

export default InviteCreateDesk;
