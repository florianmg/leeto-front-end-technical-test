import { GiftDetailsProps } from './types';

import { Header } from './Header';
import { BenificiaryList } from './BenificiaryList';
import { Alert } from '@/components/common/Alert';
import { ConsumptionCard } from './ConsumptionCard';

export const GiftDetails = ({
  name,
  allowedAmount,
  beneficiaries,
  closingDate,
  openingDate,
  consumedAmount,
  description,
  state,
}: GiftDetailsProps) => {
  return (
    <div className="space-y-6">
      <Header
        allowedAmount={allowedAmount}
        closingDate={closingDate}
        consumedAmount={consumedAmount}
        name={name}
        openingDate={openingDate}
        state={state}
      />
      <Alert title="Description de la carte cadeau" message={description} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <BenificiaryList beneficiaries={beneficiaries} />
        <ConsumptionCard benificiaries={beneficiaries} />
      </div>
    </div>
  );
};
