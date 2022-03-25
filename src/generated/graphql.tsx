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
  createdAt: Scalars['Timestamp'];
  id: Scalars['Int'];
  name: Scalars['String'];
  shows?: Maybe<Array<Show>>;
  updatedAt: Scalars['Timestamp'];
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
  join: User;
};

export type MutationJoinArgs = {
  data: UserCreateInput;
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
  allUsers?: Maybe<Array<User>>;
  genders?: Maybe<Array<Gender>>;
  genres?: Maybe<Array<Genre>>;
  keywords: Array<Keyword>;
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

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Timestamp'];
  currentHashedRefreshToken?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  password?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Timestamp'];
  username: Scalars['String'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type ListGendresQueryVariables = Exact<{ [key: string]: never }>;

export type ListGendresQuery = {
  __typename?: 'Query';
  genders?: Array<{ __typename?: 'Gender'; id: number; name: string }> | null;
};

export const ListGendresDocument = gql`
  query ListGendres {
    genders {
      id
      name
    }
  }
`;

/**
 * __useListGendresQuery__
 *
 * To run a query within a React component, call `useListGendresQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGendresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGendresQuery({
 *   variables: {
 *   },
 * });
 */
export function useListGendresQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListGendresQuery,
    ListGendresQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<ListGendresQuery, ListGendresQueryVariables>(
    ListGendresDocument,
    options,
  );
}
export function useListGendresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListGendresQuery,
    ListGendresQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<ListGendresQuery, ListGendresQueryVariables>(
    ListGendresDocument,
    options,
  );
}
export type ListGendresQueryHookResult = ReturnType<typeof useListGendresQuery>;
export type ListGendresLazyQueryHookResult = ReturnType<
  typeof useListGendresLazyQuery
>;
export type ListGendresQueryResult = Apollo.QueryResult<
  ListGendresQuery,
  ListGendresQueryVariables
>;
