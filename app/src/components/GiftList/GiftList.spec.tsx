import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { GiftList } from './GiftList';

import { GiftListProps } from './types';

const giftListProps: GiftListProps = {
  gifts: [
    {
      id: 1,
      allowedAmount: 100,
      closingDate: '2025-05-10',
      consumedAmount: 50,
      name: 'Gift card',
    },
    {
      id: 2,
      allowedAmount: 200,
      closingDate: '2025-05-10',
      consumedAmount: 100,
      name: 'Gift card 2',
    },
  ],
};

describe('GiftList', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <GiftList {...giftListProps} />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });
  it('should display all the cards', () => {
    const { getByText } = render(
      <MemoryRouter>
        <GiftList {...giftListProps} />
      </MemoryRouter>
    );
    const allNames = giftListProps.gifts.map((gift) => gift.name);
    allNames.forEach((name) => {
      expect(getByText(name)).toBeTruthy();
    });
  });
});
