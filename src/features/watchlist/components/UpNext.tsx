import { useListUpNextQuery } from '../../../generated/graphql';
import TallEpisodeCard from '../../shows/features/episode/components/TallEpisodeCard';
import TallCardCollection from '../../shows/components/base/TallCardCollection';
import Section from './Section';

const UpNext = () => {
  const { data, loading, error } = useListUpNextQuery();

  console.log('error', error);

  const episodes = data?.listUpNext ?? [];

  return (
    <Section title="Up next to watch">
      <TallCardCollection loading={loading}>
        {episodes.map((episode) => (
          <TallEpisodeCard key={episode.externalId} episode={episode} />
        ))}
      </TallCardCollection>
    </Section>
  );
};

export default UpNext;
