import React from 'react';
import { AhemButtonProps } from '@ahem-types/button';

function Button(props: AhemButtonProps) {
  const {
    elementType: ElementType = 'button',
    children
  } = props;
  return (
    <ElementType>
      {children}
    </ElementType>
  );
}

const _Button = React.forwardRef(Button);
export { _Button as Button };
