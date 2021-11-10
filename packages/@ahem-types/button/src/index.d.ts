import { JSXElementConstructor, ElementType, ReactNode } from 'react';
// import { PressEvents } from '@ahem-types/shared';
//
interface ButtonProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean,
  /** The content to display in the button. */
  children?: ReactNode
}

export interface AhemButtonProps<T extends ElementType = 'button'> extends ButtonProps {
  /** The [visual style] of the button. */
  variant: 'cta' | 'overBackground' | 'primary' | 'secondary' | 'negative',
  /** Whether the button should be displayed with a quiet style. */
  isQuiet?: boolean,
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   * @default 'button'
   */
  elementType?: T | JSXElementConstructor<any>
}
