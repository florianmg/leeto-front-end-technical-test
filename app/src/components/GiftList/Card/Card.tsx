import { useMemo } from 'react';

import { useNavigation } from '@/hooks/useNavigation';
import { ProgressBar } from '@/components/common/ProgressBar';
import { buildRemainingTimeString, buildPassedTimeString } from '@/utils/dates';

import GiftCardIcon from '@/assets/icons/gift-card.svg?react';
import { CardProps } from './types';

export const Card = ({
  allowedAmount,
  closingDate,
  consumedAmount,
  name,
  id,
  state,
}: CardProps) => {
  const { redirectToGiftCardDetails } = useNavigation();

  const onClickCard = () => {
    redirectToGiftCardDetails(id);
  };

  const closingText = useMemo(() => {
    if (state === 'archived') return buildPassedTimeString(closingDate);
    return buildRemainingTimeString(closingDate);
  }, [closingDate, state]);

  return (
    <div
      className="w-full cursor-pointer space-y-4 rounded-xl border border-slate-300 p-6"
      onClick={onClickCard}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-100">
        <GiftCardIcon className="fill-pink-800" />
      </div>
      <div className="space-y-2">
        <div>
          <p className="text-xs text-slate-600">{closingText}</p>
          <p className="font-medium">{name}</p>
        </div>
        <div className="space-y-1">
          <ProgressBar
            consumedAmount={consumedAmount}
            allowedAmount={allowedAmount}
            label={`${consumedAmount} € dépensés / ${allowedAmount} €`}
          />
        </div>
      </div>
    </div>
  );
};
