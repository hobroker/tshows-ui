import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type DiscoverShowsInput = {
  genreIds: Array<Scalars['Int']>;
};

export type Episode = {
  __typename?: 'Episode';
  airDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  externalId: Scalars['Int'];
  id: Scalars['Int'];
  isWatched: Scalars['Boolean'];
  name: Scalars['String'];
  number: Scalars['Int'];
  seasonNumber: Scalars['Int'];
  show: PartialShow;
  wideImage?: Maybe<Scalars['String']>;
};

export type FullShow = {
  __typename?: 'FullShow';
  description: Scalars['String'];
  details: ShowDetails;
  externalId: Scalars['Int'];
  firstAirDate: Scalars['DateTime'];
  genres: Array<Genre>;
  name: Scalars['String'];
  originCountry: Scalars['String'];
  status: Status;
  tallImage: Scalars['String'];
  wideImage: Scalars['String'];
};

export type FullShowInput = {
  externalId: Scalars['Int'];
};

export type Genre = {
  __typename?: 'Genre';
  externalId: Scalars['Int'];
  name: Scalars['String'];
};

export type GetRatingInput = {
  showId: Scalars['Int'];
};

export type GetReviewInput = {
  showId: Scalars['Int'];
};

export type GetSeasonEpisodesInput = {
  seasonNumber: Scalars['Int'];
  showId: Scalars['Int'];
};

export type JoinWithGoogleInput = {
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  joinWithGoogle: User;
  logout: Void;
  refresh: User;
  toggleGenrePreference: Void;
  upsertEpisode?: Maybe<Episode>;
  upsertReview: Review;
  upsertWatchlistItem: Watchlist;
};

export type MutationJoinWithGoogleArgs = {
  input: JoinWithGoogleInput;
};

export type MutationToggleGenrePreferenceArgs = {
  input: ToggleGenrePreferenceInput;
};

export type MutationUpsertEpisodeArgs = {
  input: UpsertEpisodeInput;
};

export type MutationUpsertReviewArgs = {
  input: UpsertReviewInput;
};

export type MutationUpsertWatchlistItemArgs = {
  input: UpsertWatchlistInput;
};

export type PartialShow = {
  __typename?: 'PartialShow';
  description: Scalars['String'];
  externalId: Scalars['Int'];
  firstAirDate: Scalars['DateTime'];
  genres: Array<Genre>;
  name: Scalars['String'];
  originCountry: Scalars['String'];
  status: Status;
  tallImage: Scalars['String'];
  wideImage: Scalars['String'];
};

export type Preference = {
  __typename?: 'Preference';
  genres: Array<Genre>;
};

export type Query = {
  __typename?: 'Query';
  allUsers: User;
  discoverShows: Array<PartialShow>;
  fullShow: FullShow;
  getMyReview?: Maybe<Review>;
  getMyShows: Array<PartialShow>;
  getOtherReviews: Array<Review>;
  getPreferences?: Maybe<Preference>;
  getRating: Review;
  getSeasonEpisodes: Array<Episode>;
  getSimilarShows: Array<PartialShow>;
  getStatsSummary: Array<StatsSummaryItem>;
  getWatchlist: Array<Watchlist>;
  listGenres?: Maybe<Array<Genre>>;
  listUpNext: Array<Episode>;
  listUpcoming: Array<Episode>;
  me: User;
};

export type QueryDiscoverShowsArgs = {
  input: DiscoverShowsInput;
};

export type QueryFullShowArgs = {
  input: FullShowInput;
};

export type QueryGetMyReviewArgs = {
  input: GetReviewInput;
};

export type QueryGetOtherReviewsArgs = {
  input: GetReviewInput;
};

export type QueryGetRatingArgs = {
  input: GetRatingInput;
};

export type QueryGetSeasonEpisodesArgs = {
  input: GetSeasonEpisodesInput;
};

export type QueryGetSimilarShowsArgs = {
  input: SimilarShowsInput;
};

export type Review = {
  __typename?: 'Review';
  content: Scalars['String'];
  id: Scalars['Int'];
  rating: Scalars['Int'];
  title: Scalars['String'];
  user: User;
};

export type Season = {
  __typename?: 'Season';
  airDate: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  episodeCount: Scalars['String'];
  name: Scalars['String'];
  number: Scalars['Int'];
  tallImage: Scalars['String'];
};

export type ShowDetails = {
  __typename?: 'ShowDetails';
  episodeRuntime: Scalars['Int'];
  isInProduction: Scalars['Boolean'];
  seasons: Array<Season>;
  tagline?: Maybe<Scalars['String']>;
};

export type SimilarShowsInput = {
  externalId: Scalars['Int'];
};

export type StatsSummaryItem = {
  __typename?: 'StatsSummaryItem';
  key: StatsSummaryItemKey;
  value: Scalars['Int'];
};

export enum StatsSummaryItemKey {
  SpentMinutes = 'SpentMinutes',
  WatchedEpisodesCount = 'WatchedEpisodesCount',
  WatchingTvShowsCount = 'WatchingTvShowsCount',
}

export enum Status {
  InWatchlist = 'InWatchlist',
  None = 'None',
  StoppedWatching = 'StoppedWatching',
}

