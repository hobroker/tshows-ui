import { useListUpNextQuery } from '../../../generated/graphql';
import TallEpisodeCollection from '../../shows/features/episode/components/TallEpisodeCollection';
import Section from './Section';

const UpNextSection = () => {
  const { data, loading } = useListUpNextQuery();

  const episodes = data?.listUpNext ?? [];

  return (
    <Section title="Up next to watch">
      <TallEpisodeCollection episodes={episodes} loading={loading} />
    </Section>
  );
};

export default UpNextSection;
