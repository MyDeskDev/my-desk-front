import type { NextPage } from 'next';

import TitleBox from '@/components/CreateDesk/TitleBox';
import CreateGuide from '@/components/CreateDesk/CreateGuide';

const InviteCreateDesk: NextPage = () => {
  return (
    <div>
      <main>
        <TitleBox />
        <CreateGuide />
      </main>
    </div>
  );
};

export default InviteCreateDesk;
