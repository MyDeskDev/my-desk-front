import { Box, Flex, Link } from '@chakra-ui/react';

import type { NextPage, GetServerSideProps } from 'next';

import DeskThumbnail from '@/components/DeskDetail/Thumbnail';
import UserProfileImage from '@/components/DeskDetail/UserProfileImage';
import UserSummary from '@/components/DeskDetail/UserSummary';
import DeskTypeContainer from '@/components/DeskDetail/DeskTypeContainer';
import DeskSummary from '@/components/DeskDetail/DeskSummary';
import DeskStoryText from '@/components/DeskDetail/DeskStoryText';
import DeskStoryImage from '@/components/DeskDetail/DeskStoryImage';
import ItemBox from '@/components/DeskDetail/ItemBox';
import CartoonRenderedImage from '@/components/DeskDetail/CartoonRenderedImage';
import ThanksBox from '@/components/DeskDetail/ThanksBox';
import LeftIcon from '@/icons/left-icon.svg';

import DeskApi from '@/api/desk';

import type { Desk as IDesk } from '@/api/desk';
import type { MetaData, DeskCost } from '@/types';

export const getServerSideProps: GetServerSideProps<{
  desk: IDesk;
  meta: MetaData;
}> = async (context) => {
  const id = context.params?.id as string;

  if (!/\d+/.test(id)) {
    return { notFound: true, props: {} };
  }

  const _id = Number(id);

  try {
    const desk = await DeskApi.get(_id);

    const meta = {
      title: desk.deskSummary,
      image: desk.thumbnailImgUrl,
    };

    return { props: { desk, meta } };
  } catch {
    return { notFound: true, props: {} };
  }
};

const Desk: NextPage<{ desk: IDesk }> = (props) => {
  const {
    id,
    thumbnailImgUrl,
    user,
    roomType,
    deskStyle,
    deskSummary,
    deskStories,
    deskItems,
  } = props.desk;

  const userSummaryData = {
    nickname: user.nickname,
    job: user.job,
    bloodType: user.bloodType,
    mbti: user.mbti,
  };

  const deskStyleData = {
    id: id,
    roomType,
    deskStyle,
    cost: 0 as DeskCost,
  };

  const equalSpaceContainerProps = {
    sx: {
      '& + &': {
        marginTop: '60px',
      },
    },
  };

  return (
    <Box backgroundColor="#F8F5EF">
      <Box as="header" position="sticky" top="0">
        <Flex
          display={{ base: 'flex', md: 'none' }}
          alignItems="center"
          h="50px"
          p="0 20px"
          bgColor="#FFFFFF"
        >
          <Link
            href="/desks"
            display="inline-flex"
            alignItems="center"
            w="22px"
            h="40px"
          >
            <LeftIcon />
          </Link>
        </Flex>
      </Box>
      <main>
        <Flex
          p={{ base: '20px 24px 40px', md: '88px 24px 62px' }}
          bgColor="#FFFFFF"
          alignItems="center"
          flexDir="column"
        >
          <DeskThumbnail src={thumbnailImgUrl} />
          <Flex mt="20px" w="100%" maxW="460px">
            <UserSummary user={userSummaryData} desk={deskStyleData} />
          </Flex>
        </Flex>
        <Box maxW="768px" m="0 auto" p="60px 26px 60px 24px">
          <Box {...equalSpaceContainerProps}>
            <DeskSummary summary={deskSummary} />
          </Box>
          {deskStories.map((deskStory) => {
            const { imgUrl, text, id } = deskStory;

            const node =
              deskStory.type === 'IMAGE' ? (
                <DeskStoryImage src={imgUrl as string} />
              ) : (
                <DeskStoryText>{text}</DeskStoryText>
              );

            return (
              <Box key={id} {...equalSpaceContainerProps}>
                {node}
              </Box>
            );
          })}
          {deskItems.map((deskItem) => {
            return (
              <Box key={deskItem.id} {...equalSpaceContainerProps}>
                <ItemBox item={deskItem} />
              </Box>
            );
          })}
          <Box {...equalSpaceContainerProps}>
            <ThanksBox nickname={user.nickname} />
          </Box>
        </Box>
        {/* <Box mt="40px" pb="20px">
          <CartoonRenderedImage user={{ nickname: user.nickname }} />
        </Box> */}
      </main>
    </Box>
  );
};

export default Desk;
