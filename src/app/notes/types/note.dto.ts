export interface Note {
    id: string;
    title: string;
    content: string;
    userId: string;
}

export interface CreateNote {
    title: string;
    content?: string;
}

export interface updateNote{
    title: string;
    content?: string;
}
