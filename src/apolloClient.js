import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://localhost:7046/graphql/', 
  cache: new InMemoryCache()
});

export default client;
