import * as React from 'react';
import { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ShowPageContext } from '../../contexts/ShowPageContext';
import SeasonAccordionSummary from './SeasonAccordionSummary';

const SeasonsAccordion = () => {
  const [expanded, setExpanded] = React.useState<number>();
  const { show } = useContext(ShowPageContext);
  const seasons = show?.details?.seasons;

  if (!seasons) {
    return null;
  }

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
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
          <SeasonAccordionSummary season={season} />
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default SeasonsAccordion;
