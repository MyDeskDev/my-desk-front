import { Flex, Image } from '@chakra-ui/react';

export interface Props {
  src: string;
  alt?: string;
}

const UserProfileImage = (props: Props) => {
  return (
    <Flex mt="-30px" justifyContent="center">
      <Image
        src={props.src}
        alt={props.alt}
        w="80px"
        h="80px"
        borderRadius="50%"
        zIndex="1"
      />
    </Flex>
  );
};

export default UserProfileImage;
