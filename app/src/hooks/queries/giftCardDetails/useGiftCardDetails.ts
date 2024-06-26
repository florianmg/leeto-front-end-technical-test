import { Gift } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { giftCardDetailsQueryKeys } from './queryKeys';

const fetchGiftCardDetails = async (id: string): Promise<Gift> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ENDPOINT}/gift-cards/${id}`
  );
  const data = await response.json();
  if (response.status !== 200) {
    throw data;
  }
  return data;
};

export const useGiftCardDetails = (id: string) => {
  return useQuery({
    queryKey: [giftCardDetailsQueryKeys.all, id],
    queryFn: () => fetchGiftCardDetails(id),
  });
};
