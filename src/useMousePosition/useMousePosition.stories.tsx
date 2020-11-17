import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useMousePosition } from '.';
import { Text } from '../Text';

export default {
  title: 'Hooks/Layout/useMousePosition',
} as Meta;

const TestComponent: React.FunctionComponent = () => {
  const mousePosition = useMousePosition();
  return <Text>{JSON.stringify(mousePosition)}</Text>;
};

const Template: Story = () => <TestComponent />;

export const Default = Template.bind({});
