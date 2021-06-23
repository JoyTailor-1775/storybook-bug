export type ButtonVisualType = 'contained' | 'opaque' | 'outlined' | 'text' | 'icon';
export type ButtonSizeType = 'small' | 'medium' | 'large';
export type ButtonColorType = 'primary' | 'default' | 'custom';

export interface ButtonProps {
  children: JSX.Element | string;
  /**
   * A callback that is called after the button is clicked.
   */
  onClick?: (e?: React.SyntheticEvent) => void;
  /**
   * Defines the color theme of the button, the whole list of all the colors you may find below.
   */
  color?: ButtonColorType;
  /**
   * Allows to make the button of the passed color, applied only to the button of 'contained'
   * visual type and 'custom' color type.
   */
  customColor?: string;
  /**
   * Applies the passed color to the text of the component.
   */
  customTextColor?: string;
  /**
   * Defines the button visual type. The whole list of all the button visual types may be found
   * in the table below.
   */
  type?: ButtonVisualType;
  /**
   * Defines the size of the button.
   */
  size?: ButtonSizeType;
  /**
   * Resembled the html5 button-tag property - "type", may accept 'submit', 'reset' or 'button' values.
   */
  htmlType?: 'submit' | 'reset' | 'button';
  /**
   * Resembled the html5 button-tag property - "form", may accept any form id, to be associated with the form.
   */
  htmlForm?: string;
  /**
   * HTML5 "disabled" attribute.
   */
  disabled?: boolean;
  /**
   * Defines the width of the button.
   */
  width?: string;
  /**
   * Allows to pass custom css classes to the component.
   */
  className?: string;

  [key: string]: unknown; // THIS IS CAUSING THE BUG!!!
}
