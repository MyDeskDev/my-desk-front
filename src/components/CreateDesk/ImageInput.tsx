import { Input, Box, FormLabel } from '@chakra-ui/react';
import ImageIcon from '@/icons/image-icon.svg';

//TODO: 스타일 리팩토링
const ImageInput = () => {
  return (
    <Box display="inline-block" w="150px" h="150px">
      <FormLabel
        pos="relative"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#F3F3F3"
        cursor="pointer"
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
        />
      </FormLabel>
    </Box>
  );
};

export default ImageInput;
