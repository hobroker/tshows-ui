import { Box, Stack, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import UserAvatar from '../../../user/components/UserAvatar';

interface Props {
  avatar?: string | null;
  name?: string;
  date: string;
}

const Header = ({ avatar, date, name }: Props) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      flexDirection: {
        xs: 'column',
        sm: 'row',
      },
    }}
  >
    <UserAvatar src={avatar} sx={{ width: 100, height: 100 }} />
    <Stack>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        Hello, {name}
      </Typography>
      <Typography variant="button" sx={{ fontWeight: 'bold' }}>
        <Typography
          variant="button"
          sx={{ fontWeight: 'bold', color: 'text.secondary' }}
        >
          Member since{' '}
        </Typography>
        {DateTime.fromISO(date).toFormat('d MMM, yyyy')}
      </Typography>
    </Stack>
  </Box>
);

export default Header;
