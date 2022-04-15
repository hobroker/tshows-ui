import { Rating } from '@mui/lab';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledRating = styled(Rating)``;

const ShowRating = () => {
  const [value, setValue] = useState<number | null>(2);

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledRating
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
    </Box>
  );
};

export default ShowRating;
