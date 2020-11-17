import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useWindowSize } from '.';
import { Text } from '../Text';

export default {
  title: 'Hooks/Layout/useWindowSize',
} as Meta;

const TestComponent: React.FunctionComponent = () => {
  const mousePosition = useWindowSize();
  return <Text>{JSON.stringify(mousePosition)}</Text>;
};

const Template: Story = () => <TestComponent />;

export const Default = Template.bind({});
