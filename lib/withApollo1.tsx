import {
    ApolloClient, ApolloLink,
    ApolloProvider,
    DefaultOptions,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";
import { useRouter } from "next/router";
import nextWithApollo from "next-with-apollo";
import {JsonApiLink} from "apollo-link-json-api";

const jsonApiLink = new JsonApiLink({
    uri: 'https://jsonapiplayground.reyesoft.com/v2',
});


const withApollo1 = nextWithApollo(
    ({ initialState, headers }) => {
        return new ApolloClient({
            ssrMode: typeof window === "undefined",
            link: jsonApiLink as any,
            headers: {
                ...(headers as Record<string, string>),
            },
            cache: new InMemoryCache().restore(initialState || {}),
        });
    },
    {
        // eslint-disable-next-line react/display-name
        render: ({ Page, props }) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const router = useRouter();
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} {...router} />
            </ApolloProvider>
        );
        },
    }
);

export default withApollo1;
