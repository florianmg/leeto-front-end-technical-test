import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Header } from './Header';
import { HeaderProps } from './types';

const headerProps: HeaderProps = {
  allowedAmount: 100,
  consumedAmount: 50,
  closingDate: '2025-05-10',
  name: 'Gift card',
  openingDate: '2021-05-10',
  state: 'active',
};

describe('Header', () => {
  it('should render without crashing', () => {
    const { container } = render(<Header {...headerProps} />);
    expect(container).toBeTruthy();
  });
  it('should render the name', () => {
    const { getByText } = render(<Header {...headerProps} />);
    expect(getByText(headerProps.name)).toBeTruthy();
  });
});
