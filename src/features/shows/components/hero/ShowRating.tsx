import { Rating, Box, Typography } from '@mui/material';
import { useState } from 'react';

const ShowRating = () => {
  const [value, setValue] = useState<number | null>(2);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
      <Typography
        variant="h6"
        color={({ components }) =>
          components?.MuiRating?.styleOverrides?.iconFilled as string
        }
        sx={{ ml: 1, fontWeight: 'bold' }}
      >
        {value}/5
      </Typography>
    </Box>
  );
};

export default ShowRating;
