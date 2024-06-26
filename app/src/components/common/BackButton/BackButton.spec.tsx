import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { BackButton } from './BackButton';

import { BackButtonProps } from './types';

const backProps: BackButtonProps = {
  label: 'Go back',
  onClick: () => console.log('Go back'),
};

describe('BackButton', () => {
  it('should render without crashing', () => {
    const { container } = render(<BackButton {...backProps} />);
    expect(container).toBeTruthy();
  });
  it('should render the label', () => {
    const { getByText } = render(<BackButton {...backProps} />);
    expect(getByText(backProps.label)).toBeTruthy();
  });
});
