import { useContext } from 'react';
import { PartialShowFragment, Status } from '../../../generated/graphql';
import useWatchlistActions from '../../shows/hooks/useWatchlistActions';
import { ShowsOnboardingContext } from '../contexts/ShowsOnboardingContext';
import TallCard from '../../shows/components/card/TallCard';
import WatchlistOverlayAction from '../../shows/components/WatchlistOverlayAction';

interface Props {
  show: PartialShowFragment;
}

const OnboardingShowCard = ({ show }: Props) => {
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

export default OnboardingShowCard;
