import {gql} from "@apollo/client";

export const booksQuery = gql`
    query books {
        books @jsonapi(path: "/books?include=author,photos") {
            title
            author{
                name
            }
            photos{
                uri
            }
        }
    }
`;