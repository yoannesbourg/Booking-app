import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import * as couplesActionTypes from './actionsType';
import AxiosConfig from '../../config/axios.config';

export const fetchAllCouples = (): ThunkAction<void, null, unknown, Action<string>> => async (dispatch) => {
    dispatch({
        type: couplesActionTypes.GET_ALL_COUPLES_LOADING,
    });
    try {
        const response = await AxiosConfig.get(`/bookedByCouples`);
        if (response.status !== 200) {
            return dispatch({
                type: couplesActionTypes.GET_ALL_COUPLES_ERROR,
                payload: {
                    status: response.status,
                },
            });
        }

        return dispatch({
            type: couplesActionTypes.GET_ALL_COUPLES_SUCCESS,
            payload: {
                data: response.data,
                status: response.status,
            },
        });
    } catch (error) {
        return dispatch({ type: couplesActionTypes.GET_ALL_COUPLES_ERROR });
    }
};
