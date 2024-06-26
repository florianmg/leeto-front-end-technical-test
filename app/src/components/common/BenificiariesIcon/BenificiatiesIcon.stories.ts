import { Meta, StoryObj } from '@storybook/react';

import { BenificiariesIcon } from './BenificiariesIcon';

export default {
  title: 'Common/BenificiariesIcon',
  component: BenificiariesIcon,
} as Meta;

type Story = StoryObj<typeof BenificiariesIcon>;

export const User: Story = {
  args: {
    type: 'user',
  },
};

export const Companion: Story = {
  args: {
    type: 'companion',
  },
};

export const Child: Story = {
  args: {
    type: 'child',
  },
};
