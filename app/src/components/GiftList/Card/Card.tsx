import { useNavigation } from '@/hooks/useNavigation';
import { ProgressBar } from '@/components/common/ProgressBar';
import { getTimeLeft } from '@/utils/getTimeLeft';

import GiftCardIcon from '@/assets/icons/gift-card.svg?react';
import { CardProps } from './types';

export const Card = ({
  allowedAmount,
  closingDate,
  consumedAmount,
  name,
  id,
}: CardProps) => {
  const { redirectToGiftCardDetails } = useNavigation();
  const timeLeft = getTimeLeft(closingDate);
  const onClickCard = () => {
    redirectToGiftCardDetails(id);
  };
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
          <p className="text-xs text-slate-600">{`Se cloture dans ${timeLeft.value} ${timeLeft.unit}`}</p>
          <p className="font-medium">{name}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-slate-600">
            {consumedAmount} € dépensés / {allowedAmount} €
          </p>
          <ProgressBar progress={(consumedAmount / allowedAmount) * 100} />
        </div>
      </div>
    </div>
  );
};
