import { Box, Flex } from '@chakra-ui/react';

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

// import useDeskDetailQuery from '@/hooks/useDeskDetailQuery';
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
    roomType,
    deskStyle,
    cost: 0 as DeskCost,
  };

  return (
    <Box backgroundColor="#F8F5EF">
      <main>
        <Flex
          p="20px 24px 40px"
          bgColor="#FFFFFF"
          alignItems="center"
          flexDir="column"
        >
          <DeskThumbnail src={thumbnailImgUrl} />
          <Flex mt="20px" w="100%" maxW="460px">
            <UserSummary user={userSummaryData} desk={deskStyleData} />
          </Flex>
        </Flex>

        {/* <UserProfileImage src={user.profileImgUrl} /> */}
        {/* <DeskTypeContainer desk={deskStyleData} /> */}
        <DeskSummary summary={deskSummary} />
        <Box>
          {deskStories.map((deskStory) => {
            const { imgUrl, text, id } = deskStory;

            const node =
              deskStory.type === 'IMAGE' ? (
                <DeskStoryImage key={id} src={imgUrl as string} />
              ) : (
                <DeskStoryText key={id}>{text}</DeskStoryText>
              );

            return node;
          })}
        </Box>
        <Box mt="40px">
          {deskItems.map((deskItem) => {
            return <ItemBox key={deskItem.id} item={deskItem} />;
          })}
        </Box>
        <Box mt="40px" pb="20px">
          <CartoonRenderedImage user={{ nickname: user.nickname }} />
        </Box>
        {/* <Box mt="20px">
          <YoutubeLinkBox />
        </Box> */}
      </main>
    </Box>
  );
};

export default Desk;
