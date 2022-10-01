import { Heading } from '@chakra-ui/react';
import type { HeadingProps } from '@chakra-ui/react';

const ItemSectionTitle = (props: {
  as?: HeadingProps['as'];
  children?: React.ReactNode;
}) => {
  const { as, children } = props;

  return (
    <Heading
      as={as}
      color="#FF6712"
      fontSize="2.6rem"
      fontWeight="700"
      lineHeight="2.6rem"
      maxW="1200px"
      margin="35px auto 20px"
      padding={{ base: '0 18px', lg: '0' }}
    >
      {children}
    </Heading>
  );
};

export default ItemSectionTitle;
