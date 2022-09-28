import Link from 'next/link';
import type { NextPage } from 'next';

import DeskCard from '@/components/BrowseDesk/DeskCard';
import DeskList from '@/components/BrowseDesk/DeskList';
import DeskListItem from '@/components/BrowseDesk/DeskListItem';
import BaseContainer from '@/components/layouts/Base/BaseContainer';
import BaseHeader from '@/components/layouts/Base/BaseHeader';

const Desks: NextPage = () => {
  return (
    <div>
      <BaseHeader />
      <main>
        <BaseContainer>
          <DeskList>
            <DeskListItem>
              <Link href="#">
                <a>
                  <DeskCard deskId={1} avatar={<></>} />
                </a>
              </Link>
            </DeskListItem>
            <DeskListItem>
              <Link href="#">
                <a>
                  <DeskCard deskId={1} avatar={<></>} />
                </a>
              </Link>
            </DeskListItem>
            <DeskListItem>
              <Link href="#">
                <a>
                  <DeskCard deskId={1} avatar={<></>} />
                </a>
              </Link>
            </DeskListItem>
            <DeskListItem>
              <Link href="#">
                <a>
                  <DeskCard deskId={1} avatar={<></>} />
                </a>
              </Link>
            </DeskListItem>
          </DeskList>
        </BaseContainer>
      </main>
    </div>
  );
};

export default Desks;
