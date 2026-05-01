export interface Painting {
    id: string;
    title: string;
    artist: string;
    year: number;
    imageUrl: string;
    categories: Category[];
}

export interface Category {
    id: string;
    name: string;
    elements?: Element[];
    subcategories?: Category[];
}

export interface Element {
    id: string;
    name: string;
}

