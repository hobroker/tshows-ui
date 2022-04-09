import { useListUpNextQuery } from '../../../../../generated/graphql';
import TallCardCollection from '../../../components/base/TallCardCollection';
import Section from '../../../../home/components/Section';
import TallEpisodeCard from './TallEpisodeCard';

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
