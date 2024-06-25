import { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'GiftList/Card',
  component: Card,
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    name: 'Carte cadeau rentrée scolaire',
    allowedAmount: 100,
    consumedAmount: 50,
    closingDate: '2025-05-01',
  },
};
