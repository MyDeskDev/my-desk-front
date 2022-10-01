import { Flex } from '@chakra-ui/react';

const DeskSummary = () => {
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
        “내가 일하고 있는 책상은 나를 대변하는 소울을 가진 나와의 동반자다.
        동반자와 함께 매일 하루를 지낸다.”
      </Flex>
    </Flex>
  );
};

export default DeskSummary;
