import { Flex } from '@chakra-ui/react';

export interface Props {
  summary: string;
}

const DeskSummary = (props: Props) => {
  return (
    <Flex padding="30px 20px" justifyContent="center">
      <Flex
        maxW="335px"
        padding="20px 42px"
        border="3px solid #EFEFEF"
        borderRadius="20px 20px 0px 0px"
        justifyContent="center"
        color="#FF6712"
        fontSize="1.6rem"
        fontWeight="600"
        lineHeight="2.4rem"
        textAlign="center"
      >
        {props.summary}
      </Flex>
    </Flex>
  );
};

export default DeskSummary;
