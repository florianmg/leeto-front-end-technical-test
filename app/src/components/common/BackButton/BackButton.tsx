import ArrowLeftIcon from '@/assets/icons/arrow-left.svg?react';
import { BackButtonProps } from './types';

export const BackButton = ({ onClick, label }: BackButtonProps) => {
  return (
    <button
      className="flex items-center gap-1 text-sm font-semibold sm:text-blue"
      onClick={onClick}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border sm:hidden">
        <ArrowLeftIcon className="fill-current" />
      </span>
      <span className="hidden sm:block">
        <ArrowLeftIcon className="fill-current" />
      </span>
      <span className="hidden sm:block">{label}</span>
    </button>
  );
};
