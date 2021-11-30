import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../';

export default {
  title: 'Ahem/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: 'Button3'
};
