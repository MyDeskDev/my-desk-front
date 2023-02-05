import { Container } from '@chakra-ui/react';

interface Props {
  children?: React.ReactNode;
}

const BaseContainer = (props: Props) => {
  const { children } = props;

  return (
    <Container p="15px 30px" maxW="768px" margin="0 auto">
      {children}
    </Container>
  );
};

export default BaseContainer;
