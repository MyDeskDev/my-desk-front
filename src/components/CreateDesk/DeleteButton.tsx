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
      backgroundColor="transparent"
      outline="none"
      _focus={{ ouline: 'none' }}
      onClick={props.onClick}
    >
      <VisuallyHidden>삭제</VisuallyHidden>
      <TrashCanIcon style={{ color: '#575757' }} />
    </Button>
  );
};

export default DeleteButton;
