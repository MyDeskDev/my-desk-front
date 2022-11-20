import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Box,
  Flex,
} from '@chakra-ui/react';

const DeskCardSkeleton = () => {
  return (
    <Box>
      <Box
        position="relative"
        overflow="hidden"
        pt="251px"
        borderRadius="20px 20px 0 0"
      >
        <Skeleton
          position="absolute"
          top="50%"
          left="50%"
          w="100%"
          h="100%"
          transform="translate(-50%, -50%)"
        />
      </Box>
      <Flex h="80px" mt="-36px" justifyContent="center" zIndex={1}>
        <SkeletonCircle w="80px" h="80px" />
      </Flex>
      <Box p="15px 49px 49px">
        <SkeletonText noOfLines={2} skeletonHeight="1.6rem" spacing="0.4rem" />
      </Box>
    </Box>
  );
};

export default DeskCardSkeleton;
