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
    elements?: GameElement[];
    subcategories?: Category[];
}

export interface Element {
    id: string;
    name: string;
}

export type ElementType = 'clue' | 'info';

export interface ElementRuntime {
    solved: boolean;
    clueRevealed: boolean;
    currentStep: number;
}

export interface GameElement extends Element {
    type: ElementType;
}