export type ToggleGenrePreferenceInput = {
  genreId: Scalars['Int'];
};

export type UpsertEpisodeInput = {
  episodeId: Scalars['Int'];
  isWatched: Scalars['Boolean'];
};

export type UpsertReviewInput = {
  content?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  showId: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpsertWatchlistInput = {
  showId: Scalars['Int'];
  status: Status;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Void = {
  __typename?: 'Void';
  _?: Maybe<Scalars['String']>;
};

export type Watchlist = {
  __typename?: 'Watchlist';
  show: PartialShow;
  status: Status;
};

export type ListGenresQueryVariables = Exact<{ [key: string]: never }>;

export type ListGenresQuery = {
  __typename?: 'Query';
  listGenres?: Array<{
    __typename?: 'Genre';
    externalId: number;
    name: string;
  }> | null;
};

export type ListUpcomingQueryVariables = Exact<{ [key: string]: never }>;

export type ListUpcomingQuery = {
  __typename?: 'Query';
  listUpcoming: Array<{
    __typename?: 'Episode';
    id: number;
    externalId: number;
    number: number;
    seasonNumber: number;
    isWatched: boolean;
    name: string;
    description?: string | null;
    wideImage?: string | null;
    airDate?: any | null;
    show: {
      __typename?: 'PartialShow';
      externalId: number;
      name: string;
      wideImage: string;
      tallImage: string;
    };
  }>;
};

export type ListUpNextQueryVariables = Exact<{ [key: string]: never }>;

export type ListUpNextQuery = {
  __typename?: 'Query';
  listUpNext: Array<{
    __typename?: 'Episode';
    id: number;
    externalId: number;
    number: number;
    seasonNumber: number;
    isWatched: boolean;
    name: string;
    description?: string | null;
    wideImage?: string | null;
    airDate?: any | null;
    show: {
      __typename?: 'PartialShow';
      externalId: number;
      name: string;
      wideImage: string;
      tallImage: string;
    };
  }>;
};

export type JoinWithGoogleMutationVariables = Exact<{
  input: JoinWithGoogleInput;
}>;

export type JoinWithGoogleMutation = {
  __typename?: 'Mutation';
  joinWithGoogle: { __typename?: 'User'; name: string; email: string };
};

export type DiscoverShowsQueryVariables = Exact<{
  genreIds: Array<Scalars['Int']> | Scalars['Int'];
}>;

export type DiscoverShowsQuery = {
  __typename?: 'Query';
  discoverShows: Array<{
    __typename?: 'PartialShow';
    externalId: number;
    name: string;
    description: string;
    wideImage: string;
    tallImage: string;
    firstAirDate: any;
    originCountry: string;
    status: Status;
  }>;
};

export type ToggleGenrePreferenceMutationVariables = Exact<{
  genreId: Scalars['Int'];
}>;

export type ToggleGenrePreferenceMutation = {
  __typename?: 'Mutation';
  toggleGenrePreference: { __typename: 'Void' };
};

export type GetPreferencesQueryVariables = Exact<{ [key: string]: never }>;

export type GetPreferencesQuery = {
  __typename?: 'Query';
  getPreferences?: {
    __typename?: 'Preference';
    genres: Array<{ __typename?: 'Genre'; externalId: number }>;
  } | null;
};

export type GetRatingQueryVariables = Exact<{
  showId: Scalars['Int'];
}>;

export type GetRatingQuery = {
  __typename?: 'Query';
  getRating: { __typename?: 'Review'; rating: number };
};

export type GetReviewsQueryVariables = Exact<{
  showId: Scalars['Int'];
}>;

export type GetReviewsQuery = {
  __typename?: 'Query';
  getOtherReviews: Array<{
    __typename?: 'Review';
    id: number;
    rating: number;
    title: string;
    content: string;
    user: {
      __typename?: 'User';
      id: number;
      avatar?: string | null;
      name: string;
    };
  }>;
  getMyReview?: {
    __typename?: 'Review';
    id: number;
    rating: number;
    title: string;
    content: string;
    user: {
      __typename?: 'User';
      id: number;
      avatar?: string | null;
      name: string;
    };
  } | null;
};

export type ReviewFragment = {
  __typename?: 'Review';
  id: number;
  rating: number;
  title: string;
  content: string;
  user: {
    __typename?: 'User';
    id: number;
    avatar?: string | null;
    name: string;
  };
};

export type UpsertReviewMutationVariables = Exact<{
  showId: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
}>;

export type UpsertReviewMutation = {
  __typename?: 'Mutation';
  upsertReview: {
    __typename?: 'Review';
    id: number;
    rating: number;
    title: string;
    content: string;
    user: {
      __typename?: 'User';
      id: number;
      avatar?: string | null;
      name: string;
    };
  };
};

export type UpsertEpisodeMutationVariables = Exact<{
  episodeId: Scalars['Int'];
  isWatched?: InputMaybe<Scalars['Boolean']>;
}>;

export type UpsertEpisodeMutation = {
  __typename?: 'Mutation';
  upsertEpisode?: {
    __typename?: 'Episode';
    id: number;
    externalId: number;
    number: number;
    seasonNumber: number;
    isWatched: boolean;
    name: string;
    description?: string | null;
    wideImage?: string | null;
    airDate?: any | null;
    show: {
      __typename?: 'PartialShow';
      externalId: number;
      name: string;
      wideImage: string;
      tallImage: string;
    };
  } | null;
};

export type EpisodeWithShowFragment = {
  __typename?: 'Episode';
  id: number;
  externalId: number;
  number: number;
  seasonNumber: number;
  isWatched: boolean;
  name: string;
  description?: string | null;
  wideImage?: string | null;
  airDate?: any | null;
  show: {
    __typename?: 'PartialShow';
    externalId: number;
    name: string;
    wideImage: string;
    tallImage: string;
  };
};

export type GetSeasonEpisodesQueryVariables = Exact<{
  showId: Scalars['Int'];
  seasonNumber: Scalars['Int'];
}>;

export type GetSeasonEpisodesQuery = {
  __typename?: 'Query';
  getSeasonEpisodes: Array<{
    __typename?: 'Episode';
    id: number;
    externalId: number;
    number: number;
    seasonNumber: number;
    isWatched: boolean;
    name: string;
    description?: string | null;
    wideImage?: string | null;
    airDate?: any | null;
  }>;
};

export type EpisodeWithoutShowFragment = {
  __typename?: 'Episode';
  id: number;
  externalId: number;
  number: number;
  seasonNumber: number;
  isWatched: boolean;
  name: string;
  description?: string | null;
  wideImage?: string | null;
  airDate?: any | null;
};

export type GetMyShowsQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyShowsQuery = {
  __typename?: 'Query';
  getMyShows: Array<{
    __typename?: 'PartialShow';
    externalId: number;
    name: string;
    description: string;
    wideImage: string;
    tallImage: string;
    firstAirDate: any;
    originCountry: string;
    status: Status;
  }>;
};

export type GetSimilarShowsQueryVariables = Exact<{
  externalId: Scalars['Int'];
}>;

export type GetSimilarShowsQuery = {
  __typename?: 'Query';
  getSimilarShows: Array<{
    __typename?: 'PartialShow';
    externalId: number;
    name: string;
    tallImage: string;
  }>;
};

export type SimilarShowFragment = {
  __typename?: 'PartialShow';
  externalId: number;
  name: string;
  tallImage: string;
};

export type UpsertWatchlistItemMutationVariables = Exact<{
  showId: Scalars['Int'];
  status: Status;
}>;

export type UpsertWatchlistItemMutation = {
  __typename?: 'Mutation';
  upsertWatchlistItem: { __typename: 'Watchlist' };
};

export type GetPartialWatchlistQueryVariables = Exact<{ [key: string]: never }>;

export type GetPartialWatchlistQuery = {
  __typename?: 'Query';
  getWatchlist: Array<{
    __typename?: 'Watchlist';
    status: Status;
    show: { __typename?: 'PartialShow'; externalId: number };
  }>;
};

export type FullShowQueryVariables = Exact<{
  externalId: Scalars['Int'];
}>;

export type FullShowQuery = {
  __typename?: 'Query';
  fullShow: {
    __typename?: 'FullShow';
    externalId: number;
    name: string;
    description: string;
    wideImage: string;
    tallImage: string;
    firstAirDate: any;
    originCountry: string;
    status: Status;
    genres: Array<{ __typename?: 'Genre'; externalId: number; name: string }>;
    details: {
      __typename?: 'ShowDetails';
      episodeRuntime: number;
      isInProduction: boolean;
      seasons: Array<{
        __typename?: 'Season';
        number: number;
        description?: string | null;
        name: string;
        tallImage: string;
        episodeCount: string;
        airDate: any;
      }>;
    };
  };
};

export type PartialShowFragment = {
  __typename?: 'PartialShow';
  externalId: number;
  name: string;
  description: string;
  wideImage: string;
  tallImage: string;
  firstAirDate: any;
  originCountry: string;
  status: Status;
};

export type UpsertSeasonEpisodeMutationVariables = Exact<{
  episodeId: Scalars['Int'];
  isWatched?: InputMaybe<Scalars['Boolean']>;
}>;

export type UpsertSeasonEpisodeMutation = {
  __typename?: 'Mutation';
  upsertEpisode?: { __typename: 'Episode' } | null;
};

export type GetStatsSummaryQueryVariables = Exact<{ [key: string]: never }>;

export type GetStatsSummaryQuery = {
  __typename?: 'Query';
  getStatsSummary: Array<{
    __typename?: 'StatsSummaryItem';
    key: StatsSummaryItemKey;
    value: number;
  }>;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'User';
    id: number;
    email: string;
    name: string;
    avatar?: string | null;
    createdAt: any;
  };
  getPreferences?: {
    __typename?: 'Preference';
    genres: Array<{ __typename?: 'Genre'; externalId: number }>;
  } | null;
};

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never }>;

