import { Gift } from '@/types';

export type HeaderProps = {
  name: Gift['name'];
  allowedAmount: Gift['allowedAmount'];
  consumedAmount: Gift['consumedAmount'];
  openingDate: Gift['openingDate'];
  closingDate: Gift['closingDate'];
  state: Gift['state'];
};
