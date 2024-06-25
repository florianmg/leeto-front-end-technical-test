import { Gift } from '@/types';

export type GiftCard = {
  id: Gift['id'];
  name: Gift['name'];
  allowedAmount: Gift['allowedAmount'];
  consumedAmount: Gift['consumedAmount'];
  closingDate: Gift['closingDate'];
};

export type CardProps = GiftCard;
