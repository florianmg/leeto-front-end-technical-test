import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Alert } from './Alert';

const alertProps = {
  title: 'Title',
  message: 'Message',
};

describe('ProgressBar', () => {
  const { container, getByText } = render(<Alert {...alertProps} />);

  it('should renders without crashing', () => {
    expect(container).toBeTruthy();
  });

  it('should display the title and message', () => {
    expect(getByText(alertProps.title)).toBeTruthy();
    expect(getByText(alertProps.message)).toBeTruthy();
  });
});
