import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from '../components/Button';
import { ButtonProps } from '../types/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Default = Template.bind({});
Default.args = {
  color: 'default',
};
