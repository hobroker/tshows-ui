import TallCardCollection from '../../../components/base/TallCardCollection';
import { EpisodeType } from '../../../../home/contexts/UpNextContext';
import TallEpisodeCard from './TallEpisodeCard';
import TallEpisodeCardPlaceholder from './TallEpisodeCardPlaceholder';

interface Props {
  loading: boolean;
  episodes: Array<EpisodeType>;
}

const TallEpisodeCollection = ({ episodes, loading }: Props) => (
  <TallCardCollection
    loading={loading}
    scroll
    PlaceholderComponent={TallEpisodeCardPlaceholder}
  >
    {episodes.map((episode) => (
      <TallEpisodeCard key={episode.externalId} episode={episode} />
    ))}
  </TallCardCollection>
);

export default TallEpisodeCollection;
