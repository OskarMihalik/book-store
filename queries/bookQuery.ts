import {gql} from "@apollo/client";

 const booksQuery = gql`
    query books($id: Int!) {
        book(id: $id) @jsonapi(path: "/books/{args.id}?include=author,photos,chapters,stores") {
            title
            author{
                id
                name
            }
            photos{
                uri
            }
            chapters{
                title
            }
            stores{
                name
                address
            }
        }
    }
`;

 export default booksQuery