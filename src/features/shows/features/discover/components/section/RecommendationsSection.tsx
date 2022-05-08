import React, { useContext } from 'react';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import Section from '../../../../../../components/Section';
import ShowsCollection from '../../../../components/ShowsCollection';
import { RecommendationsSectionContext } from '../../contexts/RecommendationsSectionContext';

const RecommendationsSection = () => {
  const { shows, loading } = useContext(RecommendationsSectionContext);

  return (
    <Section title="Recommendations" icon={<AutoFixNormalIcon />}>
      <ShowsCollection shows={shows} loading={loading} scroll />
    </Section>
  );
};

export default RecommendationsSection;
