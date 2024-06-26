import { Gift } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { giftCardsQueryKeys } from './queryKeys';

const fetchGiftCards = async (): Promise<Gift[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ENDPOINT}/gift-cards`
  );
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
