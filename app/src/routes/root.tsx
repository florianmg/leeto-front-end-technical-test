import { useMemo } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { GiftList } from '@/components/GiftList';
import { useGiftCards } from '@/hooks/queries/giftsCards/useGiftCards';

import { GiftState } from '@/types';

export default function Root() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const state = (searchParams.get('state') || 'active') as GiftState; // Fallback to 'active' if not specified
  const { data, isLoading } = useGiftCards();
  const archivedGiftCards = useMemo(
    () => data?.filter((gift) => gift.state === 'archived') || [],
    [data]
  );
  const activeGiftCards = useMemo(
    () => data?.filter((gift) => gift.state === 'active') || [],
    [data]
  );
  const displayedGiftCards = useMemo(() => {
    switch (state) {
      case 'active':
        return activeGiftCards;
      case 'archived':
        return archivedGiftCards;
      default:
        return [];
    }
  }, [activeGiftCards, archivedGiftCards, state]);

  const onClickTab = (newState: GiftState) => {
    navigate(`/?state=${newState}`);
  };

  if (isLoading) return <p>Un instant, on rassemble vos cartes cadeaux ...</p>;
  if (!data) return <p>Erreur lors du chargement des cartes cadeaux</p>;
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-10">
      <h1 className="text-xl font-semibold md:text-2xl">Cartes cadeaux</h1>
      <div className="w-full border-b border-slate-300">
        <button
          className={cn('h-full px-4 py-2', {
            'border-b-2 border-b-blue text-blue': state === 'active',
          })}
          onClick={() => onClickTab('active')}
        >
          Actives ({activeGiftCards.length})
        </button>
        <button
          className={cn('h-full px-4 py-2', {
            'border-b-2 border-b-blue text-blue': state === 'archived',
          })}
          onClick={() => onClickTab('archived')}
        >
          Clôturées ({archivedGiftCards.length})
        </button>
      </div>
      <GiftList gifts={displayedGiftCards} />
    </div>
  );
}
