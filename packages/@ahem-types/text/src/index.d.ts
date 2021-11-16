import { DOMProps, StyleProps } from '@ahem-types/shared';
import { ReactNode } from 'react';

export interface AhemTextProps extends DOMProps, StyleProps {
  /**
   * Text content.
   */
  children: ReactNode;
}
