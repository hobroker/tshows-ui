import React, { useContext } from 'react';
import Section from '../../../../../components/Section';
import { SimilarShowsContext } from '../contexts/SimilarShowsContext';
import SimilarShowsCollection from './SimilarShowsCollection';

const SimilarShowsSection = () => {
  const { shows, loading } = useContext(SimilarShowsContext);

  return (
    <Section title="Similar TV Shows">
      <SimilarShowsCollection shows={shows} loading={loading} />
    </Section>
  );
};

export default SimilarShowsSection;
