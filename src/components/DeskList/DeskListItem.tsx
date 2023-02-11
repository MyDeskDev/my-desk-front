import { Box } from '@chakra-ui/react';

export interface Props {
  children?: React.ReactNode;
}

const DeskListItem = (props: Props) => {
  const { children } = props;

  return (
    <Box display="inline-block" minW="1px">
      {children}
    </Box>
  );
};

export default DeskListItem;
