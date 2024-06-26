import { useMemo } from 'react';
import { ProgressBarProps } from './types';

export const ProgressBar = ({
  allowedAmount,
  consumedAmount,
}: ProgressBarProps) => {
  const progress = useMemo(() => {
    const percentage = Math.floor((consumedAmount / allowedAmount) * 100);

    if (percentage < 0) return 0;
    if (percentage > 100) return 100;

    return percentage;
  }, [allowedAmount, consumedAmount]);
  return (
    <div className="space-y-1">
      <p className="text-xs text-slate-600">{`${consumedAmount} € dépensés / ${allowedAmount} €`}</p>
      <div className="flex items-center gap-x-2">
        <div className="h-1.5 w-full rounded-md bg-slate-300">
          <div
            className="h-full rounded-md bg-blue"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs font-medium">{progress}%</span>
      </div>
    </div>
  );
};
