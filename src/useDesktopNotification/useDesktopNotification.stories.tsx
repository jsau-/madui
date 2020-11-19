import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useDesktopNotification } from '.';
import { Button } from '../Button';
import { Text } from '../Text';

export default {
  title: 'Hooks/Notifications/useDesktopNotifications',
} as Meta;

const Example = () => {
  const {
    permissionGranted,
    requestPermission,
    show,
    supported,
  } = useDesktopNotification();

  const showNotification = () => show('Hello, world!');

  return (
    <React.Fragment>
      <Text>Supported? {supported ? 'Yes' : 'No'}</Text>
      <Text>Have permission? {permissionGranted ? 'Yes' : 'No'}</Text>
      <Button disabled={permissionGranted} onClick={requestPermission}>
        Request permissions
      </Button>
      <Button disabled={!permissionGranted} onClick={showNotification}>
        Show notification
      </Button>
    </React.Fragment>
  );
};

const Template: Story = () => <Example />;

export const Default = Template.bind({});
