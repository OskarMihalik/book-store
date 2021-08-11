export interface Author {
    __typename: string;
    id: string;
    name: string;
    type: string;
    photos: Photo[],
}

export interface Photo {
    __typename: string;
    uri: string;
}

export interface Authors {
    authors: Author[];
}