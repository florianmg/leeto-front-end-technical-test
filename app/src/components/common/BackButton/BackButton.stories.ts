import { Meta, StoryObj } from '@storybook/react';

import { BackButton } from './BackButton';

export default {
  title: 'Common/BackButton',
  component: BackButton,
} as Meta;

type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {
    label: 'Go back',
    onClick: () => console.log('Go back'),
  },
};
