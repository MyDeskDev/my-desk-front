import { Box, Flex, Text } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

import type { MouseEventHandler } from 'react';

import DeleteButton from '@/components/CreateDesk/DeleteButton';
import MoveButton from '@/components/CreateDesk/MoveButton';

import { DragTypes } from '@/constants';

export interface Props {
  index: number;
  children?: React.ReactNode;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
}

const ItemTitle = (props: { children?: React.ReactNode }) => {
  return (
    <Text
      as="strong"
      color="orange.500"
      fontSize="2rem"
      fontWeight={700}
      lineHeight="2rem"
    >
      {props.children}
    </Text>
  );
};

const DeskItemInputBox = (props: Props) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: DragTypes.DESK_ITEM,
    item: { id: props.index },
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));

  return (
    <Box
      opacity={isDragging ? 0.5 : 1}
      sx={{
        '& + &': {
          mt: '48px',
        },
      }}
      ref={dragPreview}
    >
      <Flex justifyContent="space-between">
        <ItemTitle>{`아이템 ${props.index + 1}`}</ItemTitle>
        <Flex alignItems="center" gap="8px">
          <DeleteButton onClick={props.onDelete} />
          <MoveButton ref={drag} />
        </Flex>
      </Flex>
      {props.children}
    </Box>
  );
};

export default DeskItemInputBox;
