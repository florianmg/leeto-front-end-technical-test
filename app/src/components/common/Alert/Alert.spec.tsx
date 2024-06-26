import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Alert } from './Alert';

const alertProps = {
  title: 'Title',
  message: 'Message',
};

describe('ProgressBar', () => {
  it('should renders without crashing', () => {
    const { container } = render(<Alert {...alertProps} />);
    expect(container).toBeTruthy();
  });

  it('should display the title and message', () => {
    const { getByText } = render(<Alert {...alertProps} />);
    expect(getByText(alertProps.title)).toBeTruthy();
    expect(getByText(alertProps.message)).toBeTruthy();
  });
});