export type RefreshTokenMutation = {
  __typename?: 'Mutation';
  refresh: { __typename?: 'User'; id: number };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = {
  __typename?: 'Mutation';
  logout: { __typename: 'Void' };
};

export const ReviewFragmentDoc = gql`
  fragment Review on Review {
    id
    rating
    title
    content
    user {
      id
      avatar
      name
    }
  }
`;
export const EpisodeWithShowFragmentDoc = gql`
  fragment EpisodeWithShow on Episode {
    id
    externalId
    number
    seasonNumber
    isWatched
    name
    description
    wideImage
    airDate
    show {
      externalId
      name
      wideImage
      tallImage
    }
  }
`;
export const EpisodeWithoutShowFragmentDoc = gql`
  fragment EpisodeWithoutShow on Episode {
    id
    externalId
    number
    seasonNumber
    isWatched
    name
    description
    wideImage
    airDate
  }
`;
export const SimilarShowFragmentDoc = gql`
  fragment SimilarShow on PartialShow {
    externalId
    name
    tallImage
  }
`;
export const PartialShowFragmentDoc = gql`
  fragment PartialShow on PartialShow {
    externalId
    name
    description
    wideImage
    tallImage
    firstAirDate
    originCountry
    status
  }
`;
export const ListGenresDocument = gql`
  query ListGenres {
    listGenres {
      externalId
      name
    }
  }
`;

/**
 * __useListGenresQuery__
 *
 * To run a query within a React component, call `useListGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useListGenresQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListGenresQuery,
    ListGenresQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<ListGenresQuery, ListGenresQueryVariables>(
    ListGenresDocument,
    options,
  );
}
export function useListGenresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListGenresQuery,
    ListGenresQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<ListGenresQuery, ListGenresQueryVariables>(
    ListGenresDocument,
    options,
  );
}
export type ListGenresQueryHookResult = ReturnType<typeof useListGenresQuery>;
export type ListGenresLazyQueryHookResult = ReturnType<
  typeof useListGenresLazyQuery
>;
export type ListGenresQueryResult = Apollo.QueryResult<
  ListGenresQuery,
  ListGenresQueryVariables
>;
export const ListUpcomingDocument = gql`
  query ListUpcoming {
    listUpcoming {
      ...EpisodeWithShow
    }
  }
  ${EpisodeWithShowFragmentDoc}
`;

/**
 * __useListUpcomingQuery__
 *
 * To run a query within a React component, call `useListUpcomingQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUpcomingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUpcomingQuery({
 *   variables: {
 *   },
 * });
 */
export function useListUpcomingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListUpcomingQuery,
    ListUpcomingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<ListUpcomingQuery, ListUpcomingQueryVariables>(
    ListUpcomingDocument,
    options,
  );
}
export function useListUpcomingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListUpcomingQuery,
    ListUpcomingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<ListUpcomingQuery, ListUpcomingQueryVariables>(
    ListUpcomingDocument,
    options,
  );
}
export type ListUpcomingQueryHookResult = ReturnType<
  typeof useListUpcomingQuery
