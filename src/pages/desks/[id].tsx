import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { useMemo } from 'react';

import type { NextPage, GetServerSideProps } from 'next';

import BaseHeader from '@/components/layouts/Base/BaseHeader';
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

export const getServerSideProps: GetServerSideProps<{ desk: IDesk }> = async (
  context
) => {
  const id = context.params?.id as string;

  if (!/\d+/.test(id)) {
    return { notFound: true, props: {} };
  }

  const _id = Number(id);

  try {
    const desk = await DeskApi.get(_id);

    return { props: { desk } };
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
  };

  return (
    <div>
      <Head>
        <title>{deskSummary} | 마이데스크프로젝트-책상에 취향을 녹이다</title>
        <meta property="og:image" content={thumbnailImgUrl} />
      </Head>
      <BaseHeader />
      <main>
        <DeskThumbnail src={thumbnailImgUrl} />
        <UserProfileImage src={user.profileImgUrl} />
        <Box p="20px 0">
          <UserSummary user={userSummaryData} />
        </Box>
        <DeskTypeContainer desk={deskStyleData} />
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
        <Box>
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
    </div>
  );
};

export default Desk;
