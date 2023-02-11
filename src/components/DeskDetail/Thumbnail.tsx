import { Image, Box } from '@chakra-ui/react';

export interface Props {
  src: string;
  alt?: string;
}

const DeskThumbnail = (props: Props) => {
  return (
    <Box maxW="460px">
      <Image
        src={props.src}
        alt={props.alt}
        w="100%"
        h="100%"
        objectFit="cover"
      />
    </Box>
  );
};

export default DeskThumbnail;
