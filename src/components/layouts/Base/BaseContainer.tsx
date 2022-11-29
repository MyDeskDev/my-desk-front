import { Container } from '@chakra-ui/react';

interface Props {
  children?: React.ReactNode;
}

const BaseContainer = (props: Props) => {
  const { children } = props;

  return (
    <Container p="0 20px" maxW="1200px" margin="0 auto">
      {children}
    </Container>
  );
};

export default BaseContainer;
