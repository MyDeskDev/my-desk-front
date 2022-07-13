import { Select } from '@chakra-ui/react';

interface Props {
  placeholder?: string;
  children: React.ReactNode;
}

const CustomSelect = (props: Props) => {
  /*
      TODO: Select 스타일 추가 커스텀
        - 선택 전, 후 폰트 스타일 다르게
        - padding-left
        - icon
    */
  return (
    <Select
      placeholder={props.placeholder}
      h="50px"
      border="0"
      borderRadius="0"
      bgColor="#F3F3F3"
      color="black"
      fontSize="1.6rem"
      lineHeight="2rem"
      _selected={{
        color: 'black',
        fontSize: '2rem',
      }}
    >
      {props.children}
    </Select>
  );
};

export default CustomSelect;
