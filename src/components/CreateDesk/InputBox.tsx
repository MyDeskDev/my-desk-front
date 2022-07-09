import {
  Box,
  Flex,
  FormLabel,
  Button,
  FormHelperText,
  FormControl,
  RequiredIndicator,
  VisuallyHidden,
} from '@chakra-ui/react';

import TrashCanIcon from '@/icons/trash-can-icon.svg';

interface Props {
  label: string;
  for?: string;
  helperText?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
  isDeletable?: boolean;
}

const InputBox = (props: Props) => {
  return (
    <FormControl isRequired p="5px 0">
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
        {props.isDeletable && (
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
          >
            <VisuallyHidden>삭제</VisuallyHidden>
            <TrashCanIcon />
          </Button>
        )}
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
