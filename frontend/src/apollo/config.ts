import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

export const API_GRAPHQL_URI = 'http://localhost:5000/api/graphql'

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri: API_GRAPHQL_URI || 'http://localhost:5000/api/graphql',
	cache: new InMemoryCache(),
})

export default client