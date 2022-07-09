import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import TitleBox from '@/components/CreateDesk/TitleBox';
import CreateGuide from '@/components/CreateDesk/CreateGuide';
import ImageInput from '@/components/CreateDesk/ImageInput';
import InputBox from '@/components/CreateDesk/InputBox';

const InviteCreateDesk: NextPage = () => {
  return (
    <Box maxW="800px" minW="280px" margin="0 auto">
      <main>
        <TitleBox />
        <CreateGuide />
        <InputBox
          label="프로필"
          detailExplanation="자신을 나타낼 수 있는 사진,캐릭터,이모지 등"
          required
        >
          <ImageInput />
        </InputBox>
      </main>
    </Box>
  );
};

export default InviteCreateDesk;
