import { Flex, Text, Icon, Grid } from '@chakra-ui/react';
import Link from 'next/link';
import { WarningIcon } from '@chakra-ui/icons';
import { FcClock } from 'react-icons/fc';

import DeskListItem from '@/components/DeskList/DeskListItem';
import DeskCard from '@/components/DeskList/DeskCard';
import DeskCardSkeleton from '@/components/DeskList/DeskCardSkeleton';

import useDesksQuery from '@/hooks/useDesksQuery';
import useDeskListSkeleton from '@/hooks/useDeskListSkeleton';

const DeskList = () => {
  const { data: desks, isLoading, isError } = useDesksQuery();

  const { skeletonLength } = useDeskListSkeleton({ defaultLength: 30 });

  if (isLoading) {
    return (
      <Grid
        gridTemplateColumns={{ base: '100%', md: 'repeat(2, 315px)' }}
        justifyContent="center"
        gap="70px"
      >
        {Array(skeletonLength)
          .fill(0)
          .map((_, index) => {
            return (
              <DeskListItem key={index}>
                <DeskCardSkeleton />
              </DeskListItem>
            );
          })}
      </Grid>
    );
  } else if (isError) {
    return (
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p="48px"
      >
        <WarningIcon w="24px" h="24px" color="orange.500" />
        <Text
          mt="20px"
          fontSize="2rem"
          lineHeight="2.4rem"
          wordBreak="keep-all"
          align="center"
        >
          예기치 못한 오류가 발생했습니다.
        </Text>
      </Flex>
    );
  } else if (desks?.length === 0) {
    return (
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p="48px"
      >
        <Icon as={FcClock} w="30px" h="30px" />
        <Text
          mt="20px"
          fontSize="2rem"
          lineHeight="2.4rem"
          wordBreak="keep-all"
          align="center"
        >
          첫 데스크 소개까지 얼마 남지 않았어요
        </Text>
      </Flex>
    );
  }

  return (
    <Grid
      gridTemplateColumns={{ base: '100%', md: 'repeat(2, 315px)' }}
      justifyContent="center"
      gap="70px"
    >
      {desks?.map((desk) => {
        return (
          <DeskListItem key={desk.id}>
            <Link href={`/desks/${desk.id}`}>
              <a>
                <DeskCard desk={desk} />
              </a>
            </Link>
          </DeskListItem>
        );
      })}
    </Grid>
  );
};

export default DeskList;