>;
export type ListUpcomingLazyQueryHookResult = ReturnType<
  typeof useListUpcomingLazyQuery
>;
export type ListUpcomingQueryResult = Apollo.QueryResult<
  ListUpcomingQuery,
  ListUpcomingQueryVariables
>;
export const ListUpNextDocument = gql`
  query ListUpNext {
    listUpNext {
      ...EpisodeWithShow
    }
  }
  ${EpisodeWithShowFragmentDoc}
`;

/**
 * __useListUpNextQuery__
 *
 * To run a query within a React component, call `useListUpNextQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUpNextQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUpNextQuery({
 *   variables: {
 *   },
 * });
 */
export function useListUpNextQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListUpNextQuery,
    ListUpNextQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<ListUpNextQuery, ListUpNextQueryVariables>(
    ListUpNextDocument,
    options,
  );
}
export function useListUpNextLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListUpNextQuery,
    ListUpNextQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<ListUpNextQuery, ListUpNextQueryVariables>(
    ListUpNextDocument,
    options,
  );
}
export type ListUpNextQueryHookResult = ReturnType<typeof useListUpNextQuery>;
export type ListUpNextLazyQueryHookResult = ReturnType<
  typeof useListUpNextLazyQuery
>;
export type ListUpNextQueryResult = Apollo.QueryResult<
  ListUpNextQuery,
  ListUpNextQueryVariables
>;
export const JoinWithGoogleDocument = gql`
  mutation JoinWithGoogle($input: JoinWithGoogleInput!) {
    joinWithGoogle(input: $input) {
      name
      email
    }
  }
`;
export type JoinWithGoogleMutationFn = Apollo.MutationFunction<
  JoinWithGoogleMutation,
  JoinWithGoogleMutationVariables
>;

