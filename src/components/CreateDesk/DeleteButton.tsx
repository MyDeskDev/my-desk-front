import type { MouseEventHandler } from 'react';
import { Button, VisuallyHidden } from '@chakra-ui/react';

import TrashCanIcon from '@/icons/trash-can-icon.svg';

const DeleteButton = (props: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="30px"
      h="30px"
      p="0"
      borderRadius="0"
      backgroundColor="black"
      outline="none"
      _hover={{ backgroundColor: 'black' }}
      _active={{ backgroundColor: 'black' }}
      _focus={{ ouline: 'none' }}
      onClick={props.onClick}
    >
      <VisuallyHidden>삭제</VisuallyHidden>
      <TrashCanIcon />
    </Button>
  );
};

export default DeleteButton;
