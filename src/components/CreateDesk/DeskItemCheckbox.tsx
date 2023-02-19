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
      <FormLabel
        display="inline-flex"
        margin="0"
        alignItems="center"
        {...htmlProps}
      >
        <VisuallyHiddenInput {...getInputProps()} ref={ref} />
        <Flex
          w="24px"
          h="24px"
          mr="8px"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          {...getCheckboxProps()}
          bgColor={state.isChecked ? '#FF6712' : '#F3F3F3'}
        >
          {
            <CheckIcon
              style={{ color: state.isChecked ? '#FFFFFF' : '#E1E1E1' }}
            />
          }
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
