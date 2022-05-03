import { Box, Button, Divider, Paper, Stack } from '@mui/material';
import React, { useContext } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { UserContext } from '../../contexts/UserContext';
import DarkTheme from '../../../theme/components/DarkTheme';
import Header from './Header';
import SubtitleList from './SubtitleList';

const UserSummarySection = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }

  return (
    <DarkTheme>
      <Paper sx={{ my: 2, p: 2 }}>
        <Stack sx={{ gap: 2 }}>
          <Header avatar={user.avatar} date={user.createdAt} name={user.name} />
          <Paper
            variant="outlined"
            sx={{ px: 2, py: 1, display: 'flex', gap: 2 }}
          >
            <Box sx={{ flex: 1 }}>
              <SubtitleList />
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
        </Stack>
      </Paper>
    </DarkTheme>
  );
};

export default UserSummarySection;
