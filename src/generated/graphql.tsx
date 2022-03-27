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
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type Gender = {
  __typename?: 'Gender';
  createdAt: Scalars['Timestamp'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type Genre = {
  __typename?: 'Genre';
  externalId: Scalars['Int'];
  name: Scalars['String'];
};

export type JoinWithGoogleInput = {
  token: Scalars['String'];
};

export type Keyword = {
  __typename?: 'Keyword';
  createdAt: Scalars['Timestamp'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type Mutation = {
  __typename?: 'Mutation';
  joinWithGoogle: User;
  logout: Void;
  refresh: User;
  savePreferences: Preference;
};

export type MutationJoinWithGoogleArgs = {
  input: JoinWithGoogleInput;
};

export type MutationSavePreferencesArgs = {
  input: UpsertPreferenceInput;
};

export type Person = {
  __typename?: 'Person';
  birthday?: Maybe<Scalars['Timestamp']>;
  createdAt: Scalars['Timestamp'];
  deathday?: Maybe<Scalars['Timestamp']>;
  description: Scalars['String'];
  gender: Gender;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type Preference = {
  __typename?: 'Preference';
  createdAt: Scalars['Timestamp'];
  genreIds: Array<Scalars['String']>;
  id: Scalars['Int'];
  showIds: Array<Scalars['String']>;
  updatedAt: Scalars['Timestamp'];
  user: User;
};

export type ProductionCompany = {
  __typename?: 'ProductionCompany';
  createdAt: Scalars['Timestamp'];
  id: Scalars['Int'];
  logo: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type Query = {
  __typename?: 'Query';
  allUsers: User;
  genders?: Maybe<Array<Gender>>;
  getPreferences?: Maybe<Preference>;
  keywords: Array<Keyword>;
  listGenres: Array<Genre>;
  me: User;
  persons?: Maybe<Array<Person>>;
  trending: Array<Show>;
};

export type Season = {
  __typename?: 'Season';
  createdAt: Scalars['Timestamp'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  show: Show;
  tallImage: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type Show = {
  __typename?: 'Show';
  createdAt: Scalars['Timestamp'];
  description: Scalars['String'];
  episodeRuntime: Scalars['Int'];
  externalId: Scalars['Int'];
  genres: Array<Genre>;
  isInProduction: Scalars['Boolean'];
  keywords: Array<Keyword>;
  name: Scalars['String'];
  productionCompanies: Array<ProductionCompany>;
  seasons: Array<Season>;
  status: Status;
  tallImage: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
  wideImage: Scalars['String'];
};

export type Status = {
  __typename?: 'Status';
  createdAt: Scalars['Timestamp'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type UpsertPreferenceInput = {
  genreIds: Array<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['Timestamp'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type Void = {
  __typename?: 'Void';
  _?: Maybe<Scalars['String']>;
};

export type JoinWithGoogleMutationVariables = Exact<{
  input: JoinWithGoogleInput;
}>;

export type JoinWithGoogleMutation = {
  __typename?: 'Mutation';
  joinWithGoogle: { __typename?: 'User'; name: string; email: string };
};

export type ListGenresQueryVariables = Exact<{ [key: string]: never }>;

export type ListGenresQuery = {
  __typename?: 'Query';
  listGenres: Array<{ __typename?: 'Genre'; externalId: number; name: string }>;
};

export type SavePreferencesMutationVariables = Exact<{
  genreIds: Array<Scalars['Int']> | Scalars['Int'];
}>;

export type SavePreferencesMutation = {
  __typename?: 'Mutation';
  savePreferences: { __typename: 'Preference' };
};

export type GetPreferencesQueryVariables = Exact<{ [key: string]: never }>;

export type GetPreferencesQuery = {
  __typename?: 'Query';
  getPreferences?: {
    __typename?: 'Preference';
    genreIds: Array<string>;
  } | null;
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
export const SavePreferencesDocument = gql`
  mutation SavePreferences($genreIds: [Int!]!) {
    savePreferences(input: { genreIds: $genreIds }) {
      __typename
    }
  }
`;
export type SavePreferencesMutationFn = Apollo.MutationFunction<
  SavePreferencesMutation,
  SavePreferencesMutationVariables
>;

/**
 * __useSavePreferencesMutation__
 *
 * To run a mutation, you first call `useSavePreferencesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSavePreferencesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [savePreferencesMutation, { data, loading, error }] = useSavePreferencesMutation({
 *   variables: {
 *      genreIds: // value for 'genreIds'
 *   },
 * });
 */
export function useSavePreferencesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SavePreferencesMutation,
    SavePreferencesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    SavePreferencesMutation,
    SavePreferencesMutationVariables
  >(SavePreferencesDocument, options);
}
export type SavePreferencesMutationHookResult = ReturnType<
  typeof useSavePreferencesMutation
>;
export type SavePreferencesMutationResult =
  Apollo.MutationResult<SavePreferencesMutation>;
export type SavePreferencesMutationOptions = Apollo.BaseMutationOptions<
  SavePreferencesMutation,
  SavePreferencesMutationVariables
>;
export const GetPreferencesDocument = gql`
  query GetPreferences {
    getPreferences {
      genreIds
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
export const MeDocument = gql`
  query Me {
    me {
      id
      email
      name
      avatar
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
