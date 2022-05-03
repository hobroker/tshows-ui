import { Box, Typography } from '@mui/material';

const SubtitleList = () => {
  const data = [
    { before: 'watching', after: '12 TV shows' },
    { before: 'watched', after: '305 episodes' },
    { before: 'spent', after: '43 hours' },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {data.map(({ before, after }) => (
        <Typography
          key={before}
          variant="overline"
          sx={{ display: 'flex', gap: 0.5 }}
        >
          {before}
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            {after}
          </Box>
        </Typography>
      ))}
    </Box>
  );
};

export default SubtitleList;
