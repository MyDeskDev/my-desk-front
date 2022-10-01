import { Flex, Box, Text } from '@chakra-ui/react';

const DeskTypeContainer = () => {
  const keyTextProps = {
    color: '#B7B7B7',
    fontSize: '1.4rem',
    fontWeight: '500',
    lineHeight: '1.4rem',
  };

  const valueTextProps = {
    fontSize: '1.4rem',
    fontWeight: '500',
    lineHeight: '1.4rem',
  };

  return (
    <Flex
      h="102px"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      bgColor="#F7F7F7"
      gap="10px"
    >
      <Box textAlign="center">
        <Text {...keyTextProps} as="span">
          공간형태 :
        </Text>
        <Text {...valueTextProps} as="span" color="#2085FB">
          공용 사무공간
        </Text>
      </Box>
      <Box textAlign="center">
        <Text {...keyTextProps} as="span">
          컨셉스타일 :
        </Text>
        <Text {...valueTextProps} as="span" color="#2D2D2D">
          미니멀&amp;심플
        </Text>
      </Box>
    </Flex>
  );
};

export default DeskTypeContainer;
