import { useCallback, useEffect, useState } from 'react';
import {
  useGetRatingLazyQuery,
  useUpdateRatingMutation,
} from '../../../generated/graphql';

const useRating = (showId: number) => {
  const [rating, setRating] = useState(0);
  const [fetchRating] = useGetRatingLazyQuery({ variables: { showId } });
  const [updateRatingMutation] = useUpdateRatingMutation();
  const updateRating = useCallback(
    (rating: number) => {
      setRating(rating);

      return updateRatingMutation({ variables: { showId, rating } });
    },
    [showId, updateRatingMutation],
  );

  useEffect(() => {
    fetchRating().then(({ data }) => {
      if (data) {
        setRating(data.getRating.rating);
      }
    });
  }, [fetchRating]);

  return { rating, updateRating };
};

export default useRating;
