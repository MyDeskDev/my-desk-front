import type { NextPage } from 'next';

import DeskCard from '@/components/BrowseDesk/DeskCard';

const Desks: NextPage = () => {
  return (
    <div>
      <main>
        <DeskCard deskId={1} avatar={<></>} />
      </main>
    </div>
  );
};

export default Desks;
