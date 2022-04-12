import { PartialShow, Status } from '../../../generated/graphql';
import useWatchlistActions from '../hooks/useWatchlistActions';
import TallCard from './base/TallCard';
import WatchlistOverlayAction from './WatchlistOverlayAction';

interface Props {
  show: PartialShow;
}

const TallShowCard = ({ show }: Props) => {
  const { upsertWatchlistItem } = useWatchlistActions();

  const onClick = (status: Status) => {
    const showId = show.externalId;

    upsertWatchlistItem({ showId, status });
  };

  return (
    <TallCard tallImage={show.tallImage}>
      <WatchlistOverlayAction status={show.status} onClick={onClick} />
    </TallCard>
  );
};

export default TallShowCard;
