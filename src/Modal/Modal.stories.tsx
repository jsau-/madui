import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal, ModalProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Layout/Modal',
  component: Modal,
} as Meta;

const ContainerTemplate: Story<ModalProps> = args => {
  const refContainer = useRef(null);

  return (
    <div ref={refContainer}>
      <Modal {...args} container={refContainer} />
    </div>
  );
};

const Template: Story<ModalProps> = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Open = Template.bind({});
Open.args = {
  children: <Text>Hello, modal!</Text>,
  onClose: () => console.log('Close!'),
  open: true,
};

export const CustomBackdrop = Template.bind({});
CustomBackdrop.args = {
  backdrop: (
    <div
      style={{ backgroundColor: 'magenta', height: '100%', width: '100%' }}
    />
  ),
  children: <Text>Hello, modal!</Text>,
  onClose: () => console.log('Close!'),
  open: true,
};

export const CustomContainer = ContainerTemplate.bind({});
CustomContainer.args = {
  children: <Text>Hello, modal!</Text>,
  onClose: () => console.log('Close!'),
  open: true,
};