/**
 * __useJoinWithGoogleMutation__
 *
 * To run a mutation, you first call `useJoinWithGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinWithGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinWithGoogleMutation, { data, loading, error }] = useJoinWithGoogleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useJoinWithGoogleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    JoinWithGoogleMutation,
    JoinWithGoogleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    JoinWithGoogleMutation,
    JoinWithGoogleMutationVariables
  >(JoinWithGoogleDocument, options);
}
export type JoinWithGoogleMutationHookResult = ReturnType<
  typeof useJoinWithGoogleMutation
>;
export type JoinWithGoogleMutationResult =
  Apollo.MutationResult<JoinWithGoogleMutation>;
export type JoinWithGoogleMutationOptions = Apollo.BaseMutationOptions<
  JoinWithGoogleMutation,
  JoinWithGoogleMutationVariables
>;
export const DiscoverShowsDocument = gql`
  query DiscoverShows($genreIds: [Int!]!) {
    discoverShows(input: { genreIds: $genreIds }) {
      ...PartialShow
    }
  }
  ${PartialShowFragmentDoc}
`;

/**
 * __useDiscoverShowsQuery__
 *
 * To run a query within a React component, call `useDiscoverShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscoverShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscoverShowsQuery({
 *   variables: {
 *      genreIds: // value for 'genreIds'
 *   },
 * });
 */
export function useDiscoverShowsQuery(
  baseOptions: Apollo.QueryHookOptions<
    DiscoverShowsQuery,
    DiscoverShowsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<DiscoverShowsQuery, DiscoverShowsQueryVariables>(
    DiscoverShowsDocument,
    options,
  );
}
export function useDiscoverShowsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DiscoverShowsQuery,
    DiscoverShowsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<DiscoverShowsQuery, DiscoverShowsQueryVariables>(
    DiscoverShowsDocument,
    options,
  );
}
export type DiscoverShowsQueryHookResult = ReturnType<
  typeof useDiscoverShowsQuery
>;
export type DiscoverShowsLazyQueryHookResult = ReturnType<
  typeof useDiscoverShowsLazyQuery
>;
export type DiscoverShowsQueryResult = Apollo.QueryResult<
  DiscoverShowsQuery,
  DiscoverShowsQueryVariables
>;
export const ToggleGenrePreferenceDocument = gql`
  mutation ToggleGenrePreference($genreId: Int!) {
    toggleGenrePreference(input: { genreId: $genreId }) {
      __typename
    }
  }
`;
export type ToggleGenrePreferenceMutationFn = Apollo.MutationFunction<
  ToggleGenrePreferenceMutation,
  ToggleGenrePreferenceMutationVariables
>;

/**
 * __useToggleGenrePreferenceMutation__
 *
 * To run a mutation, you first call `useToggleGenrePreferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleGenrePreferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleGenrePreferenceMutation, { data, loading, error }] = useToggleGenrePreferenceMutation({
 *   variables: {
 *      genreId: // value for 'genreId'
 *   },
 * });
 */
export function useToggleGenrePreferenceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleGenrePreferenceMutation,
    ToggleGenrePreferenceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    ToggleGenrePreferenceMutation,
    ToggleGenrePreferenceMutationVariables
  >(ToggleGenrePreferenceDocument, options);
}
export type ToggleGenrePreferenceMutationHookResult = ReturnType<
  typeof useToggleGenrePreferenceMutation
>;
export type ToggleGenrePreferenceMutationResult =
  Apollo.MutationResult<ToggleGenrePreferenceMutation>;
export type ToggleGenrePreferenceMutationOptions = Apollo.BaseMutationOptions<
  ToggleGenrePreferenceMutation,
  ToggleGenrePreferenceMutationVariables
>;
export const GetPreferencesDocument = gql`
  query GetPreferences {
    getPreferences {
      genres {
        externalId
      }
    }
  }
`;

/**
 * __useGetPreferencesQuery__
 *
 * To run a query within a React component, call `useGetPreferencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreferencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreferencesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPreferencesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPreferencesQuery,
    GetPreferencesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetPreferencesQuery, GetPreferencesQueryVariables>(
    GetPreferencesDocument,
    options,
  );
}
export function useGetPreferencesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPreferencesQuery,
    GetPreferencesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetPreferencesQuery, GetPreferencesQueryVariables>(
    GetPreferencesDocument,
    options,
  );
}
export type GetPreferencesQueryHookResult = ReturnType<
  typeof useGetPreferencesQuery
>;
export type GetPreferencesLazyQueryHookResult = ReturnType<
  typeof useGetPreferencesLazyQuery
>;
export type GetPreferencesQueryResult = Apollo.QueryResult<
  GetPreferencesQuery,
  GetPreferencesQueryVariables
>;
export const GetRatingDocument = gql`
  query GetRating($showId: Int!) {
    getRating(input: { showId: $showId }) {
      rating
    }
  }
`;

/**
 * __useGetRatingQuery__
 *
 * To run a query within a React component, call `useGetRatingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRatingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRatingQuery({
 *   variables: {
 *      showId: // value for 'showId'
 *   },
 * });
 */
export function useGetRatingQuery(
  baseOptions: Apollo.QueryHookOptions<GetRatingQuery, GetRatingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetRatingQuery, GetRatingQueryVariables>(
    GetRatingDocument,
    options,
  );
}
export function useGetRatingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRatingQuery,
    GetRatingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetRatingQuery, GetRatingQueryVariables>(
    GetRatingDocument,
    options,
  );
}
export type GetRatingQueryHookResult = ReturnType<typeof useGetRatingQuery>;
export type GetRatingLazyQueryHookResult = ReturnType<
  typeof useGetRatingLazyQuery
>;
export type GetRatingQueryResult = Apollo.QueryResult<
  GetRatingQuery,
  GetRatingQueryVariables
