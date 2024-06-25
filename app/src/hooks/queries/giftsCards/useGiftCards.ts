import { Gift } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { giftCardsQueryKeys } from './queryKeys';

const fetchGiftCards = async (): Promise<Gift[]> => {
  const response = await fetch(`http://localhost:3001/gift-cards`);
  const data = await response.json();
  if (response.status !== 200) {
    throw data;
  }
  return data;
};

export const useGiftCards = () => {
  return useQuery({
    queryKey: [giftCardsQueryKeys.all],
    queryFn: fetchGiftCards,
  });
};
