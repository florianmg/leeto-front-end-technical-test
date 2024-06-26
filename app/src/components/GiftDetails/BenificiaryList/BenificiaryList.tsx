import { BenificiaryListProps } from './types';
import { BenificiariesIcon } from '@/components/common/BenificiariesIcon';
import FamilyIcon from '@/assets/icons/family.svg?react';

export const BenificiaryList = ({ beneficiaries }: BenificiaryListProps) => (
  <div className="w-full rounded-lg border p-4">
    <div className="flex size-8 items-center justify-center rounded-lg bg-green-100">
      <FamilyIcon className="size-3.5 fill-green-800" />
    </div>
    <p className="mt-4">
      Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?
    </p>
    <div className="mt-2 flex items-center gap-x-2">
      <div className="flex">
        {beneficiaries.map(({ id, type }) => (
          <div key={id} className="-ml-2 first:ml-0">
            <BenificiariesIcon type={type} />
          </div>
        ))}
      </div>
      <div>
        {beneficiaries.map(({ id, type, firstName }, index) => (
          <span key={id} className="text-xs text-slate-600">
            {type === 'user' ? 'Vous mêmes' : firstName}
            {index < beneficiaries.length - 2 && ', '}
            {index === beneficiaries.length - 2 && ' et '}
          </span>
        ))}
      </div>
    </div>
  </div>
);
