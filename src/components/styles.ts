import { ComponentStylesProps } from 'types/global';
import { createUseStyles } from 'react-jss';
import { ButtonProps } from 'types/Button';
import colors from '../utils/colors'

const styles: ComponentStylesProps<ButtonProps> = {
  button: {
    fontFamily: ['Lato', 'sans-serif'],
    borderRadius: '5px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '0.03rem',
    '&:focus': {
      outline: ['none'],
    },
    width: 'max-content',
    cursor: 'pointer',
  },
  inactiveButton: {
    textTransform: 'uppercase',
    cursor: 'not-allowed',
    backgroundColor: colors.neutral[300],
    border: 'none',
    color: colors.neutral.white,
  },
  withIcons: {
    justifyContent: 'space-between',
  },
  small: (props) => ({
    height: '3.2rem',
    fontSize: '1.2rem',
    lineHeight: '2.0rem',
    padding: '2rem',
    width: props.width,
  }),
  medium: (props) => ({
    height: '3.6rem',
    fontSize: '1.4rem',
    lineHeight: '2.0rem',
    padding: '2rem',
    width: props.width,
  }),
  large: (props) => ({
    minWidth: '20rem',
    height: '4.4rem',
    fontSize: '1.4rem',
    lineHeight: '2rem',
    padding: {
      left: '2.3rem',
      right: '2.3rem',
    },
    width: props.width,
  }),

  // Contained buttons types
  containedPrimary: {
    color: colors.neutral.white,
    backgroundColor: colors.blue[600],
    boxShadow: {
      x: '0rem',
      y: '0.4rem',
      blur: '0.8rem',
      color: 'rgba(0, 0, 0, 0.14)',
    },
    border: `2px solid ${colors.blue[600]}`,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: colors.blue[500],
      borderColor: colors.blue[500],
      color: colors.neutral[100],
    },
  },
  containedDefault: {
    color: colors.neutral[700],
    backgroundColor: colors.neutral[300],
    boxShadow: {
      x: '0px',
      y: '4px',
      blur: '8px',
      color: 'rgba(0, 0, 0, 0.14)',
    },
    border: `2px solid ${colors.neutral[300]}`,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: colors.neutral[200],
      borderColor: colors.neutral[200],
      color: colors.neutral[600],
    },
  },

  containedCustom: (props) => ({
    color: props.customTextColor || colors.neutral.white,
    backgroundColor: props.customColor || colors.blue[600],
    boxShadow: {
      x: '0px',
      y: '4px',
      blur: '8px',
      color: 'rgba(0, 0, 0, 0.14)',
    },
    border: `2px solid ${props.customColor || colors.blue[600]}`,
    textTransform: 'uppercase',
    '&:hover': {
      opacity: '0.7',
      color: colors.neutral[100],
    },
  }),

  // Outlined buttons types
  outlinedPrimary: {
    border: {
      color: colors.blue[600],
      width: '2px',
      style: 'solid',
    },
    textTransform: 'uppercase',
    color: colors.blue[600],
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: colors.blue[600],
      color: colors.neutral.white,
    },
  },
  outlinedDefault: {
    border: {
      color: colors.neutral[300],
      width: '2px',
      style: 'solid',
    },
    textTransform: 'uppercase',
    color: colors.neutral[700],
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: colors.neutral[100],
    },
  },
  outlinedCustom: (props) => ({
    border: {
      color: props.customColor || colors.blue[600],
      width: '2px',
      style: 'solid',
    },
    textTransform: 'uppercase',
    color: props.customColor || colors.blue[600],
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: props.customColor || colors.blue[600],
      color: colors.neutral.white,
    },
  }),

  // Opaque buttons types
  opaquePrimary: {
    border: `2px solid ${colors.blue[100]}`,
    textTransform: 'uppercase',
    color: colors.blue[500],
    backgroundColor: colors.blue[100],
    '&:hover': {
      borderColor: colors.blue[200],
      backgroundColor: colors.blue[200],
      color: colors.blue[600],
    },
  },
  opaqueDefault: {
    border: `2px solid ${colors.neutral[100]}`,
    textTransform: 'uppercase',
    color: colors.neutral[500],
    backgroundColor: colors.neutral[100],
    '&:hover': {
      borderColor: colors.neutral[200],
      backgroundColor: colors.neutral[200],
      color: colors.neutral[600],
    },
  },
};

const createStyles = createUseStyles(styles);

export { createStyles };
