import { Container, Heading } from '@chakra-ui/react';

const BaseHeader = () => {
  return (
    <header>
      <Container
        display="flex"
        justifyContent="space-between"
        p="44px 20px 42px"
        maxW="1200px"
      >
        <Heading
          as="h1"
          color="#000"
          fontSize="3.9rem"
          fontWeight={700}
          lineHeight="5rem"
        >
          우리의 <br />
          책상 이야기
        </Heading>
      </Container>
    </header>
  );
};

export default BaseHeader;
