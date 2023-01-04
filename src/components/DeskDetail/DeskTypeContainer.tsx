import { Flex, Box, Text } from '@chakra-ui/react';

import type { DeskStyle } from '@/types';

export interface Props {
  desk: {
    roomType: string;
    deskStyle: DeskStyle;
  };
}

const toDeskStyleText = (deskStyle: DeskStyle) => {
  const deskStyleTextMap: { [K in DeskStyle]: string } = {
    NATURAL: '내추럴',
    MODERN: '모던',
    NORTH_EUROPE: '북유럽',
    VINTAGE: '빈티지&레트로',
    MINIMAL: '미니멀&심플',
    LOVELY: '러블리&로맨틱',
    CLASSIC: '클래식&엔틱',
    FRENCH: '프렌치&프로방스',
    INDUSTRIAL: '인터스트리얼',
    KOREAN: '한국&아시아',
    UNIQUE: '유니크',
  };

  return deskStyleTextMap[deskStyle];
};

const DeskTypeContainer = (props: Props) => {
  const { desk } = props;

  const deskStyleText = toDeskStyleText(desk.deskStyle);

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
      maxWidth="960px"
      h="102px"
      margin="0 auto"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      bgColor="#F7F7F7"
      gap="10px"
    >
      <Box textAlign="center">
        <Text {...keyTextProps} as="span">
          공간형태 :&nbsp;
        </Text>
        <Text {...valueTextProps} as="span" color="#2085FB">
          {desk.roomType}
        </Text>
      </Box>
      <Box textAlign="center">
        <Text {...keyTextProps} as="span">
          컨셉스타일 :&nbsp;
        </Text>
        <Text {...valueTextProps} as="span" color="#2D2D2D">
          {deskStyleText}
        </Text>
      </Box>
    </Flex>
  );
};

export default DeskTypeContainer;
