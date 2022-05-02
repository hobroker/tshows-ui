import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  ReviewFragment,
  useGetRatingQuery,
  useGetReviewsQuery,
  useUpsertReviewMutation,
} from '../../../generated/graphql';
import { ShowPageContext } from '../../shows/contexts/ShowPageContext';
import { noop } from '../../../utils/fp';

type UpsertReviewProps =
  | {
      title: string;
      content: string;
    }
  | { rating: number };

interface ContextType {
  reviews: ReviewFragment[];
  ownReview?: ReviewFragment;
  rating: number;
  loading: boolean;
  upsertReview: (value: UpsertReviewProps, avoidRefetch?: boolean) => void;
}

const ReviewContext = createContext<ContextType>({
  rating: 0,
  reviews: [],
  ownReview: undefined,
  loading: true,
  upsertReview: noop,
});

interface Props {
  children: ReactNode;
}

const ReviewProvider = ({ children }: Props) => {
  const { show } = useContext(ShowPageContext);
  const showId = show.externalId;
  const [upsertReviewMutation] = useUpsertReviewMutation();
  const { data, refetch: refetchReviews } = useGetReviewsQuery({
    variables: { showId },
    notifyOnNetworkStatusChange: true,
  });
  const [loading, setLoading] = useState(true);
  const [ownReview, setOwnReview] = useState<ReviewFragment>();
  const [otherReviews, setOtherReviews] = useState<ReviewFragment[]>([]);

  const [rating, setRating] = useState(0);
  const { data: ratingData, refetch: refetchRating } = useGetRatingQuery({
    variables: { showId },
  });

  const upsertReview = useCallback(
    (value: UpsertReviewProps, avoidRefetch?: boolean) => {
      if (!avoidRefetch) {
        setLoading(true);
      }
      upsertReviewMutation({
        variables: { showId, ...value },
      }).then(() => {
        if (!avoidRefetch) {
          return refetchReviews().then(() => setLoading(false));
        }

        refetchRating();
        setOwnReview((review) => {
          if (!review) return review;

          return { ...review, ...value };
        });
      });
    },
    [refetchRating, refetchReviews, showId, upsertReviewMutation],
  );

  useEffect(() => {
    if (!data) return;

    setLoading(false);

    if (data.getMyReview) {
      setOwnReview(data.getMyReview);
    } else {
    }
    setOtherReviews(data.getOtherReviews);
  }, [data]);

  useEffect(() => {
    if (!ratingData) return;

    setRating(ratingData.getRating.rating);
  }, [ratingData]);

  const reviews = ownReview ? [ownReview, ...otherReviews] : [...otherReviews];

  return (
    <ReviewContext.Provider
      value={{
        loading,
        reviews,
        rating,
        upsertReview,
        ownReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext };

export default ReviewProvider;
