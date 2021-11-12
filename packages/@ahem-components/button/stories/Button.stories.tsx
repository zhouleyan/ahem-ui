import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from '..';

export default {
  component: Button,
  title: 'Button'
} as Meta;

export const Primary: React.VFC<{}> = () => <Button variant={ 'primary' }>Button</Button>;
