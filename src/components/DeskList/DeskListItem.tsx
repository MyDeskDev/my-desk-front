import { Box } from '@chakra-ui/react';

export interface Props {
  children?: React.ReactNode;
}

const DeskListItem = (props: Props) => {
  const { children } = props;

  return (
    <Box
      w="100%"
      maxW={{ base: '100%', md: '33.3%', lg: '33.3%', xl: '33.3%' }}
      minW="1px"
      p="0 39px"
    >
      {children}
    </Box>
  );
};

export default DeskListItem;
