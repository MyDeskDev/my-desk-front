import { Textarea } from '@chakra-ui/react';
import React, { ChangeEventHandler } from 'react';

interface Props {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

const CustomTextarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (props, ref) => {
    return (
      // TODO: auto resizing 적용
      <Textarea
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        p="10px 20px"
        border="0"
        borderRadius="0"
        bgColor="#F3F3F3"
        resize="none"
        fontSize="1.6rem"
        lineHeight="2.4rem"
        _placeholder={{ color: '#C4C4C4' }}
        onChange={props.onChange}
        ref={ref}
      />
    );
  }
);

CustomTextarea.displayName = 'CustomTextarea';

export default CustomTextarea;
