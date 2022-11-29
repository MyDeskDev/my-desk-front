import { Box } from '@chakra-ui/react';

const DeskStoryText = (props: { children?: React.ReactNode }) => {
  const { children } = props;

  return (
    <Box
      maxW="1200px"
      margin="0 auto"
      padding={{ base: '5px 18px', lg: '5px 0' }}
      color="#2D2D2D"
      fontSize="1.6rem"
      fontWeight="500"
      lineHeight="2.4rem"
    >
      {children}
    </Box>
  );
};

export default DeskStoryText;
