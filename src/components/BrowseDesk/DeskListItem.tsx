import { Box } from '@chakra-ui/react';

export interface Props {
  children?: React.ReactNode;
}

const DeskListItem = (props: Props) => {
  const { children } = props;

  return (
    <Box maxW="33.3%" w="100%" p="0 39px">
      {children}
    </Box>
  );
};

export default DeskListItem;
