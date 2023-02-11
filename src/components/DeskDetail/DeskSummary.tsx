import { Box } from '@chakra-ui/react';

export interface Props {
  summary: string;
}

const DeskSummary = (props: Props) => {
  return (
    <Box
      pl="16px"
      borderLeft="2px solid #E1DBD2"
      color="#A99B8D"
      fontSize="1.6rem"
      fontWeight="600"
      lineHeight="3rem"
    >
      {props.summary}
    </Box>
  );
};

export default DeskSummary;
