import { HStack, useRadioGroup } from '@chakra-ui/react';
import type { RadioGroupProps } from '@chakra-ui/react';

export type SquareRadioGroupProps = Pick<
  RadioGroupProps,
  'name' | 'children' | 'defaultValue' | 'onChange'
>;

const SquareRadioGroup = (props: SquareRadioGroupProps) => {
  const { children, ...rest } = props;

  const { getRootProps, getRadioProps } = useRadioGroup(rest);

  const group = getRootProps();

  return (
    <HStack {...group} w="100%" spacing="4px">
      {children}
    </HStack>
  );
};

export default SquareRadioGroup;
