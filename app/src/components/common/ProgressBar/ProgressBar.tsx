import { useMemo } from 'react';
import { ProgressBarProps } from './types';

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  // Prevent breaking the progress bar when the progress is less than 0 or greater than 100
  const clampedProgress = useMemo(() => {
    if (progress < 0) {
      return 0;
    }
    if (progress > 100) {
      return 100;
    }
    return progress;
  }, [progress]);

  return (
    <div className="flex items-center gap-x-2">
      <div className="h-1.5 w-full rounded-md bg-slate-300">
        <div
          className="bg-blue h-full rounded-md"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      <span className="text-xs font-medium">{clampedProgress}%</span>
    </div>
  );
};
