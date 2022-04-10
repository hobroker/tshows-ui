import { useContext } from 'react';
import TallEpisodeCollection from '../../shows/features/episode/components/TallEpisodeCollection';
import { UpNextContext } from '../contexts/UpNextContext';
import Section from './Section';

const UpNextSection = () => {
  const { episodes, loading } = useContext(UpNextContext);

  return (
    <Section title="Up next to watch">
      <TallEpisodeCollection episodes={episodes} loading={loading} />
    </Section>
  );
};

export default UpNextSection;
