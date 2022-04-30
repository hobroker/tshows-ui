import { Box, Rating, Typography } from '@mui/material';
import useRating from '../../../review/hooks/useRating';

interface Props {
  showId: number;
}

const ShowRating = ({ showId }: Props) => {
  const { rating, updateRating } = useRating(showId);
  const onUpdate = (value: number | null) => {
    if (!value) return;

    updateRating(value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="button" color="white" sx={{ mr: 1 }}>
        Your Rating
      </Typography>
      <Rating
        value={rating}
        onChange={(event, newValue) => onUpdate(newValue)}
      />
      {rating && (
        <Typography
          variant="h6"
          color={({ components }) =>
            components?.MuiRating?.styleOverrides?.iconFilled as string
          }
          sx={{ ml: 1, fontWeight: 'bold' }}
        >
          {rating}/5
        </Typography>
      )}
    </Box>
  );
};

export default ShowRating;
