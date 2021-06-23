import React from 'react';
import clsx from 'clsx';
import capitalize from '../helpers/capitalize';
import { ButtonProps } from '../types/Button';
import { createStyles } from './styles';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    onClick,
    type = 'contained',
    size = 'small',
    color = 'default',
    htmlType = 'button',
    htmlForm,
    disabled,
    className,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customColor,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customTextColor,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    width,
    ...rest
  } = props;
  const classes = createStyles(props);
  return (
    <button
      onClick={onClick}
      // Eslint does not recognize dynamic html button type attribute assigning for some reason.
      // eslint-disable-next-line react/button-has-type
      type={htmlType}
      form={htmlForm}
      disabled={disabled}
      className={clsx(
        classes.button,
        // Applying color classes if there is no disabled prop activated.
        disabled !== true &&
          classes[
            classes[`${type}${capitalize(color)}`]
              ? `${type}${capitalize(color)}`
              : 'containedPrimary'
          ],
        // Apply default disabled styles if the button is inactivated.
        disabled === true && classes.inactiveButton,
        // Apply the 'text' type button css styles if the button is of the 'text' type.
        type === 'text' && classes[`text${capitalize(size)}`],
        // Apply the sizes classes only if button is not of the 'text' or 'icon' type.
        type !== 'text' && type !== 'icon' && classes[size],
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});
