import React, { useContext } from 'react';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import Section from '../../../../../../components/Section';
import ShowsCollection from '../../../../components/ShowsCollection';
import { RecommendationsContext } from '../../contexts/RecommendationsContext';

const RecommendationsSection = () => {
  const { shows, loading } = useContext(RecommendationsContext);

  return (
    <Section title="Recommendations" icon={<AutoFixNormalIcon />}>
      <ShowsCollection shows={shows} loading={loading} scroll />
    </Section>
  );
};

export default RecommendationsSection;
