import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

export function createApolloClient() {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
} 