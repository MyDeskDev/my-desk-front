import { Textarea } from '@chakra-ui/react';

interface Props {
  placeholder?: string;
  value?: string;
}

const CustomTextarea = (props: Props) => {
  return (
    // TODO: auto resizing 적용
    <Textarea
      placeholder={props.placeholder}
      value={props.value}
      p="10px 20px"
      border="0"
      borderRadius="0"
      bgColor="#F3F3F3"
      resize="none"
      fontSize="1.6rem"
      lineHeight="2.4rem"
      _placeholder={{ color: '#C4C4C4' }}
    />
  );
};

export default CustomTextarea;
