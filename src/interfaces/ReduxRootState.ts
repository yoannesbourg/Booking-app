import { Couple } from '../service/StoreInterface';
export interface ReduxRootState {
    data: Couple[] | [];
    loading: boolean;
    status?: number;
}
