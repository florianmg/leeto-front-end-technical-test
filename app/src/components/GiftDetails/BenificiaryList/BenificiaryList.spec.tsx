import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { BenificiaryList } from './BenificiaryList';

import { BenificiaryListProps } from './types';

const benificiaryListProps: BenificiaryListProps = {
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
    const { container } = render(<BenificiaryList {...benificiaryListProps} />);
    expect(container).toBeTruthy();
  });

  it('should displays "Vous mêmes" for user type beneficiaries', () => {
    const { getByText } = render(
      <BenificiaryList
        beneficiaries={[
          {
            id: 1,
            type: 'user',
            firstName: 'Geralt',
            consumption: {
              allowedAmount: 50,
              consumedAmount: 30,
            },
          },
        ]}
      />
    );
    expect(getByText('Vous mêmes')).toBeTruthy();
  });

  it('should displays the firstName for non-user type beneficiaries', () => {
    const { getByText } = render(
      <BenificiaryList
        beneficiaries={[
          {
            id: 1,
            type: 'companion',
            firstName: 'Geralt',
            consumption: {
              allowedAmount: 50,
              consumedAmount: 30,
            },
          },
        ]}
      />
    );
    expect(getByText('Geralt')).toBeTruthy();
  });
});
