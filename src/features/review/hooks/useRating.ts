import { useEffect, useState } from 'react';
import { useGetRatingLazyQuery } from '../../../generated/graphql';

const useRating = (showId: number) => {
  const [rating, setRating] = useState(0);
  const [fetchRating] = useGetRatingLazyQuery({ variables: { showId } });

  useEffect(() => {
    fetchRating().then(({ data }) => {
      if (!data) return;
      setRating(data.getRating.rating);
    });
  }, [fetchRating]);

  return { rating };
};

export default useRating;
