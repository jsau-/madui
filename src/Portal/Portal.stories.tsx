import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Portal, PortalProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Layout/Portal',
  component: Portal,
} as Meta;

const PortalWithContainer = () => {
  const refContainer = useRef(null);

  return (
    <div ref={refContainer}>
      <div>
        <Text>Nested fairly deep!</Text>
        <Portal container={refContainer}>
          <Text>Escaped up to my container!</Text>
        </Portal>
      </div>
    </div>
  );
};

const Template: Story<PortalProps> = args => (
  <div>
    <Text>Direct child of a div!</Text>
    <Portal {...args} />
  </div>
);

const TemplateWithContainer = () => <PortalWithContainer />;

export const Default = Template.bind({});
Default.args = {
  children: <Text>Outside my parent node using a portal!</Text>,
};

export const Nested = Template.bind({});
Nested.args = {
  children: (
    <div>
      <Text>Outside my parent node using a portal! </Text>
      <Portal>
        <Text>Nested portal!</Text>
      </Portal>
    </div>
  ),
};

export const WithContainer = TemplateWithContainer.bind({});
