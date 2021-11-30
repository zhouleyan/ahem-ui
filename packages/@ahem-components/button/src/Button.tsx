import { AhemButtonProps } from '@ahem-types/button';
import { FocusableRef } from '@ahem-types/shared';
import React, { ElementType, ReactElement } from 'react';
import { useFocusableRef } from '@ahem-components/utils';
import { Text } from '@ahem-components/text';

import './index.less';

function Button<T extends ElementType = 'button'>(props: AhemButtonProps<T>, ref: FocusableRef<HTMLElement>) {
  let {
    elementType: ElementType = 'button',
    children,
    ...otherProps
  } = props;
  const domRef = useFocusableRef(ref);
  return (
    <ElementType className="ahem-button" ref={domRef} {...otherProps}>
      {typeof children === 'string'
        ? <Text>{children}</Text>
        : children}
    </ElementType>
  );
}


/**
 * Buttons allow users to perform an action or to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
const _Button = React.forwardRef(Button) as <T extends ElementType = 'button'>(props: AhemButtonProps<T> & {ref?: FocusableRef<HTMLElement>;}) => ReactElement;
export { _Button as Button };
