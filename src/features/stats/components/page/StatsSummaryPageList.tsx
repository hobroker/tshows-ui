import { Box, Paper, Typography } from '@mui/material';
import { ReactNode, useContext, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { StatsSummaryContext } from '../../contexts/StatsSummaryContext';
import { StatsSummaryItemKey } from '../../../../generated/graphql';
import minutesToDuration from '../../utils/minutesToDuration';
import pluralize from '../../utils/pluralize';

const Bold = styled('span')`
  font-weight: bold;
`;

const Uppercase = styled('span')`
  text-transform: uppercase;
`;

const StatsSummaryItemKeyToText = {
  [StatsSummaryItemKey.WatchingTvShowsCount]: (value: number) => (
    <>
      <Typography variant="h4">
        <Bold>{value}</Bold>
      </Typography>
      <Uppercase>{pluralize(value, 'TV Show')}</Uppercase>
    </>
  ),
  [StatsSummaryItemKey.WatchedEpisodesCount]: (value: number) => (
    <>
      <Typography variant="h4">
        <Bold>{value}</Bold>
      </Typography>
      <Uppercase>{pluralize(value, 'Episode')}</Uppercase>
    </>
  ),
  [StatsSummaryItemKey.SpentMinutes]: (value: number) => (
    <>
      <Typography variant="h4">
        <Bold>{minutesToDuration(value)}</Bold>
      </Typography>
      <Uppercase>spent</Uppercase>
    </>
  ),
};

interface Item {
  key: StatsSummaryItemKey;
  value: ReactNode;
}

const StatsSummaryPageList = () => {
  const { statsItems } = useContext(StatsSummaryContext);
  const data = useMemo<Item[]>(
    () =>
      statsItems.map(({ key, value }) => ({
        key,
        value: StatsSummaryItemKeyToText[key](value),
      })),
    [statsItems],
  );

  return (
    <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
      {data.map(({ key, value }) => (
        <Paper key={key} variant="outlined" sx={{ flex: 1, p: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            {value}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default StatsSummaryPageList;
