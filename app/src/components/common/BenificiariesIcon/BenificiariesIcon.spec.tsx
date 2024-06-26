import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { BenificiariesIcon } from './BenificiariesIcon';

describe('BenificiariesIcon', () => {
  it('should render without crashing', () => {
    const { container } = render(<BenificiariesIcon type="user" />);
    expect(container).toBeTruthy();
  });

  it('should render the user icon', () => {
    const { getByText } = render(<BenificiariesIcon type="user" />);
    expect(getByText('🙋‍♂️')).toBeTruthy();
  });

  it('should render the companion icon', () => {
    const { getByText } = render(<BenificiariesIcon type="companion" />);
    expect(getByText('💙')).toBeTruthy();
  });

  it('should render the child icon', () => {
    const { getByText } = render(<BenificiariesIcon type="child" />);
    expect(getByText('👶')).toBeTruthy();
  });
});
