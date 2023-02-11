import { Box, Image } from '@chakra-ui/react';

export interface Props {
  src: string;
  alt?: string;
}

const DeskStoryImage = (props: Props) => {
  return <Image src={props.src} alt={props.alt ?? ''} w="100%" />;
};

export default DeskStoryImage;
