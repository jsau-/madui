import React, { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Overlay, OverlayProps } from '.';
import { Text } from '../Text';

const ToggleOverlay = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpen(open => !open);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return <Overlay open={open} />;
}

export default {
  title: 'Layout/Overlay',
  component: Overlay,
	parameters: {
		docs: {
			inlineStories: false,
      iFrameHeight: 500,
		},
	},
} as Meta;

const Template: Story<OverlayProps> = args => <Overlay {...args} />;
const TogglingTemplate: Story = () => <ToggleOverlay />;

export const Open = Template.bind({});
Open.args = {
  children: <Text>Open!</Text>,
  open: true,
};

export const Closed = Template.bind({});
Closed.args = {
  children: <Text>Open!</Text>,
};

export const Toggling = TogglingTemplate.bind({});
