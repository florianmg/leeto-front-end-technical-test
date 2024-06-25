import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'Common/ProgressBar',
  component: ProgressBar,
} as Meta;

type Story = StoryObj<typeof ProgressBar>;

export const Empty: Story = {
  args: {
    progress: 0,
  },
};

export const HalfFull: Story = {
  args: {
    progress: 50,
  },
};

export const full: Story = {
  args: {
    progress: 100,
  },
};
