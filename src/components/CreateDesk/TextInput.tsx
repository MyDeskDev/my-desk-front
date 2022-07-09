import { Input } from '@chakra-ui/react';

interface Props {
  placeholder?: string;
}

const TextInput = (props: Props) => {
  return (
    <Input
      placeholder={props.placeholder}
      h="50px"
      p="0 20px"
      fontSize="1.6rem"
      lineHeight="2.4rem"
      border="0"
      borderRadius="0"
      backgroundColor="#F3F3F3"
    />
  );
};

export default TextInput;
