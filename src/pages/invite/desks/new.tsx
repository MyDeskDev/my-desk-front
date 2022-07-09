import type { NextPage } from 'next';
import { Box, InputGroup } from '@chakra-ui/react';

import TitleBox from '@/components/CreateDesk/TitleBox';
import CreateGuide from '@/components/CreateDesk/CreateGuide';
import ImageInput from '@/components/CreateDesk/ImageInput';
import InputBox from '@/components/CreateDesk/InputBox';
import TextInput from '@/components/CreateDesk/TextInput';

const InviteCreateDesk: NextPage = () => {
  return (
    <Box maxW="800px" minW="280px" margin="0 auto">
      <main>
        <TitleBox />
        <CreateGuide />

        <form>
          <Box p="7px 16px 7px 18px">
            <InputGroup flexDir="column">
              <InputBox
                label="프로필"
                helperText="자신을 나타낼 수 있는 사진,캐릭터,이모지 등"
                isRequired
              >
                <ImageInput />
              </InputBox>
              <InputBox
                label="이름"
                helperText="서비스에 노출되지 않습니다."
                isRequired
              >
                <TextInput placeholder="입력" />
              </InputBox>
              <InputBox
                label="닉네임"
                helperText="서비스에 보여지는 닉네임 입니다."
                isRequired
              >
                <TextInput placeholder="입력" />
              </InputBox>
              <InputBox
                label="이메일 주소"
                helperText="책상이야기 승인을 하기 위함이며, 노출은 안됩니다."
                isRequired
              >
                <TextInput placeholder="입력" />
              </InputBox>
              <InputBox label="공간 형태" isRequired>
                <TextInput placeholder="예) 소형,대형 사무실,공용오피스,내방,기타 등" />
              </InputBox>
            </InputGroup>
          </Box>
        </form>
      </main>
    </Box>
  );
};

export default InviteCreateDesk;
