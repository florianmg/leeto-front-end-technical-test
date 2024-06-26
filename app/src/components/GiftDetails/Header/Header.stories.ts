import { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'GiftDetails/Header',
  component: Header,
} as Meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    name: 'Carte cadeau rentrée scolaire',
    allowedAmount: 100,
    consumedAmount: 50,
    closingDate: '2025-05-01',
    openingDate: '2025-04-01',
  },
};
