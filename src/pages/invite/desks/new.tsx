import type { NextPage } from 'next';
import { Box, InputGroup, FormLabel, FormHelperText } from '@chakra-ui/react';

import type { InputGroupProps } from '@chakra-ui/react';

import TitleBox from '@/components/CreateDesk/TitleBox';
import CreateGuide from '@/components/CreateDesk/CreateGuide';
import ImageInput from '@/components/CreateDesk/ImageInput';
import InputBox from '@/components/CreateDesk/InputBox';
import TextInput from '@/components/CreateDesk/TextInput';

const DeskInputGroup = (props: Omit<InputGroupProps, 'flexDir'>) => {
  return (
    <InputGroup
      {...props}
      flexDir="column"
      mb="30px"
      sx={{
        '& + &': {
          pt: '30px',
          borderTop: '2px solid #F1F1F1',
        },
      }}
    />
  );
};

interface FormSectionLabelProps {
  label: string;
  helperText?: string;
}

const FormSectionLabel = (props: FormSectionLabelProps) => {
  return (
    <Box mb="28px">
      <FormLabel m="0" color="orange.500" fontSize="2.6rem" fontWeight="700">
        {props.label}
      </FormLabel>
      {props.helperText && (
        <FormHelperText mt="10px">{props.helperText}</FormHelperText>
      )}
    </Box>
  );
};

const InviteCreateDesk: NextPage = () => {
  return (
    <Box maxW="800px" minW="280px" margin="0 auto">
      <main>
        <TitleBox />
        <CreateGuide />

        <form>
          <Box p="7px 16px 7px 18px">
            <DeskInputGroup>
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
            </DeskInputGroup>
            <DeskInputGroup>
              <FormSectionLabel label="프로필 작성" />
              <InputBox label="성별" isRequired>
                <TextInput placeholder="예) 소형,대형 사무실,공용오피스,내방,기타 등" />
              </InputBox>
            </DeskInputGroup>
          </Box>
        </form>
      </main>
    </Box>
  );
};

export default InviteCreateDesk;
