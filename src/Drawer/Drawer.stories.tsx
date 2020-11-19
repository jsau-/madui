import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Drawer, DrawerProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Layout/Drawer',
  component: Drawer,
} as Meta;

const ContainerTemplate: Story<DrawerProps> = args => {
  const refContainer = useRef(null);

  return (
    <div ref={refContainer}>
      <Drawer {...args} container={refContainer} />
    </div>
  );
};

const Template: Story<DrawerProps> = args => <Drawer {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Open = Template.bind({});
Open.args = {
  children: <Text>Hello, Drawer!</Text>,
  onClose: () => console.log('Close!'),
  open: true,
};

export const Top = Template.bind({});
Top.args = {
  children: <Text>Hello, Drawer!</Text>,
  onClose: () => console.log('Close!'),
  open: true,
  placement: 'top',
};

export const Left = Template.bind({});
Left.args = {
  children: <Text>Hello, Drawer!</Text>,
  onClose: () => console.log('Close!'),
  open: true,
  placement: 'left',
};

export const Bottom = Template.bind({});
Bottom.args = {
  children: <Text>Hello, Drawer!</Text>,
  onClose: () => console.log('Close!'),
  open: true,
  placement: 'bottom',
};

export const CustomBackdrop = Template.bind({});
CustomBackdrop.args = {
  backdrop: (
    <div
      style={{ backgroundColor: 'magenta', height: '100%', width: '100%' }}
    />
  ),
  children: <Text>Hello, Drawer!</Text>,
  onClose: () => console.log('Close!'),
  open: true,
};

export const CustomContainer = ContainerTemplate.bind({});
CustomContainer.args = {
  children: <Text>Hello, Drawer!</Text>,
  onClose: () => console.log('Close!'),
  open: true,
};
