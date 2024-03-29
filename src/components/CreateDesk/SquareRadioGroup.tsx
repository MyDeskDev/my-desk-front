import { HStack, useRadioGroup } from '@chakra-ui/react';
import type { RadioGroupProps } from '@chakra-ui/react';
import React from 'react';

export type SquareRadioGroupProps = Pick<
  RadioGroupProps,
  | 'name'
  | 'defaultValue'
  | 'onChange'
  | 'onBlur'
  | 'value'
  | 'maxW'
  | 'maxWidth'
> & { children?: React.ReactNode };

const SquareRadioGroup = React.forwardRef<
  HTMLDivElement,
  SquareRadioGroupProps
>((props, ref) => {
  const { children, maxW, maxWidth, ...rest } = props;

  const currentMaxWidth = maxW ?? maxWidth;

  const { getRootProps, getRadioProps } = useRadioGroup(rest);

  const group = getRootProps();

  return (
    <HStack {...group} w="100%" spacing="4px" ref={ref} maxW={currentMaxWidth}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child,
            getRadioProps({ value: child.props.value })
          );
        }

        return child;
      })}
    </HStack>
  );
});

SquareRadioGroup.displayName = 'SquareRadioGroup';

export default SquareRadioGroup;