>;
export const GetReviewsDocument = gql`
  query GetReviews($showId: Int!) {
    getOtherReviews(input: { showId: $showId }) {
      ...Review
    }
    getMyReview(input: { showId: $showId }) {
      ...Review
    }
  }
  ${ReviewFragmentDoc}
`;

/**
 * __useGetReviewsQuery__
 *
 * To run a query within a React component, call `useGetReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewsQuery({
 *   variables: {
 *      showId: // value for 'showId'
 *   },
 * });
 */
export function useGetReviewsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetReviewsQuery,
    GetReviewsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetReviewsQuery, GetReviewsQueryVariables>(
    GetReviewsDocument,
    options,
  );
}
export function useGetReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReviewsQuery,
    GetReviewsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetReviewsQuery, GetReviewsQueryVariables>(
    GetReviewsDocument,
    options,
  );
}
export type GetReviewsQueryHookResult = ReturnType<typeof useGetReviewsQuery>;
export type GetReviewsLazyQueryHookResult = ReturnType<
  typeof useGetReviewsLazyQuery
>;
export type GetReviewsQueryResult = Apollo.QueryResult<
  GetReviewsQuery,
  GetReviewsQueryVariables
>;
export const UpsertReviewDocument = gql`
  mutation UpsertReview(
    $showId: Int!
    $title: String
    $content: String
    $rating: Int
  ) {
    upsertReview(
      input: {
        showId: $showId
        title: $title
        content: $content
        rating: $rating
      }
    ) {
      ...Review
    }
  }
  ${ReviewFragmentDoc}
`;
export type UpsertReviewMutationFn = Apollo.MutationFunction<
  UpsertReviewMutation,
  UpsertReviewMutationVariables
>;

/**
 * __useUpsertReviewMutation__
 *
 * To run a mutation, you first call `useUpsertReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertReviewMutation, { data, loading, error }] = useUpsertReviewMutation({
 *   variables: {
 *      showId: // value for 'showId'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useUpsertReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertReviewMutation,
    UpsertReviewMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpsertReviewMutation,
    UpsertReviewMutationVariables
  >(UpsertReviewDocument, options);
}
export type UpsertReviewMutationHookResult = ReturnType<
  typeof useUpsertReviewMutation
>;
export type UpsertReviewMutationResult =
  Apollo.MutationResult<UpsertReviewMutation>;
export type UpsertReviewMutationOptions = Apollo.BaseMutationOptions<
  UpsertReviewMutation,
  UpsertReviewMutationVariables
>;
export const UpsertEpisodeDocument = gql`
  mutation UpsertEpisode($episodeId: Int!, $isWatched: Boolean = true) {
    upsertEpisode(input: { episodeId: $episodeId, isWatched: $isWatched }) {
      ...EpisodeWithShow
    }
  }
  ${EpisodeWithShowFragmentDoc}
`;
export type UpsertEpisodeMutationFn = Apollo.MutationFunction<
  UpsertEpisodeMutation,
  UpsertEpisodeMutationVariables
>;

/**
 * __useUpsertEpisodeMutation__
 *
 * To run a mutation, you first call `useUpsertEpisodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertEpisodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertEpisodeMutation, { data, loading, error }] = useUpsertEpisodeMutation({
 *   variables: {
 *      episodeId: // value for 'episodeId'
 *      isWatched: // value for 'isWatched'
 *   },
 * });
 */
export function useUpsertEpisodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertEpisodeMutation,
    UpsertEpisodeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpsertEpisodeMutation,
    UpsertEpisodeMutationVariables
  >(UpsertEpisodeDocument, options);
}
export type UpsertEpisodeMutationHookResult = ReturnType<
  typeof useUpsertEpisodeMutation
>;
export type UpsertEpisodeMutationResult =
  Apollo.MutationResult<UpsertEpisodeMutation>;
export type UpsertEpisodeMutationOptions = Apollo.BaseMutationOptions<
  UpsertEpisodeMutation,
  UpsertEpisodeMutationVariables
>;
export const GetSeasonEpisodesDocument = gql`
  query GetSeasonEpisodes($showId: Int!, $seasonNumber: Int!) {
    getSeasonEpisodes(input: { showId: $showId, seasonNumber: $seasonNumber }) {
      ...EpisodeWithoutShow
    }
  }
  ${EpisodeWithoutShowFragmentDoc}
`;

/**
 * __useGetSeasonEpisodesQuery__
 *
 * To run a query within a React component, call `useGetSeasonEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeasonEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeasonEpisodesQuery({
 *   variables: {
 *      showId: // value for 'showId'
 *      seasonNumber: // value for 'seasonNumber'
 *   },
 * });
 */
export function useGetSeasonEpisodesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSeasonEpisodesQuery,
    GetSeasonEpisodesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<
    GetSeasonEpisodesQuery,
    GetSeasonEpisodesQueryVariables
  >(GetSeasonEpisodesDocument, options);
}
export function useGetSeasonEpisodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSeasonEpisodesQuery,
    GetSeasonEpisodesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetSeasonEpisodesQuery,
    GetSeasonEpisodesQueryVariables
  >(GetSeasonEpisodesDocument, options);
}
export type GetSeasonEpisodesQueryHookResult = ReturnType<
  typeof useGetSeasonEpisodesQuery
