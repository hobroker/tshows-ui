import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { DateTime } from 'luxon';
import { styled } from '@mui/material/styles';
import { ShowPageContext } from '../../contexts/ShowPageContext';
import ShowRating from './ShowRating';

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: ${({ theme }) => theme.spacing(0.5)};
  align-items: center;
`;

const ShowSubtitle = () => {
  const { show } = useContext(ShowPageContext);
  const episodeRuntime = show?.details?.episodeRuntime;
  const items = [
    {
      icon: <CalendarMonthIcon color="primary" />,
      text: DateTime.fromISO(show?.firstAirDate).toFormat('d MMM yyyy'),
    },
    {
      icon: <AccessTimeIcon color="primary" />,
      text: `${episodeRuntime} min`,
    },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {items.map(({ icon, text }) => (
        <Wrapper sx={{ mr: 1 }} key={text}>
          {icon}
          <Typography variant="subtitle1" color="white">
            {text}
          </Typography>
        </Wrapper>
      ))}
      <ShowRating />
    </Box>
  );
};

export default ShowSubtitle;
