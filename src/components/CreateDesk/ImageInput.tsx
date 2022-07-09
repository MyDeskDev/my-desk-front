import { Input, Box } from '@chakra-ui/react';
import ImageIcon from '@/icons/image-icon.svg';

const ImageInput = () => {
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
        />
      </Box>
    </Box>
  );
};

export default ImageInput;
