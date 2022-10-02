import { Flex } from '@chakra-ui/react';

interface Props {
  children?: React.ReactNode;
}

const DeskList = (props: Props) => {
  const { children } = props;
  return (
    <Flex flexWrap="wrap" margin="0 -39px">
      {children}
    </Flex>
  );
};

export default DeskList;
