import faker from 'faker';
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ToastManager, ToastManagerProps } from '.';
import { Button } from '../Button';
import { Toast } from '../Toast';
import { ToastProvider } from '../ToastProvider';
import { Switch } from '../Switch';
import { useToast } from '../useToast';
import { Color } from '../types/Color';
import { Toast as ToastType } from '../types/Toast';

export default {
  title: 'Components/Notifications/ToastManager',
  component: ToastManager,
} as Meta;

const createCustomToastComponent = (toast: ToastType): React.ReactNode => (
  <Toast
    color={toast.color}
    disableDismissal={toast.disableDismissal}
    disableProgress={toast.disableProgress}
    icon={toast.icon}
    lifetimeMs={toast.lifetimeMs}
    key={toast.key}
    onDismiss={() => {}}
    title={`My custom ${toast.title}`}
    subtitle={`My custom ${toast.subtitle}`}
  />
);

const Children = () => {
  const toastContext = useToast();

  const [disableProgress, setDisableProgress] = useState(false);
  const [disableDismissal, setDisableDismissal] = useState(false);

  const createToast = (color?: Color) =>
    toastContext.add({
      color,
      disableDismissal,
      disableProgress,
      lifetimeMs: 5000,
      title: faker.lorem.words(3),
      subtitle: faker.lorem.words(10),
    });

  return (
    <React.Fragment>
      <label>Disable progress</label>
      <Switch
        checked={disableProgress}
        onChange={event => setDisableProgress(event.target.checked)}
      />
      <label>Disable dismissal</label>
      <Switch
        checked={disableDismissal}
        onChange={event => setDisableDismissal(event.target.checked)}
      />
      <Button onClick={() => createToast('primary')}>Add primary toast</Button>
      <Button onClick={() => createToast('error')}>Add error toast</Button>
      <Button onClick={() => createToast('warning')}>Add warning toast</Button>
      <Button onClick={() => createToast('success')}>Add success toast</Button>
    </React.Fragment>
  );
};

const Template: Story<ToastManagerProps> = args => (
  <ToastProvider>
    <ToastManager {...args} />
    <Children />
  </ToastProvider>
);

export const Default = Template.bind({});

export const CustomRender = Template.bind({});
CustomRender.args = {
  customRender: createCustomToastComponent,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  anchorPoint: { x: 'left', y: 'bottom' },
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  anchorPoint: { x: 'right', y: 'bottom' },
};
