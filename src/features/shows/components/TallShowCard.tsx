import { useContext } from 'react';
import { PartialShow, Status } from '../../../generated/graphql';
import { PartialWatchlistContext } from '../../watchlist/contexts/PartialWatchlistContext';
import WatchlistAction from './WatchlistAction';
import TallCard from './base/TallCard';

interface Props {
  show: PartialShow;
}

const TallShowCard = ({ show }: Props) => {
  const { upsertWatchlistItem } = useContext(PartialWatchlistContext);

  const onClick = (status: Status) => {
    const showId = show.externalId;

    upsertWatchlistItem({ showId, status });
  };

  return (
    <TallCard
      tallImage={show.tallImage}
      actions={
        <>
          <WatchlistAction status={show.status} onClick={onClick} />
        </>
      }
    />
  );
};

export default TallShowCard;