>;
export type GetSeasonEpisodesLazyQueryHookResult = ReturnType<
  typeof useGetSeasonEpisodesLazyQuery
>;
export type GetSeasonEpisodesQueryResult = Apollo.QueryResult<
  GetSeasonEpisodesQuery,
  GetSeasonEpisodesQueryVariables
>;
export const GetMyShowsDocument = gql`
  query GetMyShows {
    getMyShows {
      ...PartialShow
    }
  }
  ${PartialShowFragmentDoc}
`;

/**
 * __useGetMyShowsQuery__
 *
 * To run a query within a React component, call `useGetMyShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyShowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyShowsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMyShowsQuery,
    GetMyShowsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetMyShowsQuery, GetMyShowsQueryVariables>(
    GetMyShowsDocument,
    options,
  );
}
export function useGetMyShowsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyShowsQuery,
    GetMyShowsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetMyShowsQuery, GetMyShowsQueryVariables>(
    GetMyShowsDocument,
    options,
  );
}
export type GetMyShowsQueryHookResult = ReturnType<typeof useGetMyShowsQuery>;
export type GetMyShowsLazyQueryHookResult = ReturnType<
  typeof useGetMyShowsLazyQuery
>;
export type GetMyShowsQueryResult = Apollo.QueryResult<
  GetMyShowsQuery,
  GetMyShowsQueryVariables
>;
export const GetSimilarShowsDocument = gql`
  query GetSimilarShows($externalId: Int!) {
    getSimilarShows(input: { externalId: $externalId }) {
      ...SimilarShow
    }
  }
  ${SimilarShowFragmentDoc}
`;

/**
 * __useGetSimilarShowsQuery__
 *
 * To run a query within a React component, call `useGetSimilarShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSimilarShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSimilarShowsQuery({
 *   variables: {
 *      externalId: // value for 'externalId'
 *   },
 * });
 */
export function useGetSimilarShowsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSimilarShowsQuery,
    GetSimilarShowsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetSimilarShowsQuery, GetSimilarShowsQueryVariables>(
    GetSimilarShowsDocument,
    options,
  );
}
export function useGetSimilarShowsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSimilarShowsQuery,
    GetSimilarShowsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetSimilarShowsQuery,
    GetSimilarShowsQueryVariables
  >(GetSimilarShowsDocument, options);
}
export type GetSimilarShowsQueryHookResult = ReturnType<
  typeof useGetSimilarShowsQuery
>;
export type GetSimilarShowsLazyQueryHookResult = ReturnType<
  typeof useGetSimilarShowsLazyQuery
>;
export type GetSimilarShowsQueryResult = Apollo.QueryResult<
  GetSimilarShowsQuery,
  GetSimilarShowsQueryVariables
>;
export const UpsertWatchlistItemDocument = gql`
  mutation UpsertWatchlistItem($showId: Int!, $status: Status!) {
    upsertWatchlistItem(input: { showId: $showId, status: $status }) {
      __typename
    }
  }
`;
export type UpsertWatchlistItemMutationFn = Apollo.MutationFunction<
  UpsertWatchlistItemMutation,
  UpsertWatchlistItemMutationVariables
>;

/**
 * __useUpsertWatchlistItemMutation__
 *
 * To run a mutation, you first call `useUpsertWatchlistItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertWatchlistItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertWatchlistItemMutation, { data, loading, error }] = useUpsertWatchlistItemMutation({
 *   variables: {
 *      showId: // value for 'showId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpsertWatchlistItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertWatchlistItemMutation,
    UpsertWatchlistItemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpsertWatchlistItemMutation,
    UpsertWatchlistItemMutationVariables
  >(UpsertWatchlistItemDocument, options);
}
export type UpsertWatchlistItemMutationHookResult = ReturnType<
  typeof useUpsertWatchlistItemMutation
>;
export type UpsertWatchlistItemMutationResult =
  Apollo.MutationResult<UpsertWatchlistItemMutation>;
export type UpsertWatchlistItemMutationOptions = Apollo.BaseMutationOptions<
  UpsertWatchlistItemMutation,
  UpsertWatchlistItemMutationVariables
>;
export const GetPartialWatchlistDocument = gql`
  query GetPartialWatchlist {
    getWatchlist {
      status
      show {
        externalId
      }
    }
  }
`;

/**
 * __useGetPartialWatchlistQuery__
 *
 * To run a query within a React component, call `useGetPartialWatchlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPartialWatchlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPartialWatchlistQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPartialWatchlistQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPartialWatchlistQuery,
    GetPartialWatchlistQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<
    GetPartialWatchlistQuery,
    GetPartialWatchlistQueryVariables
  >(GetPartialWatchlistDocument, options);
}
export function useGetPartialWatchlistLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPartialWatchlistQuery,
    GetPartialWatchlistQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetPartialWatchlistQuery,
    GetPartialWatchlistQueryVariables
  >(GetPartialWatchlistDocument, options);
}
export type GetPartialWatchlistQueryHookResult = ReturnType<
  typeof useGetPartialWatchlistQuery
>;
export type GetPartialWatchlistLazyQueryHookResult = ReturnType<
  typeof useGetPartialWatchlistLazyQuery
>;
export type GetPartialWatchlistQueryResult = Apollo.QueryResult<
  GetPartialWatchlistQuery,
  GetPartialWatchlistQueryVariables
>;
export const FullShowDocument = gql`
  query FullShow($externalId: Int!) {
    fullShow(input: { externalId: $externalId }) {
      externalId
      name
      description
      wideImage
      tallImage
      firstAirDate
      originCountry
      status
      genres {
        externalId
        name
      }
      details {
        episodeRuntime
        isInProduction
        seasons {
          number
          description
          name
          tallImage
          episodeCount
          airDate
        }
      }
    }
  }
`;

/**
 * __useFullShowQuery__
 *
 * To run a query within a React component, call `useFullShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useFullShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFullShowQuery({
 *   variables: {
 *      externalId: // value for 'externalId'
 *   },
 * });
 */
