import React from 'react';
import { DOMRef } from '@ahem-types/shared';
import { AhemTextProps } from '@ahem-types/text';
import { useDOMRef } from '@ahem-components/utils';
import { filterDOMProps } from '@ahem-components/utils';


function Text(props: AhemTextProps, ref: DOMRef<HTMLDivElement>) {
  const {
    children,
    ...otherProps
  } = props;

  const domRef = useDOMRef(ref);

  return (
    <span {...filterDOMProps(otherProps)} ref={domRef}>
      {children}
    </span>
  );
}

/**
 * TODO: Add description of component here.
 */
const _Text = React.forwardRef(Text);
export { _Text as Text };
