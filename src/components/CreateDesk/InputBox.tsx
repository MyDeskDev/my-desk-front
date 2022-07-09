import { Box, Flex, FormLabel, Text, Button } from '@chakra-ui/react';

interface Props {
  label: string;
  for?: string;
  detailExplanation?: string;
  required?: boolean;
  children?: React.ReactNode;
  deletable?: boolean;
}

const InputBox = (props: Props) => {
  return (
    <Box>
      <Flex>
        <FormLabel htmlFor={props.for}>
          {props.required && <Text as="span">*</Text>}
          {props.label}
        </FormLabel>
        {props.deletable && <Button>삭제</Button>}
      </Flex>
      {props.detailExplanation && <Text>{props.detailExplanation}</Text>}
      <Box>{props.children}</Box>
    </Box>
  );
};

export default InputBox;
