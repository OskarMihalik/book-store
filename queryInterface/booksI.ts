export interface AuthorI {
    __typename: string;
    name: string;
    id:string
}

export interface PhotoI {
    __typename: string;
    uri: string;
}

export interface BookI {
    __typename: string;
    author: AuthorI;
    photos: PhotoI[];
    title: string;
    id: string
}

export interface BooksI {
    books: BookI[]
}

export default BooksI