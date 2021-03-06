import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Switch, SwitchProps } from '.';

const TestComponent = (props: SwitchProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      {...props}
      aria-label="My custom switch"
      checked={checked}
      inputProps={{
        'aria-label': 'My custom switch',
      }}
      onChange={event => setChecked(event.target.checked)}
    />
  );
};

export default {
  title: 'Components/Form/Switch',
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = args => <TestComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  color: 'primary',
  disabled: true,
};

export const Grey = Template.bind({});
Grey.args = {
  color: 'grey',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
};
