import React, { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LinearProgress, LinearProgressProps } from '.';

const Scroller = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(progress => progress < 100 ? progress + 10 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <LinearProgress value={progress} />;
}

export default {
  title: 'Progress/LinearProgress',
  component: LinearProgress,
} as Meta;

const Template: Story<LinearProgressProps> = args => <LinearProgress {...args} />;
const ScrollerTemplate: Story = () => <Scroller />;

export const Primary = Template.bind({});
Primary.args = {
  value: 50,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  value: 50,
};

export const Scrolling = ScrollerTemplate.bind({});
