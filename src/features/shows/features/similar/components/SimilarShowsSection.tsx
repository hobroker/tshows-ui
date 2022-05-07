import React, { useContext } from 'react';
import Section from '../../../../../components/Section';
import { SimilarShowsContext } from '../contexts/SimilarShowsContext';
import ShowsCollection from '../../../components/ShowsCollection';

const SimilarShowsSection = () => {
  const { shows, loading } = useContext(SimilarShowsContext);

  return (
    <Section title="Similar TV Shows">
      <ShowsCollection shows={shows} loading={loading} scroll />
    </Section>
  );
};

export default SimilarShowsSection;
