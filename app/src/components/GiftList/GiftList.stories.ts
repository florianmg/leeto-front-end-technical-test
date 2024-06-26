import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { GiftList } from './GiftList';

export default {
  title: 'GiftList/List',
  component: GiftList,
  decorators: [withRouter],
} as Meta;

type Story = StoryObj<typeof GiftList>;

export const Default: Story = {
  args: {
    gifts: [
      {
        id: 1,
        name: 'Carte cadeau rentrée scolaire',
        allowedAmount: 100,
        consumedAmount: 50,
        closingDate: '2025-05-01',
        state: 'active',
      },
      {
        id: 2,
        name: 'Carte cadeau rentrée scolaire',
        allowedAmount: 100,
        consumedAmount: 50,
        closingDate: '2025-05-01',
        state: 'active',
      },
    ],
  },
};
