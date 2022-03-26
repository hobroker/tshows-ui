import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { API_URL } from './constants';
import errorHandler from './errorHandler';

export const linkError = onError(errorHandler);

const mainLink = createHttpLink({
  uri: `${API_URL}/graphql`,
  credentials: 'include',
});

const client = new ApolloClient({
  link: ApolloLink.from([linkError, mainLink]),
  cache: new InMemoryCache(),
});

export default client;
