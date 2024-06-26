import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'Common/ProgressBar',
  component: ProgressBar,
} as Meta;

type Story = StoryObj<typeof ProgressBar>;

export const Empty: Story = {
  args: {
    consumedAmount: 0,
    allowedAmount: 100,
  },
};

export const HalfFull: Story = {
  args: {
    consumedAmount: 50,
    allowedAmount: 100,
  },
};

export const Full: Story = {
  args: {
    consumedAmount: 100,
    allowedAmount: 100,
  },
};
