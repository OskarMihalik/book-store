import {gql} from "@apollo/client";

export const booksQuery = gql`
    query books {
        books @jsonapi(path: "books") {
            title
            author
            photos
        }
    }
`;