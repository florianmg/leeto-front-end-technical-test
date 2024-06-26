import { Meta, StoryObj } from '@storybook/react';

import { ConsumptionCard } from './ConsumptionCard';

export default {
  title: 'GiftDetails/ConsumptionCard',
  component: ConsumptionCard,
} as Meta;

type Story = StoryObj<typeof ConsumptionCard>;

export const Default: Story = {
  args: {
    benificiaries: [
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
