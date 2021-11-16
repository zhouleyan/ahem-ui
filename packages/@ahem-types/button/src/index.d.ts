import { DOMProps, StyleProps } from '@ahem-types/shared';

export interface ButtonProps {
  value?: any,
  defaultValue?: any,
  onChange?: any
}

export interface AhemButtonProps extends ButtonProps, DOMProps, StyleProps {

}
