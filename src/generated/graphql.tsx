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
  isWatched: Scalars['Boolean'];
  name: Scalars['String'];
  number: Scalars['Int'];
  seasonNumber: Scalars['Int'];
  show: PartialShow;
  wideImage?: Maybe<Scalars['String']>;
};

export type Genre = {
  __typename?: 'Genre';
  externalId: Scalars['Int'];
  name: Scalars['String'];
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
  upsertWatchlistItem: Watchlist;
};

export type MutationJoinWithGoogleArgs = {
  input: JoinWithGoogleInput;
};

export type MutationToggleGenrePreferenceArgs = {
  input: ToggleGenrePreferenceInput;
};

export type MutationUpsertWatchlistItemArgs = {
  input: UpsertWatchlistInput;
};

export type PartialShow = {
  __typename?: 'PartialShow';
  description: Scalars['String'];
  externalId: Scalars['Int'];
  genres: Array<Genre>;
  name: Scalars['String'];
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
  getPreferences?: Maybe<Preference>;
  getWatchlist: Array<Watchlist>;
  listGenres?: Maybe<Array<Genre>>;
  listUpNext: Array<Episode>;
  me: User;
};

export type QueryDiscoverShowsArgs = {
  input: DiscoverShowsInput;
};

export type Season = {
  __typename?: 'Season';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  number: Scalars['Int'];
  tallImage: Scalars['String'];
};

export enum Status {
  InWatchlist = 'InWatchlist',
  None = 'None',
  StoppedWatching = 'StoppedWatching',
}

export type ToggleGenrePreferenceInput = {
  genreId: Scalars['Int'];
};

export type UpsertWatchlistInput = {
  showId: Scalars['Int'];
  status: Status;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
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
    status: Status;
    genres: Array<{ __typename?: 'Genre'; externalId: number; name: string }>;
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

export type ShowFragmentFragment = {
  __typename?: 'PartialShow';
  externalId: number;
  name: string;
  description: string;
  wideImage: string;
  tallImage: string;
  status: Status;
  genres: Array<{ __typename?: 'Genre'; externalId: number; name: string }>;
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

export type ListUpNextQueryVariables = Exact<{ [key: string]: never }>;

export type ListUpNextQuery = {
  __typename?: 'Query';
  listUpNext: Array<{
    __typename?: 'Episode';
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

export type EpisodeShowFragment = {
  __typename?: 'PartialShow';
  externalId: number;
  name: string;
  wideImage: string;
  tallImage: string;
};

export const ShowFragmentFragmentDoc = gql`
  fragment ShowFragment on PartialShow {
    externalId
    name
    description
    wideImage
    tallImage
    status
    genres {
      externalId
      name
    }
  }
`;
export const EpisodeShowFragmentDoc = gql`
  fragment EpisodeShow on PartialShow {
    externalId
    name
    wideImage
    tallImage
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
      ...ShowFragment
    }
  }
  ${ShowFragmentFragmentDoc}
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
export const MeDocument = gql`
  query Me {
    me {
      id
      email
      name
      avatar
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
export const ListUpNextDocument = gql`
  query ListUpNext {
    listUpNext {
      externalId
      number
      seasonNumber
      isWatched
      name
      description
      wideImage
      airDate
      show {
        ...EpisodeShow
      }
    }
  }
  ${EpisodeShowFragmentDoc}
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
