import React, { SyntheticEvent, useContext, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummary } from '@mui/material';
import { ShowPageContext } from '../../contexts/ShowPageContext';
import SeasonSummary from './SeasonSummary';
import SeasonDetails from './SeasonDetails';

const SeasonsAccordion = () => {
  const [expanded, setExpanded] = useState<number>();
  const { show, episodesMap, fetchSeason } = useContext(ShowPageContext);
  const seasons = show?.details?.seasons;
  const fetchEpisodes = (seasonNumber: number) => {
    fetchSeason(seasonNumber);
  };

  if (!seasons) {
    return null;
  }

  const handleChange =
    (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
      if (isExpanded) {
        fetchEpisodes(panel);
      }

      setExpanded(isExpanded ? panel : undefined);
    };

  return (
    <div>
      {seasons.map((season) => (
        <Accordion
          key={season.number}
          expanded={expanded === season.number}
          onChange={handleChange(season.number)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <SeasonSummary season={season} />
          </AccordionSummary>
          <AccordionDetails>
            <SeasonDetails
              seasonNumber={season.number}
              episodes={episodesMap[season.number]}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default SeasonsAccordion;
