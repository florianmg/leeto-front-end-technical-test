import { ProgressBar } from '@/components/common/ProgressBar';
import { BenificiariesIcon } from '@/components/common/BenificiariesIcon';

import StackedLineIcon from '@/assets/icons/stacked-line.svg?react';

import { ConsumptionCardProps } from './types';

export const ConsumptionCard = ({ benificiaries }: ConsumptionCardProps) => {
  const userBeneficiary = benificiaries.find(({ type }) => type === 'user');
  const otherBeneficiaries = benificiaries.filter(
    ({ type }) => type !== 'user'
  );

  return (
    <div className="w-full rounded-lg border p-4">
      <div className="flex size-8 items-center justify-center rounded-lg bg-green-100">
        <StackedLineIcon className="size-3.5 fill-green-800" />
      </div>
      <p className="mt-4">Suivi de consommation</p>
      <div className="mt-2 space-y-2">
        {userBeneficiary && (
          <div className="flex gap-x-4">
            <BenificiariesIcon type={userBeneficiary?.type} />
            <ProgressBar
              consumedAmount={userBeneficiary.consumption.consumedAmount}
              allowedAmount={userBeneficiary.consumption.allowedAmount}
              label={`Vous-mêmes · ${userBeneficiary.consumption.consumedAmount} € / ${userBeneficiary.consumption.allowedAmount} €`}
            />
          </div>
        )}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {otherBeneficiaries.map(({ id, type, firstName, consumption }) => (
            <div key={id} className="flex gap-x-4">
              <BenificiariesIcon type={type} />
              <ProgressBar
                consumedAmount={consumption.consumedAmount}
                allowedAmount={consumption.allowedAmount}
                label={`${firstName} · ${consumption.consumedAmount} € / ${consumption.allowedAmount} €`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
