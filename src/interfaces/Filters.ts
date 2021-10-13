export interface filters {
    search: string;
    pagination: {
        currentpage: number;
        itemsPerPage: number;
        itemListLength: number;
    };
}
