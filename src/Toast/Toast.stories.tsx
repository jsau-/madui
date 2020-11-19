import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Toast, ToastProps } from '.';

export default {
  title: 'Components/Notifications/Toast',
  component: Toast,
} as Meta;

export const Default: Story<ToastProps> = args => <Toast {...args} />;
Default.args = {
  title: 'My toast!',
  onDismiss: undefined,
};

export const DisabledDismissal: Story<ToastProps> = args => <Toast {...args} />;
DisabledDismissal.args = {
  disableDismissal: true,
  title: 'My toast!',
};

export const WithSubtitle: Story<ToastProps> = args => <Toast {...args} />;
WithSubtitle.args = {
  title: 'My toast!',
  subtitle: 'My subtitle.',
};

export const WithLifetime: Story<ToastProps> = args => <Toast {...args} />;
WithLifetime.args = {
  lifetimeMs: 2000,
  title: 'My toast!',
  subtitle: 'My subtitle.',
};

export const Error: Story<ToastProps> = args => <Toast {...args} />;
Error.args = {
  color: 'error',
  lifetimeMs: 2000,
  title: 'My toast!',
  subtitle: 'My subtitle.',
};

export const Warning: Story<ToastProps> = args => <Toast {...args} />;
Warning.args = {
  color: 'warning',
  lifetimeMs: 2000,
  title: 'My toast!',
  subtitle: 'My subtitle.',
};

export const Success: Story<ToastProps> = args => <Toast {...args} />;
Success.args = {
  color: 'success',
  lifetimeMs: 2000,
  title: 'My toast!',
  subtitle: 'My subtitle.',
};
