import { Text } from '@chakra-ui/react';

const DeskStoryText = (props: { children?: React.ReactNode }) => {
  const { children } = props;

  return (
    <Text
      color="#383838"
      fontSize="1.4rem"
      fontWeight="300"
      lineHeight="2.5rem"
      whiteSpace="pre-wrap"
    >
      {children}
    </Text>
  );
};

export default DeskStoryText;
