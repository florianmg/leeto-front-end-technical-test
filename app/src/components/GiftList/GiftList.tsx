import { Card } from './Card';

import { GiftListProps } from './types';

export const GiftList = ({ gifts }: GiftListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {gifts.map((gift) => (
        <Card {...gift} />
      ))}
    </div>
  );
};
