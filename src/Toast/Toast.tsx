import clsx from 'clsx';
import React from 'react';
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import { useStyles } from './Toast.styles';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Paper } from '../Paper';
import { LinearProgress } from '../LinearProgress';
import { Text } from '../Text';
import { Color } from '../types/Color';

const getDefaultIconForColor = (color: Color) => {
  if ('error' === color) {
    return (
      <Icon color="error">
        <AlertCircle />
      </Icon>
    );
  }

  if ('warning' === color) {
    return (
      <Icon color="warning">
        <AlertTriangle />
      </Icon>
    );
  }

  if ('success' === color) {
    return (
      <Icon color="success">
        <CheckCircle />
      </Icon>
    );
  }

  return (
    <Icon color={color}>
      <Info />
    </Icon>
  );
};

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Record<string, string>;
  color?: Color;
  /**
   * Value between 0.0f and 1.0f representing how close the toast is to
   * automatic dismissal, with 0.0f being the start of its lifetime, and 1.0f
   * being the end.
   */
  expirationProgress?: number;
  icon?: React.ReactNode;
  onDismiss?: () => void;
  title: string;
  subtitle?: string;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  function Toast(props: ToastProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const {
      classes,
      color: defaultColor,
      expirationProgress,
      icon: defaultIcon,
      onDismiss,
      title,
      subtitle,
      ...other
    } = props;

    const styles = useStyles();

    const color = defaultColor || 'primary';

    const icon = defaultIcon ? defaultIcon : getDefaultIconForColor(color);

    return (
      <Paper
        {...other}
        className={clsx(styles.root, classes?.root)}
        elevation="medium"
        ref={forwardedRef}
        role="alert"
      >
        <div className={clsx(styles.content, classes?.content)}>
          {icon && (
            <div className={clsx(styles.icon, classes?.icon)}>{icon}</div>
          )}
          <div className={clsx(styles.text, classes?.text)}>
            {title && (
              <Text className={clsx(styles.title, classes?.title)} inline>
                {title}
              </Text>
            )}
            {subtitle && (
              <Text
                className={clsx(styles.subtitle, classes?.subtitle)}
                inline
                variant="body2"
              >
                {subtitle}
              </Text>
            )}
          </div>
          {onDismiss && (
            <div className={clsx(styles.actions, classes?.actions)}>
              <Button aria-label="Dismiss notification" onClick={onDismiss}>
                <Icon>
                  <X />
                </Icon>
              </Button>
            </div>
          )}
        </div>
        {expirationProgress && (
          <LinearProgress
            className={clsx(styles.progress, classes?.progress)}
            color={color}
            max={1.0}
            value={1.0 - expirationProgress}
          />
        )}
      </Paper>
    );
  },
);
