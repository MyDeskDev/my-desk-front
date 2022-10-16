import type { NextPage } from 'next';

import DeskList from '@/components/DeskList/DeskList';
import BaseContainer from '@/components/layouts/Base/BaseContainer';
import BaseHeader from '@/components/layouts/Base/BaseHeader';

const Desks: NextPage = () => {
  return (
    <div>
      <BaseHeader />
      <main>
        <BaseContainer>
          <DeskList />
        </BaseContainer>
      </main>
    </div>
  );
};

export default Desks;
