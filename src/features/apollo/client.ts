import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  split,
  HttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { API_URL, WS_URL } from './constants';
import errorHandler from './errorHandler';

export const linkError = onError(errorHandler);

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${WS_URL}/subscriptions`,
  }),
);

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: 'include',
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: ApolloLink.from([linkError, splitLink]),
  cache: new InMemoryCache(),
});

export default client;
