import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { DateTime } from 'luxon';
import { styled } from '@mui/material/styles';
import { ShowPageContext } from '../../../contexts/ShowPageContext';

const Wrapper = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const Item = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: ${({ theme }) => theme.spacing(0.5)};
  align-items: center;
`;

const ShowSubtitle = () => {
  const { show } = useContext(ShowPageContext);
  const items = [
    {
      icon: <CalendarMonthIcon color="primary" />,
      text:
        DateTime.fromISO(show.firstAirDate).toFormat('d MMM yyyy') +
        (show.originCountry ? ` (${show.originCountry})` : ''),
    },
    {
      icon: <AccessTimeIcon color="primary" />,
      text: `${show.episodeRuntime} min`,
    },
  ];

  return (
    <Wrapper>
      {items.map(({ icon, text }) => (
        <Item sx={{ mr: 1 }} key={text}>
          {icon}
          <Typography variant="button" color="white">
            {text}
          </Typography>
        </Item>
      ))}
    </Wrapper>
  );
};

export default ShowSubtitle;
