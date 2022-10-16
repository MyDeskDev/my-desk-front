import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

import DeskListItem from '@/components/DeskList/DeskListItem';
import DeskCard from '@/components/DeskList/DeskCard';

import useDesksQuery from '@/hooks/useDesksQuery';

const DeskList = () => {
  const { data: desks, isLoading } = useDesksQuery();

  if (isLoading) {
    return <div>로딩중</div>;
  } else if (desks?.length === 0) {
    return <div>아직 등록된 책상이 없습니다.</div>;
  }

  return (
    <Flex flexWrap="wrap" margin="0 -39px">
      {desks?.map((desk) => {
        return (
          <DeskListItem key={desk.id}>
            <Link href={`./${desk.id}`}>
              <a>
                <DeskCard desk={desk} />
              </a>
            </Link>
          </DeskListItem>
        );
      })}
    </Flex>
  );
};

export default DeskList;
