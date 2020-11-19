import faker from 'faker';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ToastManager, ToastManagerProps } from '.';
import { Toast } from '../Toast';

export default {
  title: 'Components/Notifications/ToastManager',
  component: ToastManager,
} as Meta;

const children = (
  <React.Fragment>
    <Toast title="One" subtitle="One" />
    <Toast title="Two" subtitle="Two" />
    <Toast title={faker.lorem.paragraphs(3)} subtitle="Three" />
  </React.Fragment>
);

export const Default: Story<ToastManagerProps> = args => (
  <ToastManager {...args} />
);
Default.args = {
  children,
};

export const BottomLeft: Story<ToastManagerProps> = args => (
  <ToastManager {...args} />
);
BottomLeft.args = {
  anchorPoint: { x: 'left', y: 'bottom' },
  children,
};

export const BottomRight: Story<ToastManagerProps> = args => (
  <ToastManager {...args} />
);
BottomRight.args = {
  anchorPoint: { x: 'right', y: 'bottom' },
  children,
};
