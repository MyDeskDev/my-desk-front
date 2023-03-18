import { Skeleton, SkeletonText, Box, Flex } from '@chakra-ui/react';

const DeskCardSkeleton = () => {
  return (
    <Box
      minW="315px"
      w={{ base: '100%', md: '315px' }}
      p="18px"
      bgColor="#fff"
      sx={{ aspectRatio: '5 / 6' }}
    >
      <Skeleton height="220px" />
      <Flex justifyContent="space-between" gap="4px" height="16px" mt="20px">
        <Skeleton flex="1" height="100%" />
        <Skeleton flex="0 0 180px" width="180px" height="100%" />
      </Flex>
      <Box mt="14px">
        <SkeletonText noOfLines={3} skeletonHeight="1.3rem" spacing="0.7rem" />
      </Box>
    </Box>
  );
};

export default DeskCardSkeleton;
