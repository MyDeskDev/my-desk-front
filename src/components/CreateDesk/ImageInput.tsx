import { Input, Box } from '@chakra-ui/react';
import ImageIcon from '@/icons/image-icon.svg';
import React, { ChangeEventHandler } from 'react';

export interface Props {
  value?: string | number | ReadonlyArray<string>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const ImageInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <Box display="inline-block" w="150px" h="150px">
      <Box
        role="button"
        pos="relative"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#F3F3F3"
      >
        <ImageIcon />
        <Input
          type="file"
          opacity="0"
          pos="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          h="100%"
          cursor="pointer"
          value={props.value}
          onChange={props.onChange}
          ref={ref}
        />
      </Box>
    </Box>
  );
});

ImageInput.displayName = 'ImageInput';

export default ImageInput;
