import { useDrop } from 'react-dnd';

export interface Props {
  index: number;
  children?: React.ReactNode;
  onDrop?: (from: number, to: number) => void;
}

import { DragTypes } from '@/constants';

const InputBoxDropzone = (props: Props) => {
  const [_, drop] = useDrop(() => ({
    accept: DragTypes.DESK_STORY,
    drop: (item: { index?: number }) => {
      if (item.index == null) {
        return;
      }

      console.log(`from: ${item.index}, to: ${props.index}`);

      props.onDrop ? props.onDrop(item.index, props.index) : undefined;
    },
  }));

  return <div ref={drop}>{props.children}</div>;
};

export default InputBoxDropzone;
