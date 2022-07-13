import { Box, Flex, useRadio } from '@chakra-ui/react';

export interface SquareRadioProps {
  value?: string | number;
  children?: React.ReactNode;
}

const SquareRadio = (props: SquareRadioProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" flex="1">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        border="2px solid #C6C6C6"
        justify="center"
        align="center"
        p="13px 20px"
        fontSize="1.6rem"
        lineHeight="2.4rem"
        _checked={{
          borderWidth: '3px',
          borderColor: 'orange.500',
          color: 'orange.500',
        }}
      >
        {props.children}
      </Flex>
    </Box>
  );
};

export default SquareRadio;
