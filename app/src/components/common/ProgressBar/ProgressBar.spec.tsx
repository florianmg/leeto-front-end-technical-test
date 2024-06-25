import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { ProgressBar } from '.';

describe('ProgressBar', () => {
  it('should render without crashing', () => {
    const { container } = render(<ProgressBar progress={50} />);
    expect(container).toBeTruthy();
  });

  it('should display the correct progress percentage text', () => {
    const testProgress = 75;
    const { getByText } = render(<ProgressBar progress={testProgress} />);
    expect(getByText(`${testProgress}%`)).toBeTruthy();
  });

  it('should display the correct progress bar width', () => {
    const testProgress = 75;
    const { container } = render(<ProgressBar progress={testProgress} />);
    const progressBar = container.querySelector('.bg-blue') as HTMLElement;
    expect(progressBar.style.width).toBe(`${testProgress}%`);
  });

  it('should clamp the progress to 100 when the progress is greater than 100', () => {
    const testProgress = 125;
    const { getByText } = render(<ProgressBar progress={testProgress} />);
    expect(getByText('100%')).toBeTruthy();
  });

  it('should clamp the progress to 0 when the progress is less than 0', () => {
    const testProgress = -25;
    const { getByText } = render(<ProgressBar progress={testProgress} />);
    expect(getByText('0%')).toBeTruthy();
  });
});
