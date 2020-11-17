import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useBelowBreakpoint } from '.';
import { Text } from '../Text';
import { Breakpoint } from '../types/Breakpoint';
import { useTheme } from '../useTheme';

const TestComponent = () => {
  const theme = useTheme();

  const breakpointBelowMap: Record<Breakpoint, boolean> = {
    xs: useBelowBreakpoint('xs'),
    sm: useBelowBreakpoint('sm'),
    md: useBelowBreakpoint('md'),
    lg: useBelowBreakpoint('lg'),
    xl: useBelowBreakpoint('xl'),
    xxl: useBelowBreakpoint('xxl'),
  };

  return (
    <React.Fragment>
      {Object.keys(breakpointBelowMap).map(breakpoint => (
        <Text key={breakpoint}>
          {`Is below ${breakpoint} | ${theme.breakpoints[breakpoint]}px? ${
            breakpointBelowMap[breakpoint as Breakpoint] ? 'Yes!' : 'No!'
          }`}
        </Text>
      ))}
    </React.Fragment>
  );
};

export default {
  title: 'Hooks/Layout/useBelowBreakpoint',
  component: TestComponent,
} as Meta;

const Template: Story = () => <TestComponent />;

export const Default = Template.bind({});
