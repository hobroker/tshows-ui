import { useContext } from 'react';
import { PartialShowFragment, Status } from '../../../generated/graphql';
import useWatchlistActions from '../hooks/useWatchlistActions';
import { ShowsOnboardingContext } from '../../onboarding/contexts/ShowsOnboardingContext';
import TallCard from './card/TallCard';
import WatchlistOverlayAction from './WatchlistOverlayAction';

interface Props {
  show: PartialShowFragment;
}

const TallShowCard = ({ show }: Props) => {
  const { upsertWatchlistItem } = useWatchlistActions();
  const { updateShow } = useContext(ShowsOnboardingContext);

  const onClick = (status: Status) => {
    const showId = show.externalId;

    upsertWatchlistItem({ showId, status });
    updateShow(showId, { status });
  };

  return (
    <TallCard tallImage={show.tallImage}>
      <WatchlistOverlayAction status={show.status} onClick={onClick} />
    </TallCard>
  );
};

export default TallShowCard;
