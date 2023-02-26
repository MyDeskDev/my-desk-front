import { Button, VisuallyHidden } from '@chakra-ui/react';

import HamburgerIcon from '@/icons/hamburger-icon.svg';

const MoveButton = () => {
  return (
    <Button
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="30px"
      h="30px"
      p="0"
      borderRadius="0"
      backgroundColor="transparent"
      outline="none"
      _focus={{ ouline: 'none' }}
      cursor="move"
    >
      <VisuallyHidden>이동</VisuallyHidden>
      <HamburgerIcon style={{ color: '#575757' }} />
    </Button>
  );
};

export default MoveButton;
