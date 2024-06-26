import { useNavigate, useParams } from 'react-router-dom';

import { BackButton } from '@/components/common/BackButton';
import { GiftDetails } from '@/components/GiftDetails';
import { useGiftCardDetails } from '@/hooks/queries/giftCardDetails/useGiftCardDetails';

export default function DetailsPage() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const { data, isLoading, error } = useGiftCardDetails(params.id as string);

  const onClickGoBack = () => navigate(-1);
  if (isLoading) return <div>Loading...</div>;
  if (error || !data)
    return (
      <div>
        <p>Nous sommes désolé, une erreur est survenue.</p>
        <button className="text-blue underline" onClick={onClickGoBack}>
          Revenir en arrière
        </button>
      </div>
    );

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-10">
      <BackButton
        onClick={onClickGoBack}
        label="Retour vers les cartes cadeaux"
      />
      <GiftDetails {...data} />
    </div>
  );
}
