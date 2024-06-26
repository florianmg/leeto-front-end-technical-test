import { Meta, StoryObj } from '@storybook/react';

import { BenificiaryList } from './BenificiaryList';

export default {
  title: 'GiftDetails/BenificiaryList',
  component: BenificiaryList,
} as Meta;

type Story = StoryObj<typeof BenificiaryList>;

export const Default: Story = {
  args: {
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
