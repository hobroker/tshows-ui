import { useContext } from 'react';
import { Status } from '../../../generated/graphql';
import { PartialWatchlistContext } from '../../watchlist/contexts/PartialWatchlistContext';
import WatchlistAction from './WatchlistAction';
import TallCard from './base/TallCard';

interface Props {
  externalId: number;
  tallImage: string;
  name: string;
  status: Status;
}

const TallShowCard = ({ externalId, tallImage, name, status }: Props) => {
  const { upsertWatchlistItem } = useContext(PartialWatchlistContext);

  const onClick = (status: Status) => {
    upsertWatchlistItem({ showId: externalId, status });
  };

  return (
    <TallCard
      tallImage={tallImage}
      actions={
        <>
          <WatchlistAction status={status} onClick={onClick} />
        </>
      }
    />
  );
};

export default TallShowCard;