export function useFullShowQuery(
  baseOptions: Apollo.QueryHookOptions<FullShowQuery, FullShowQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<FullShowQuery, FullShowQueryVariables>(
    FullShowDocument,
    options,
  );
}
export function useFullShowLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FullShowQuery,
    FullShowQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<FullShowQuery, FullShowQueryVariables>(
    FullShowDocument,
    options,
  );
}
export type FullShowQueryHookResult = ReturnType<typeof useFullShowQuery>;
export type FullShowLazyQueryHookResult = ReturnType<
  typeof useFullShowLazyQuery
>;
export type FullShowQueryResult = Apollo.QueryResult<
  FullShowQuery,
  FullShowQueryVariables
>;
export const UpsertSeasonEpisodeDocument = gql`
  mutation UpsertSeasonEpisode($episodeId: Int!, $isWatched: Boolean = true) {
    upsertEpisode(input: { episodeId: $episodeId, isWatched: $isWatched }) {
      __typename
    }
  }
`;
export type UpsertSeasonEpisodeMutationFn = Apollo.MutationFunction<
  UpsertSeasonEpisodeMutation,
  UpsertSeasonEpisodeMutationVariables
>;

/**
 * __useUpsertSeasonEpisodeMutation__
 *
 * To run a mutation, you first call `useUpsertSeasonEpisodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertSeasonEpisodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertSeasonEpisodeMutation, { data, loading, error }] = useUpsertSeasonEpisodeMutation({
 *   variables: {
 *      episodeId: // value for 'episodeId'
 *      isWatched: // value for 'isWatched'
 *   },
 * });
 */
export function useUpsertSeasonEpisodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertSeasonEpisodeMutation,
    UpsertSeasonEpisodeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    UpsertSeasonEpisodeMutation,
    UpsertSeasonEpisodeMutationVariables
  >(UpsertSeasonEpisodeDocument, options);
}
export type UpsertSeasonEpisodeMutationHookResult = ReturnType<
  typeof useUpsertSeasonEpisodeMutation
>;
export type UpsertSeasonEpisodeMutationResult =
  Apollo.MutationResult<UpsertSeasonEpisodeMutation>;
export type UpsertSeasonEpisodeMutationOptions = Apollo.BaseMutationOptions<
  UpsertSeasonEpisodeMutation,
  UpsertSeasonEpisodeMutationVariables
>;
export const GetStatsSummaryDocument = gql`
  query GetStatsSummary {
    getStatsSummary {
      key
      value
    }
  }
`;

/**
 * __useGetStatsSummaryQuery__
 *
 * To run a query within a React component, call `useGetStatsSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatsSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatsSummaryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatsSummaryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetStatsSummaryQuery,
    GetStatsSummaryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetStatsSummaryQuery, GetStatsSummaryQueryVariables>(
    GetStatsSummaryDocument,
    options,
  );
}
export function useGetStatsSummaryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStatsSummaryQuery,
    GetStatsSummaryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetStatsSummaryQuery,
    GetStatsSummaryQueryVariables
  >(GetStatsSummaryDocument, options);
}
export type GetStatsSummaryQueryHookResult = ReturnType<
  typeof useGetStatsSummaryQuery
>;
export type GetStatsSummaryLazyQueryHookResult = ReturnType<
  typeof useGetStatsSummaryLazyQuery
>;
export type GetStatsSummaryQueryResult = Apollo.QueryResult<
  GetStatsSummaryQuery,
  GetStatsSummaryQueryVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      email
      name
      avatar
      createdAt
    }
    getPreferences {
      genres {
        externalId
      }
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RefreshTokenDocument = gql`
  mutation RefreshToken {
    refresh {
      id
    }
  }
`;
export type RefreshTokenMutationFn = Apollo.MutationFunction<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshTokenMutation,
    RefreshTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    RefreshTokenMutation,
    RefreshTokenMutationVariables
  >(RefreshTokenDocument, options);
}
export type RefreshTokenMutationHookResult = ReturnType<
  typeof useRefreshTokenMutation
>;
export type RefreshTokenMutationResult =
  Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logout {
      __typename
    }
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options,
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
