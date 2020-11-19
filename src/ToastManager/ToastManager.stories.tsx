import faker from 'faker';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ToastManager, ToastManagerProps } from '.';
import { Button } from '../Button';
import { ToastProvider } from '../ToastProvider';
import { useToast } from '../useToast';
import { Color } from '../types/Color';

export default {
  title: 'Components/Notifications/ToastManager',
  component: ToastManager,
} as Meta;

const Children = () => {
  const toastContext = useToast();

  const createToast = (color?: Color) =>
    toastContext.add({
      color,
      lifetimeMs: 1000,
      title: faker.lorem.words(3),
      subtitle: faker.lorem.words(10),
    });

  return (
    <React.Fragment>
      <Button onClick={() => createToast('primary')}>Add primary toast</Button>
      <Button onClick={() => createToast('error')}>Add error toast</Button>
      <Button onClick={() => createToast('warning')}>Add warning toast</Button>
      <Button onClick={() => createToast('success')}>Add success toast</Button>
    </React.Fragment>
  );
};

export const Template: Story<ToastManagerProps> = args => (
  <ToastProvider>
    <ToastManager {...args} />
    <Children />
  </ToastProvider>
);

export const Default = Template.bind({});

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  anchorPoint: { x: 'left', y: 'bottom' },
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  anchorPoint: { x: 'right', y: 'bottom' },
};
