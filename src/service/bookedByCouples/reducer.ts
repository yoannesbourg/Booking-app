import * as couplesActionTypes from './actionsType';
import { ReduxRootState } from '../../interfaces/ReduxRootState';
export default interface ReduxActionInterface {
    type: string;
    payload: {
        data: [];
        status: number | undefined;
    };
}

const ROOT_VALUE_STATE: ReduxRootState = {
    data: [],
    loading: false,
};

export const CouplesReducer = (
    state: ReduxRootState = ROOT_VALUE_STATE,
    action: ReduxActionInterface,
): ReduxRootState => {
    switch (action.type) {
        case couplesActionTypes.GET_ALL_COUPLES_LOADING:
            return {
                ...state,
                loading: true,
            };

        case couplesActionTypes.GET_ALL_COUPLES_ERROR:
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case couplesActionTypes.GET_ALL_COUPLES_SUCCESS:
            if (action.payload) {
                return {
                    data: action.payload.data,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        default:
            return state;
    }
};
