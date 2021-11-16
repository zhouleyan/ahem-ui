import { StyleProps, FocusableProps, PressEvents } from '@ahem-types/shared';
import { ElementType, JSXElementConstructor, ReactNode } from 'react';

interface ButtonProps extends PressEvents, FocusableProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
}

export interface AriaButtonElementTypeProps<T extends ElementType = 'button'> {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   * @default 'button'
   */
  elementType?: T | JSXElementConstructor<any>;
}

export interface LinkButtonProps<T extends ElementType = 'button'> extends AriaButtonElementTypeProps<T> {
  /** A URL to link to if elementType="a". */
  href?: string;
  /** The target window for the link. */
  target?: string;
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string;
}

export interface AhemButtonProps<T extends ElementType = 'button'> extends ButtonProps, LinkButtonProps<T>, StyleProps {
  /** The [visual style](https://spectrum.adobe.com/page/button/#Options) of the button. */
  variant: 'cta' | 'overBackground' | 'primary' | 'secondary' | 'negative';
  /** Whether the button should be displayed with a quiet style. */
  isQuiet?: boolean;
}
