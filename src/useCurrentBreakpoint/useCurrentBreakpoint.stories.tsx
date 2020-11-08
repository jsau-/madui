import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useCurrentBreakpoint } from '.';
import { Text } from '../Text';
import { useTheme } from '../useTheme';

export default {
  title: 'Hooks/Layout/useCurrentBreakpoint',
} as Meta;

const TestComponent: React.FunctionComponent = () => {
  const currentBreakpoint = useCurrentBreakpoint();
  const theme = useTheme();

  return (
    <Text>
      {`Breakpoint: ${currentBreakpoint}; ${theme.breakpoints[currentBreakpoint]}px`}
    </Text>
  );
}

const Template: Story = () => <TestComponent />;

export const Default = Template.bind({});
