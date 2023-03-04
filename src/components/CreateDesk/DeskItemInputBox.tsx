import { Box, Flex, Text } from '@chakra-ui/react';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';

import type { MouseEventHandler } from 'react';

import DeleteButton from '@/components/CreateDesk/DeleteButton';
import MoveButton from '@/components/CreateDesk/MoveButton';

import { DragTypes } from '@/constants';

export interface Props {
  index: number;
  children?: React.ReactNode;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  onDrop?: (from: number, to: number) => void;
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
  const boxRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: DragTypes.DESK_ITEM,
    item: { index: props.index },
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));

  const [_, drop] = useDrop(() => ({
    accept: DragTypes.DESK_ITEM,
    drop: (item: { index: number }) => {
      props.onDrop ? props.onDrop(item.index, props.index) : undefined;
    },
  }));

  drop(dragPreview(boxRef));

  return (
    <Box
      opacity={isDragging ? 0.5 : 1}
      sx={{
        '& + &': {
          mt: '48px',
        },
      }}
      ref={boxRef}
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
