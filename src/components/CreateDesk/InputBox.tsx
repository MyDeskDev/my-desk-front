import type { MouseEventHandler } from 'react';
import {
  Box,
  Flex,
  FormLabel,
  FormHelperText,
  FormControl,
  RequiredIndicator,
} from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

import DeleteButton from '@/components/CreateDesk/DeleteButton';
import MoveButton from '@/components/CreateDesk/MoveButton';

import { DragTypes } from '@/constants';

interface Props {
  label: string;
  for?: string;
  helperText?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
  isDeletable?: boolean;
  isMovable?: boolean;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
}

const InputBox = (props: Props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragTypes.DESK_STORY,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <FormControl
      isRequired={props.isRequired}
      p="10px 0"
      opacity={isDragging ? 0.5 : 1}
    >
      <Flex h="3rem" alignItems="center" justifyContent="space-between">
        <FormLabel
          htmlFor={props.for}
          m="0"
          fontSize="1.6rem"
          requiredIndicator={<></>}
        >
          {props.isRequired && (
            <RequiredIndicator m="0 4px 0 0" color="orange.500">
              *
            </RequiredIndicator>
          )}
          {props.label}
        </FormLabel>
        <Flex alignItems="center" gap="8px">
          {props.isDeletable && <DeleteButton onClick={props.onDelete} />}
          {props.isMovable && <MoveButton ref={drag} />}
        </Flex>
      </Flex>
      {props.helperText && (
        <FormHelperText mt="6px" color="#A5A5A5" fontSize="1.4rem">
          {props.helperText}
        </FormHelperText>
      )}
      <Box mt="10px">{props.children}</Box>
    </FormControl>
  );
};

export default InputBox;
