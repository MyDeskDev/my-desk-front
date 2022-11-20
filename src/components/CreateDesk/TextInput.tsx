import { Input } from '@chakra-ui/react';
import type { InputProps } from '@chakra-ui/react';
import React from 'react';

type Props = Pick<InputProps, 'placeholder' | 'onChange' | 'name' | 'onBlur'>;

const TextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { placeholder, ...rest } = props;
  return (
    <Input
      {...rest}
      placeholder={placeholder}
      h="50px"
      p="0 20px"
      fontSize="1.6rem"
      lineHeight="2.4rem"
      border="0"
      borderRadius="0"
      backgroundColor="#F3F3F3"
      sx={{
        '&::placeholder': {
          overflow: 'visible',
          color: '#C4C4C4',
        },
      }}
      ref={ref}
    />
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
