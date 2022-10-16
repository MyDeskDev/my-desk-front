import { Flex, Skeleton } from '@chakra-ui/react';
import Link from 'next/link';

import DeskListItem from '@/components/DeskList/DeskListItem';
import DeskCard from '@/components/DeskList/DeskCard';
import DeskCardSkeleton from '@/components/DeskList/DeskCardSkeleton';

import useDesksQuery from '@/hooks/useDesksQuery';
import useDeskListSkeleton from '@/hooks/useDeskListSkeleton';

const DeskList = () => {
  const { data: desks, isLoading } = useDesksQuery();

  const { skeletonLength } = useDeskListSkeleton({ defaultLength: 30 });

  if (isLoading) {
    return (
      <Flex flexWrap="wrap" margin="0 -39px">
        {Array(skeletonLength)
          .fill(0)
          .map((_, index) => {
            return (
              <DeskListItem key={index}>
                <DeskCardSkeleton />
              </DeskListItem>
            );
          })}
      </Flex>
    );
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
