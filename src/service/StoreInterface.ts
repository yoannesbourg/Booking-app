export interface StoreState {
    CouplesReducer: CouplesReducer;
}

export interface CouplesReducer {
    data: Couple[] | [];
    loading: false;
    status?: number;
    listLength: number;
}

export interface Couple {
    createdAt: number;
    users: {
        contacts: {
            email: string;
            phone: string;
        };
    }[];
    partners: string[];
    id: string;
    profilePhoto: string;
    weddingDate: number;
    collaborating: boolean;
    guestsInitialTarget: number;
    shortlistSizeVenues: number;
    tasksDone: number;
    tasksTotal: number;
}
