import { Box, Button, Divider, Paper, Stack } from '@mui/material';
import React, { useContext } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DarkTheme from '../../../theme/components/DarkTheme';
import { User } from '../../../../generated/graphql';
import { StatsSummaryContext } from '../../contexts/StatsSummaryContext';
import IndefiniteLoading, {
  IndefiniteLoadingSize,
} from '../../../../components/IndefiniteLoading';
import Header from './Header';
import StatsList from './StatsList';

interface Props {
  user: User;
}

const StatsSummarySection = ({ user }: Props) => {
  const { loading } = useContext(StatsSummaryContext);

  return (
    <DarkTheme>
      <Paper sx={{ my: 2, p: 2 }}>
        <Stack sx={{ gap: 2 }}>
          <Header avatar={user.avatar} date={user.createdAt} name={user.name} />
          {loading ? (
            <IndefiniteLoading size={IndefiniteLoadingSize.Small} />
          ) : (
            <Paper
              variant="outlined"
              sx={{ px: 2, py: 1, display: 'flex', gap: 2 }}
            >
              <Box sx={{ flex: 1 }}>
                <StatsList />
              </Box>
              <Divider orientation="vertical" flexItem />
              <Button
                variant="text"
                href="/"
                size="small"
                endIcon={<ArrowForwardIosIcon />}
                sx={{ ml: 'auto' }}
              >
                Statistics
              </Button>
            </Paper>
          )}
        </Stack>
      </Paper>
    </DarkTheme>
  );
};

export default StatsSummarySection;
