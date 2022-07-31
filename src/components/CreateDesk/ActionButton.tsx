import { Button } from '@chakra-ui/react';
import type { ButtonProps } from '@chakra-ui/react';

type Props = Pick<
  ButtonProps,
  'h' | 'bgColor' | 'fontSize' | 'children' | 'onClick' | 'type'
>;

const ActionButton = (props: Props) => {
  const { h = '50px', bgColor = 'black', fontSize = '1.8rem' } = props;

  return (
    <Button
      h={h}
      bgColor={bgColor}
      border="3px solid #000000"
      borderRadius="0"
      color="#FFFFFF"
      fontSize={fontSize}
      fontWeight="700"
      lineHeight="2.4rem"
      flex="1"
      type={props.type}
      _hover={{
        bgColor,
      }}
      _focus={{
        bgColor,
      }}
      _active={{
        bgColor,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default ActionButton;
