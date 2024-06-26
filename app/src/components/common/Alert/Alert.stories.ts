import { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

export default {
  title: 'Common/Alert',
  component: Alert,
} as Meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: 'Alert Title',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};
