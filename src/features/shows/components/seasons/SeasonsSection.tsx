import { Box } from '@mui/material';
import { useContext } from 'react';
import { ShowPageContext } from '../../contexts/ShowPageContext';
import Section from '../../../../components/Section';
import SeasonsAccordion from './SeasonsAccordion';

const SeasonsSection = () => {
  const { show } = useContext(ShowPageContext);
  const { seasons } = show.details;

  return (
    <Box>
      <Section title={`${seasons.length} seasons`}>
        <Box sx={{ mb: 1 }} />
        <SeasonsAccordion />
      </Section>
    </Box>
  );
};

export default SeasonsSection;
