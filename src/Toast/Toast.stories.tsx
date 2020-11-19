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

export const WithSubtitle: Story<ToastProps> = args => <Toast {...args} />;
WithSubtitle.args = {
  title: 'My toast!',
  subtitle: 'My subtitle.',
};

export const WithProgress: Story<ToastProps> = args => <Toast {...args} />;
WithProgress.args = {
  expirationProgress: 0.5,
  title: 'My toast!',
  subtitle: 'My subtitle.',
};

export const Error: Story<ToastProps> = args => <Toast {...args} />;
Error.args = {
  color: 'error',
  expirationProgress: 0.5,
  title: 'My toast!',
  subtitle: 'My subtitle.',
};

export const Warning: Story<ToastProps> = args => <Toast {...args} />;
Warning.args = {
  color: 'warning',
  expirationProgress: 0.5,
  title: 'My toast!',
  subtitle: 'My subtitle.',
};

export const Success: Story<ToastProps> = args => <Toast {...args} />;
Success.args = {
  color: 'success',
  expirationProgress: 0.5,
  title: 'My toast!',
  subtitle: 'My subtitle.',
};
