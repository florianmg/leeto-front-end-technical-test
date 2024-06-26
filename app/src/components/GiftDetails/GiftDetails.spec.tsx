import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { GiftDetails } from './GiftDetails';

import { GiftDetailsProps } from './types';

const giftDetailsProps: GiftDetailsProps = {
  id: 4,
  name: 'Carte cadeaux culture & sport',
  description:
    'Votre CSE vous offre une carte cadeaux pour la culture et le sport.',
  openingDate: '2024-02-12',
  closingDate: '2024-10-01',
  state: 'active',
  allowedAmount: 100,
  consumedAmount: 50,
  beneficiaries: [
    {
      id: 1,
      type: 'user',
      firstName: 'Geralt',
      consumption: {
        allowedAmount: 50,
        consumedAmount: 20,
      },
    },
    {
      id: 2,
      type: 'companion',
      firstName: 'Yennefer',
      consumption: {
        allowedAmount: 50,
        consumedAmount: 30,
      },
    },
  ],
};

describe('GiftDetails', () => {
  it('should render without crashing', () => {
    const { container } = render(<GiftDetails {...giftDetailsProps} />);
    expect(container).toBeTruthy();
  });
  it('should render the name', () => {
    const { getByText } = render(<GiftDetails {...giftDetailsProps} />);
    expect(getByText(giftDetailsProps.name)).toBeTruthy();
  });
});
