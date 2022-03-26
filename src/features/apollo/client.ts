import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from '../api/constants';

const link = createHttpLink({
  uri: `${API_URL}/graphql`,
  credentials: 'include',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
