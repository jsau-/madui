import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useAboveBreakpoint } from '.';
import { Text } from '../Text';
import { Breakpoint } from '../types/Breakpoint';
import { useTheme } from '../useTheme';

const TestComponent = () => {
  const theme = useTheme();

  const aboveBreakpoints: Record<Breakpoint, boolean> = {
    xs: useAboveBreakpoint('xs'),
    sm: useAboveBreakpoint('sm'),
    md: useAboveBreakpoint('md'),
    lg: useAboveBreakpoint('lg'),
    xl: useAboveBreakpoint('xl'),
    xxl: useAboveBreakpoint('xxl'),
  }

  return (
    <React.Fragment>
      {Object.keys(aboveBreakpoints).map(breakpoint => (
        <Text>
          {`Is below ${breakpoint} | ${theme.breakpoints[breakpoint]}px? ${aboveBreakpoints[breakpoint as Breakpoint] ? 'Yes!' : 'No!'}`}
        </Text>
      ))}
    </React.Fragment>
  );
};

export default {
  title: 'Hooks/Layout/useAboveBreakpoint',
  component: TestComponent,
} as Meta;

const Template: Story = () => <TestComponent />;

export const Default = Template.bind({});
