import { Box, Paper } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { not } from 'ramda';
import Section from '../../../components/Section';
import { ReviewContext } from '../contexts/ReviewContext';
import IndefiniteLoading from '../../../components/IndefiniteLoading';
import ReviewForm from './ReviewForm';
import ReviewsList from './ReviewsList';
import RatingInfo from './RatingInfo';

const ReviewsSection = () => {
  const { ownReview, rating, loading } = useContext(ReviewContext);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleIsFormOpen = useCallback(() => setIsFormOpen(not), []);

  useEffect(() => {
    if (ownReview) {
      setIsFormOpen(false);
    } else {
      setIsFormOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownReview?.id]);

  return (
    <Box>
      <Section
        title="Reviews"
        afterTitle={
          rating !== 0 ? (
            <RatingInfo
              variant="h5"
              value={rating}
              sx={{
                ml: 'auto',
              }}
            />
          ) : (
            ''
          )
        }
        sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
      >
        <Paper sx={{ p: 2 }}>
          {loading ? (
            <IndefiniteLoading />
          ) : (
            <>
              {isFormOpen && <ReviewForm toggleIsFormOpen={toggleIsFormOpen} />}
              <ReviewsList toggleIsFormOpen={toggleIsFormOpen} />
            </>
          )}
        </Paper>
      </Section>
    </Box>
  );
};

export default ReviewsSection;
