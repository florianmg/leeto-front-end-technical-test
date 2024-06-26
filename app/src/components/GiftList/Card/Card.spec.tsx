import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Card } from './Card';

import { CardProps } from './types';

const cardProps: CardProps = {
  id: 1,
  allowedAmount: 100,
  closingDate: '2025-05-10',
  consumedAmount: 50,
  name: 'Gift card',
  state: 'active',
};

describe('Card', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Card {...cardProps} />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });
  it('should render the name', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Card {...cardProps} />
      </MemoryRouter>
    );
    expect(getByText(cardProps.name)).toBeTruthy();
  });
});
