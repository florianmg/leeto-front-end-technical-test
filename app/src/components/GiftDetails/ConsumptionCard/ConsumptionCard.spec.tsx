import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { ConsumptionCard } from './ConsumptionCard';

import { ConsumptionCardProps } from './types';

const consumptionCardProps: ConsumptionCardProps = {
  beneficiaries: [
    {
      id: 1,
      type: 'user',
      firstName: 'Geralt',
      consumption: {
        allowedAmount: 50,
        consumedAmount: 30,
      },
    },
    {
      id: 2,
      type: 'companion',
      firstName: 'Yennefer',
      consumption: {
        allowedAmount: 25,
        consumedAmount: 25,
      },
    },
    {
      id: 3,
      type: 'child',
      firstName: 'Cirilla',
      consumption: {
        allowedAmount: 25,
        consumedAmount: 25,
      },
    },
  ],
};

describe('ConsumptionCard', () => {
  it('should render without crashing', () => {
    const { container } = render(<ConsumptionCard {...consumptionCardProps} />);
    expect(container).toBeTruthy();
  });
});
