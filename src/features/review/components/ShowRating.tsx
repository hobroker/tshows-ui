import { Box, Rating, Typography } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';

const ShowRating = () => {
  const { ownReview, upsertReview } = useContext(ReviewContext);
  const [rating, setRating] = useState(0);
  const onUpdate = useCallback(
    (value: number | null) => {
      if (!value) return;

      setRating(value);
      upsertReview({ rating: value }, true);
    },
    [upsertReview],
  );

  useEffect(() => {
    if (!ownReview) return;

    setRating(ownReview.rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownReview?.id]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating
        value={rating}
        onChange={(event, newValue) => onUpdate(newValue)}
      />
      {rating !== 0 ? (
        <Typography
          variant="h6"
          color={({ components }) =>
            components?.MuiRating?.styleOverrides?.iconFilled as string
          }
          sx={{ ml: 1, fontWeight: 'bold' }}
        >
          {rating}/5
        </Typography>
      ) : (
        ''
      )}
    </Box>
  );
};

export default ShowRating;
