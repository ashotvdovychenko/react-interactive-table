export interface ColDef<CollectionType> extends UniqueObject {
    headerText: string;
    valueGetter: (row: CollectionType) => string;
}

export type UniqueObject = object & { id: number };
