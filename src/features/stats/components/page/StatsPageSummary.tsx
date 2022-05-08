import React, { useContext } from 'react';
import { Paper } from '@mui/material';
import { StatsSummaryContext } from '../../contexts/StatsSummaryContext';
import IndefiniteLoading, {
  IndefiniteLoadingSize,
} from '../../../../components/IndefiniteLoading';
import DarkTheme from '../../../theme/components/DarkTheme';
import StatsSummaryPageList from './StatsSummaryPageList';

const StatsPageSummary = () => {
  const { loading } = useContext(StatsSummaryContext);

  return (
    <DarkTheme>
      <Paper sx={{ my: 2, p: 2 }}>
        {loading ? (
          <IndefiniteLoading size={IndefiniteLoadingSize.Small} />
        ) : (
          <StatsSummaryPageList />
        )}
      </Paper>
    </DarkTheme>
  );
};

export default StatsPageSummary;
