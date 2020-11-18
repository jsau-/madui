import faker from 'faker';
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Dialog, DialogProps } from '.';
import { Button } from '../Button';
import { CardActions } from '../CardActions';
import { CardHeader } from '../CardHeader';
import { CardContent } from '../CardContent';
import { Text } from '../Text';

const children = (
  <React.Fragment>
    <CardHeader title="My title!" />
    <CardContent>
      <Text>
        This is some long text that should wrap depending on your screen size. I
        might even have to disable a linter rule to stop this moaning at me
        because of how long it is. Blimey.
      </Text>
    </CardContent>
    <CardActions>
      <Button>Ok</Button>
    </CardActions>
  </React.Fragment>
);

const veryLongChildren = (
  <React.Fragment>
    <CardHeader title="My title!" />
    <CardContent>
      <Text>{faker.lorem.paragraphs(50)}</Text>
    </CardContent>
    <CardActions>
      <Button>Ok</Button>
    </CardActions>
  </React.Fragment>
);

export default {
  title: 'Components/Layout/Dialog',
  component: Dialog,
} as Meta;

const Template: Story<DialogProps> = args => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Open = Template.bind({});
Open.args = {
  children,
  onClose: () => console.log('Close!'),
  open: true,
};

export const Overflowing = Template.bind({});
Overflowing.args = {
  children: veryLongChildren,
  onClose: () => console.log('Close!'),
  open: true,
};

export const XS = Template.bind({});
XS.args = {
  children,
  maxWidth: 'xs',
  onClose: () => console.log('Close!'),
  open: true,
};

export const SM = Template.bind({});
SM.args = {
  children,
  maxWidth: 'sm',
  onClose: () => console.log('Close!'),
  open: true,
};

export const MD = Template.bind({});
MD.args = {
  children,
  maxWidth: 'md',
  onClose: () => console.log('Close!'),
  open: true,
};

export const LG = Template.bind({});
LG.args = {
  children,
  maxWidth: 'lg',
  onClose: () => console.log('Close!'),
  open: true,
};

export const XL = Template.bind({});
XL.args = {
  children,
  maxWidth: 'xl',
  onClose: () => console.log('Close!'),
  open: true,
};

export const XXL = Template.bind({});
XXL.args = {
  children,
  maxWidth: 'xxl',
  onClose: () => console.log('Close!'),
  open: true,
};
