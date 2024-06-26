import { Meta, StoryObj } from '@storybook/react';

import { GiftDetails } from './GiftDetails';

export default {
  title: 'GiftDetails/GiftDetails',
  component: GiftDetails,
} as Meta;

type Story = StoryObj<typeof GiftDetails>;

export const Default: Story = {
  args: {
    name: 'Carte cadeau rentrée scolaire',
    description: 'Carte cadeau pour la rentrée scolaire de vos enfants',
    allowedAmount: 100,
    consumedAmount: 50,
    closingDate: '2025-05-01',
    openingDate: '2024-05-01',
    beneficiaries: [
      {
        id: 1,
        type: 'user',
        firstName: 'Geralt',
        consumption: {
          allowedAmount: 50,
          consumedAmount: 30,
        },
      },
      {
        id: 2,
        type: 'companion',
        firstName: 'Yennefer',
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
      {
        id: 3,
        type: 'child',
        firstName: 'Cirilla',
        consumption: {
          allowedAmount: 25,
          consumedAmount: 25,
        },
      },
    ],
  },
};
