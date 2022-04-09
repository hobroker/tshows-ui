import { useListUpNextQuery } from '../../../generated/graphql';
import TallEpisodeCard from '../../shows/features/episode/components/TallEpisodeCard';
import TallCardCollection from '../../shows/components/base/TallCardCollection';
import TallEpisodeCardPlaceholder from '../../shows/features/episode/components/TallEpisodeCardPlaceholder';
import Section from './Section';

const UpNext = () => {
  const { data, loading } = useListUpNextQuery();

  const episodes = data?.listUpNext ?? [];

  return (
    <Section title="Up next to watch">
      <TallCardCollection loading={loading} scroll>
        {episodes.map((episode) => (
          <TallEpisodeCard key={episode.externalId} episode={episode} />
        ))}
      </TallCardCollection>
    </Section>
  );
};

export default UpNext;
