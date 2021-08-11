export interface Author {
    __typename: string;
    name: string;
}

export interface Photo {
    __typename: string;
    uri: string;
}

export interface Store {
    __typename: string;
    address: string;
    name: string;
}

export interface Book {
    __typename: string;
    author: Author;
    chapters: any[];
    photos: Photo[];
    stores: Store[];
    title: string;
}

export default interface SingleBookI {
    book: Book;
}

