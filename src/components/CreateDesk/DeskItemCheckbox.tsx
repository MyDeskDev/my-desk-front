import React from 'react';
import {
  FormLabel,
  VisuallyHiddenInput,
  useCheckbox,
  Flex,
  Text,
} from '@chakra-ui/react';

import CheckIcon from '@/icons/check-icon.svg';

interface Props {
  children?: React.ReactNode;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const DeskItemCheckbox = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { children, ...rest } = props;

    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(rest);

    return (
      <FormLabel display="inline-flex" margin="0" {...htmlProps}>
        <VisuallyHiddenInput {...getInputProps()} ref={ref} />
        <Flex
          w="20px"
          h="20px"
          mr="6px"
          border="2px solid #000000"
          borderRadius="4px"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          {...getCheckboxProps()}
        >
          {state.isChecked && <CheckIcon />}
        </Flex>
        <Text
          as="span"
          display="inline-block"
          color="#575757"
          fontSize="1.6rem"
          fontWeight={500}
          lineHeight="2rem"
          {...getLabelProps()}
        >
          {children}
        </Text>
      </FormLabel>
    );
  }
);

DeskItemCheckbox.displayName = 'DeskItemCheckbox';

export default DeskItemCheckbox;
