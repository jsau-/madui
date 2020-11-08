import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useHoverWithAim } from '.';

const TestComponent = () => {
  const refSource = useRef<HTMLDivElement>(null);
  const refTarget = useRef<HTMLDivElement>(null);

  const isHoveringWithAim = useHoverWithAim(refSource, refTarget);

  return (
    <div style={{ background: isHoveringWithAim ? 'green': 'transparent', transition: 'all 0.5s ease', position: 'relative', width: '100vw', height: '100vh' }}>
      <div id="source" ref={refSource} style={{ background: 'red', transition: 'all 0.5s ease', position: 'absolute', top: 0, height: 50, left: 300, width: 50 }} />
      <div id="target" ref={refTarget} style={{ background: 'orange', transition: 'all 0.5s ease', position: 'absolute', top: 50, height: 250, width: 150, left: isHoveringWithAim ?  200 : 400 }} />
    </div>
  )
};

export default {
  title: 'Hooks/Layout/useHoverWithAim',
  component: TestComponent,
} as Meta;

const Template: Story = () => <TestComponent />;

export const Default = Template.bind({});
