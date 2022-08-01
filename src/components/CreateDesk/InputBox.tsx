import type { MouseEventHandler } from 'react';
import {
  Box,
  Flex,
  FormLabel,
  FormHelperText,
  FormControl,
  RequiredIndicator,
} from '@chakra-ui/react';

import DeleteButton from '@/components/CreateDesk/DeleteButton';

interface Props {
  label: string;
  for?: string;
  helperText?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
  isDeletable?: boolean;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
}

const InputBox = (props: Props) => {
  return (
    <FormControl isRequired={props.isRequired} p="10px 0">
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
        {props.isDeletable && <DeleteButton onClick={props.onDelete} />}
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
