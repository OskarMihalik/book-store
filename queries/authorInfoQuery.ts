import {gql} from "@apollo/client";

const authorInfoQuery = gql`
    query books($id: Int!) {
        author(id: $id) @jsonapi(path: "/authors/{args.id}?include=photos,books") {
            id
            name
            birthplace
            date_of_birth
            date_of_death
            photos{
                uri
            }
            books{
                id
                title
            }
        }
    }
`;

export default authorInfoQuery