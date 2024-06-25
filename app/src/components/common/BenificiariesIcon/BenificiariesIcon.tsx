import { BenificiariesIconProps, BenificiariesIconsMap } from './types';

const benificiariesIconsMap: BenificiariesIconsMap = {
  user: '🙋‍♂️',
  companion: '💙',
  child: '👶',
};

export const BenificiariesIcon = ({ type }: BenificiariesIconProps) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100">
      {benificiariesIconsMap[type]}
    </div>
  );
};
