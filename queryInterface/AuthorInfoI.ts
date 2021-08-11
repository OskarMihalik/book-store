export interface Book {
    __typename: string;
    id: string;
    title: string;
}

export interface Photo {
    __typename: string;
    uri: string;
}

export interface Author {
    __typename: string;
    birthplace: string;
    books: Book[];
    date_of_birth: string;
    date_of_death: string;
    id: string;
    name: string;
    photos: Photo[];
}

export interface AuthorsInfosI {
    author: Author;
}