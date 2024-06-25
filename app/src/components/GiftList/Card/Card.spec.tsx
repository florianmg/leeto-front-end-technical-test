import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Card } from './Card';

import { CardProps } from './types';

const cardProps: CardProps = {
  id: 1,
  allowedAmount: 100,
  closingDate: '2025-05-10',
  consumedAmount: 50,
  name: 'Gift card',
};

describe('Card', () => {
  it('should render without crashing', () => {
    const { container } = render(<Card {...cardProps} />);
    expect(container).toBeTruthy();
  });
  it('should render the name', () => {
    const { getByText } = render(<Card {...cardProps} />);
    expect(getByText(cardProps.name)).toBeTruthy();
  });
});
