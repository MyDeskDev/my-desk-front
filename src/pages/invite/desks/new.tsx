import type { NextPage } from 'next';
import { Box, InputGroup } from '@chakra-ui/react';

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

        <form>
          <Box p="12px 16px 12px 18px">
            <InputGroup flexDir="column">
              <InputBox
                label="프로필"
                helperText="자신을 나타낼 수 있는 사진,캐릭터,이모지 등"
                isRequired
              >
                <ImageInput />
              </InputBox>
            </InputGroup>
          </Box>
        </form>
      </main>
    </Box>
  );
};

export default InviteCreateDesk;
