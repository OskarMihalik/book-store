import { JsonApiLink } from "apollo-link-json-api";
import {ApolloClient, ApolloLink, InMemoryCache, HttpLink} from "@apollo/client";
import {RestLink} from "apollo-link-rest";
// Other necessary imports...

// Create a JsonApiLink for the JSON API
// If you are using multiple link types, jsonApiLink should go before httpLink,
// as httpLink will swallow any calls that should be routed through jsonApi!
const jsonApiLink = new JsonApiLink({
    uri: 'https://jsonapiplayground.reyesoft.com/v2/',
});

// Configure the ApolloClient with the default cache and JsonApiLink
 const client = new ApolloClient({
     link: jsonApiLink,
     cache: new InMemoryCache()
});

export default client