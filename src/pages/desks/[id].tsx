import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import BaseHeader from '@/components/layouts/Base/BaseHeader';
import BaseContainer from '@/components/layouts/Base/BaseContainer';
import DeskThumbnail from '@/components/DeskDetail/Thumbnail';
import UserProfileImage from '@/components/DeskDetail/UserProfileImage';
import UserSummary from '@/components/DeskDetail/UserSummary';
import DeskTypeContainer from '@/components/DeskDetail/DeskTypeContainer';
import DeskSummary from '@/components/DeskDetail/DeskSummary';
import DeskStoryText from '@/components/DeskDetail/DeskStoryText';
import DeskStoryImage from '@/components/DeskDetail/DeskStoryImage';

const Desk: NextPage = () => {
  return (
    <div>
      <BaseHeader />
      <main>
        <DeskThumbnail />
        <UserProfileImage />
        <Box p="20px 0">
          <UserSummary />
        </Box>
        <DeskTypeContainer />
        <DeskSummary />
        <Box>
          <DeskStoryText>
            안녕하세요. 저는 태그바이에서 PO로 일하고 있는 김경수 라고 합니다.
          </DeskStoryText>
          <DeskStoryImage />
          <DeskStoryText>
            안방에 있던 콘솔을 거실로 옮겨 귀여운 책상공간을 만들었어요. 나름
            맘에들어 당분간 이대로 두기로 그리고 몇일전 봉자한테 귀여운 인터뷰
            요청이 들어왔어요. 뉴스레터로 소개되는건데 맘껏 자랑할 수 있는
            기회라 바로 하기로 질문답변 하나씩 끄적끄적 적어가고있어요 안방에
            있던 콘솔을 거실로 옮겨 귀여운 책상공간을 만들었어요. 나름 맘에들어
            당분간 이대로 두기로 그리고 몇일전 봉자한테 귀여운 인터뷰 요청이
            들어왔어요. 뉴스레터로 소개되는건데 맘껏 자랑할 수 있는 기회라 바로
            하기로 질문답변 하나씩 끄적끄적 적어가고있어요 안방에 있던 콘솔을
            거실로 옮겨 귀여운 책상공간을 만들었어요. 나름 맘에들어 당분간
            이대로 두기로 그리고 몇일전 봉자한테 귀여운 인터뷰 요청이
            들어왔어요. 뉴스레터로 소개되는건데 맘껏 자랑할 수 있는 기회라 바로
            하기로 질문답변 하나씩 끄적끄적 적어가고있어요
          </DeskStoryText>
          <DeskStoryImage />
          <DeskStoryImage />
          <DeskStoryImage />
        </Box>
      </main>
    </div>
  );
};

export default Desk;
