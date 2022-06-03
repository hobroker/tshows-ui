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
import { setContext } from '@apollo/client/link/context';
import { getCookie } from '../../utils/cookie';
import { API_URL, WS_URL } from './constants';
import errorHandler from './errorHandler';

export const linkError = onError(errorHandler);

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${WS_URL}/subscriptions`,
    connectionParams: {
      authorization: getCookie('Authentication'),
    },
  }),
);

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: getCookie('Authentication'),
  },
}));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink),
);

const client = new ApolloClient({
  link: ApolloLink.from([linkError, splitLink]),
  cache: new InMemoryCache(),
});

export default client;
