import * as couplesActionTypes from './actionsType';
import { ReduxRootState } from '../../interfaces/ReduxRootState';
import { Couple } from '../StoreInterface';
export default interface ReduxActionInterface {
    type: string;
    payload: {
        data: Couple[];
        status: number | undefined;
        id: string | undefined;
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

        case couplesActionTypes.UPDATE_COUPLE_LOADING:
            return {
                ...state,
                loading: true,
            };

        case couplesActionTypes.UPDATE_COUPLE_ERROR:
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case couplesActionTypes.UPDATE_COUPLE_SUCCESS:
            if (action.payload) {
                const updatedCouple = action.payload.data[0];
                const coupleIndex = state.data.findIndex((element) => element.id === updatedCouple.id);
                const stateListModified = state.data;
                stateListModified.splice(coupleIndex, 1, updatedCouple);
                return {
                    ...state,
                    data: stateListModified,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case couplesActionTypes.DELETE_COUPLE_LOADING:
            return {
                ...state,
                loading: true,
            };

        case couplesActionTypes.DELETE_COUPLE_ERROR:
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        case couplesActionTypes.DELETE_COUPLE_SUCCESS:
            if (action.payload) {
                const coupleIndex = state.data.findIndex((element) => element.id === action.payload.id);
                const stateListModified = state.data;
                stateListModified.splice(coupleIndex, 1);
                return {
                    ...state,
                    data: stateListModified,
                    loading: false,
                    status: action.payload.status,
                };
            }

            return state;

        default:
            return state;
    }
};
