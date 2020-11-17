import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useMediaQuery } from '.';
import { aboveWidth } from '../styles/breakpoint/aboveWidth';
import { belowWidth } from '../styles/breakpoint/belowWidth';
import { betweenWidth } from '../styles/breakpoint/betweenWidth';
import { Text } from '../Text';

export default {
  title: 'Hooks/Layout/useMediaQuery',
} as Meta;

const SmallComponent: React.FunctionComponent = () => {
  const isSmall = useMediaQuery(belowWidth(800));
  const content = isSmall ? 'Less than 800px' : 'More than 800px';
  return <Text>{content}</Text>;
};

const MediumComponent = () => {
  const isMedium = useMediaQuery(betweenWidth(800, 1600));
  const content = isMedium ? 'Between 800-1600px' : 'Not between 800-1600px';
  return <Text>{content}</Text>;
};

const LargeComponent = () => {
  const isLarge = useMediaQuery(aboveWidth(1600));
  const content = isLarge ? 'Above 1600px' : 'Not above 1600px';
  return <Text>{content}</Text>;
};

const SmallTemplate: Story = () => <SmallComponent />;
const MediumTemplate: Story = () => <MediumComponent />;
const LargeTemplate: Story = () => <LargeComponent />;

export const Small = SmallTemplate.bind({});
export const Medium = MediumTemplate.bind({});
export const Large = LargeTemplate.bind({});
