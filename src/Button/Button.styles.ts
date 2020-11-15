import { makeStyles } from '../styles/makeStyles';
import { Theme } from '../types/Theme';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    grey: {
      '&$outlined': {
        '&:hover': {
          borderColor: theme.palette.grey[600],
        },
        '&:active': {
          borderColor: theme.palette.grey[700],
        },
        borderColor: theme.palette.grey[400],
        color: theme.palette.grey[800],
      },
      '&$solid': {
        '&:hover': {
          backgroundColor: theme.palette.grey[600],
        },
        '&:active': {
          backgroundColor: theme.palette.grey[700],
        },
        backgroundColor: theme.palette.grey[500],
        color: theme.palette.grey[0],
      },
    },
    outlined: {
      borderWidth: 1,
    },
    primary: {
      '&$outlined': {
        '&:hover': {
          borderColor: theme.palette.primary[600],
        },
        '&:active': {
          borderColor: theme.palette.primary[700],
        },
        borderColor: theme.palette.primary[400],
        color: theme.palette.primary[400],
      },
      '&$solid': {
        '&:hover': {
          backgroundColor: theme.palette.primary[600],
        },
        '&:active': {
          backgroundColor: theme.palette.primary[700],
        },
        backgroundColor: theme.palette.primary[400],
        color: theme.palette.grey[0],
      },
    },
    root: {
      borderRadius: theme.border.radius,
      borderStyle: 'solid',
      fontFamily: theme.text.fontFamily,
      fontSize: theme.text.sizes.body1,
      outline: 'none',
      padding: theme.spacing.unit,
      textTransform: 'capitalize',
    },
    solid: {
      borderWidth: 0,
    },
  }),
  'Button',
);
