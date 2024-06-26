import { ProgressBar } from '@/components/common/ProgressBar';

import CalendarIcon from '@/assets/icons/calendar.svg?react';
import ClockIcon from '@/assets/icons/clock.svg?react';
import GiftCardIcon from '@/assets/icons/gift-card.svg?react';

import { HeaderProps } from './types';

export const Header = ({
  allowedAmount,
  consumedAmount,
  name,
  openingDate,
  closingDate,
}: HeaderProps) => {
  return (
    <div>
      <div className="flex size-8 items-center justify-center rounded-lg bg-pink-100 sm:size-16">
        <GiftCardIcon className="size-3.5 fill-pink-800 sm:size-6" />
      </div>

      <div className="mt-2 space-y-4 sm:space-y-2">
        <p className="text-xl font-semibold sm:text-2xl">{name}</p>
        <div className="text-sm text-slate-600 sm:flex sm:items-center sm:gap-x-2">
          <p className="flex items-center gap-x-1">
            <CalendarIcon className="size-[14px] fill-current" />
            <span>
              {openingDate} - {closingDate}
            </span>
          </p>
          <p className="flex items-center gap-x-1">
            <ClockIcon className="size-[14px] fill-current" />
            <span>Se cloture dans 1 semaine</span>
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-end gap-x-4 sm:mt-6 sm:gap-x-6">
        <div>
          <p className="text-xl font-semibold sm:text-2xl">{allowedAmount} €</p>
          <p className="text-xs sm:text-sm">disponibles</p>
        </div>
        <div className="w-full max-w-[370px]">
          <ProgressBar
            consumedAmount={consumedAmount}
            allowedAmount={allowedAmount}
          />
        </div>
      </div>
    </div>
  );
};
