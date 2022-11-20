import { Box, Image } from '@chakra-ui/react';

export interface Props {
  src: string;
  alt?: string;
}

const DeskStoryImage = (props: Props) => {
  return (
    <Box maxW="1200px" margin="0 auto" padding="5px 0">
      <Image src={props.src} alt={props.alt} w="100%" />
    </Box>
  );
};

export default DeskStoryImage;
