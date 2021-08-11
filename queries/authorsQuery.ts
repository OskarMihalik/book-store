import {gql} from "@apollo/client";

export const authorsQuery = gql`
    query getJsonApiStuff {
        authors @jsonapi(path: "/authors/?include=photos") {
            id
            type
            name
            photos{
                uri
            }
        }
    }
`;