import { useNavigate } from 'react-router-dom';
export const useNavigation = () => {
  const navigate = useNavigate();

  const redirectToGiftCards = () => {
    navigate('/');
  };

  const redirectToGiftCardDetails = (id: number) => {
    navigate(`/details/${id}`);
  };

  return { redirectToGiftCards, redirectToGiftCardDetails };
};
