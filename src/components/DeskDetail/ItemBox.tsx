import { Box, Flex, Text, Link } from '@chakra-ui/react';

import DeskStoryImage from '@/components/DeskDetail/DeskStoryImage';

import type { DeskItem } from '@/api/desk';

export interface Props {
  item: DeskItem;
}

const ItemBox = (props: Props) => {
  const { item } = props;

  const itemNameStyle = {
    color: '#B0B0B0',
    fontSize: '1.2rem',
    fontWeight: 400,
    lineHeight: '2.2rem',
  };

  return (
    <Flex flexDir="column" gap="6px">
      <Text
        color="#B0B0B0"
        fontSize="1.4rem"
        fontWeight={300}
        lineHeight="1.8rem"
      >
        {item.story}
      </Text>
      <DeskStoryImage src={item.imgUrl} />
      <Flex justifyContent="space-between">
        <Flex gap="10px">
          {item.isRecommended ? (
            <Text as="span" {...itemNameStyle}>
              ★추천
            </Text>
          ) : (
            <></>
          )}
          {item.isFavorite ? (
            <Text as="span" {...itemNameStyle}>
              ♥애장
            </Text>
          ) : (
            <></>
          )}
        </Flex>
        {item.url ? (
          <Link
            href={item.url}
            target="_blank"
            textDecor="underline"
            textAlign="end"
            {...itemNameStyle}
          >
            {item.name}
          </Link>
        ) : (
          <Text as="span" textAlign="end" {...itemNameStyle}>
            {item.name}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default ItemBox;
