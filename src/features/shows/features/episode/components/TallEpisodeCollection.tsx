import { Episode, EpisodeShowFragment } from '../../../../../generated/graphql';
import TallCardCollection from '../../../components/base/TallCardCollection';
import TallEpisodeCard from './TallEpisodeCard';

interface Props {
  loading: boolean;
  episodes: Array<
    Omit<Episode, 'show'> & {
      show: EpisodeShowFragment;
    }
  >;
}

const TallEpisodeCollection = ({ episodes, loading }: Props) => (
  <TallCardCollection loading={loading} scroll>
    {episodes.map((episode) => (
      <TallEpisodeCard key={episode.externalId} episode={episode} />
    ))}
  </TallCardCollection>
);

export default TallEpisodeCollection;
