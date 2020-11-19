import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
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

const INTERVAL_UPDATE_PROGRESS_MS = 100;

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
  icon?: React.ReactNode;
  lifetimeMs?: number;
  onDismiss?: () => void;
  title: string;
  subtitle?: string;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  function Toast(props: ToastProps, forwardedRef: React.Ref<HTMLDivElement>) {
    const {
      classes,
      color: defaultColor,
      icon: defaultIcon,
      lifetimeMs,
      onDismiss,
      title,
      subtitle,
      ...other
    } = props;

    /*
     * TODO: Progress bars should just accept a fixed time length,
     * and tell us when they've finished. That way we'll be able to
     * callback up to here and remove the toast once the presented
     * animation actually finishes.
     *
     * @see `src/ToastProvider/ToastProvider.tsx`
     */
    const [lifetimeRemainingMs, setLifetimeRemainingMs] = useState(
      () => lifetimeMs || null,
    );

    useEffect(() => {
      if (0 < (lifetimeRemainingMs || 0)) {
        setTimeout(() => {
          setLifetimeRemainingMs(
            currentLifetimeRemainingMs =>
              (currentLifetimeRemainingMs || 0) - INTERVAL_UPDATE_PROGRESS_MS,
          );
        }, INTERVAL_UPDATE_PROGRESS_MS);
      }
    }, [lifetimeRemainingMs]);

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
        {null !== lifetimeRemainingMs && (
          <LinearProgress
            className={clsx(styles.progress, classes?.progress)}
            color={color}
            max={lifetimeMs}
            value={lifetimeRemainingMs}
          />
        )}
      </Paper>
    );
  },
);
