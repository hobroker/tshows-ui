import { useListUpNextQuery } from '../../../generated/graphql';
import EpisodesCollection from '../../shows/features/episode/components/EpisodesCollection';
import Section from './Section';

const UpNextSection = () => {
  const { data, loading } = useListUpNextQuery();

  const episodes = data?.listUpNext ?? [];

  return (
    <Section title="Up next to watch">
      <EpisodesCollection episodes={episodes} loading={loading} />
    </Section>
  );
};

export default UpNextSection;
