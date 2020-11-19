import { Color } from '../Color';

export type Toast = {
  color?: Color;
  /**
   * Don't allow manual dismissal of this toast.
   */
  disableDismissal?: boolean;
  /**
   * Don't show progress indicators.
   */
  disableProgress?: boolean;
  /**
   * Custom icon to display for the toast.
   */
  icon?: React.ReactNode;
  /**
   * How long the toast should present itself for before automatic removal.
   */
  lifetimeMs?: number;
  /**
   * Unique identifier for the toast, used as React keys.
   */
  key?: string | number;
  /**
   * Arbitrary metadata that can be used when overriding how to generate
   * individual toast components.
   */
  metadata?: unknown;
  title: string;
  subtitle?: string;
};
