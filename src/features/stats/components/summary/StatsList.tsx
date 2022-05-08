import { Typography } from '@mui/material';
import { ReactNode, useContext, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { StatsSummaryContext } from '../../contexts/StatsSummaryContext';
import { StatsSummaryItemKey } from '../../../../generated/graphql';
import minutesToDuration from '../../utils/minutesToDuration';
import pluralize from '../../utils/pluralize';

const Bold = styled('span')`
  font-weight: bold;
`;

const StatsSummaryItemKeyToText = {
  [StatsSummaryItemKey.SpentMinutes]: (value: number) => (
    <span>
      spent <Bold>{minutesToDuration(value)}</Bold>
    </span>
  ),
  [StatsSummaryItemKey.WatchedEpisodesCount]: (value: number) => (
    <span>
      watched <Bold>{value}</Bold> {pluralize(value, 'episode')}
    </span>
  ),
  [StatsSummaryItemKey.WatchingTvShowsCount]: (value: number) => (
    <span>
      watching <Bold>{value}</Bold> {pluralize(value, 'TV show')}
    </span>
  ),
};

interface Item {
  key: StatsSummaryItemKey;
  value: ReactNode;
}

const StatsList = () => {
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
    <Typography
      variant="overline"
      sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
      {data.map(({ key, value }) => (
        <span key={key}>{value}</span>
      ))}
    </Typography>
  );
};

export default StatsList;
