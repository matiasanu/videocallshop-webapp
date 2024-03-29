import {
    STORES_FETCH_REQUESTED,
    STORES_FETCH_SUCCESS,
    STORES_FETCH_FAILED
} from '../actions/types';

import _ from 'lodash';

const INITIAL_STATE = {
    isFetching: false,
    stores: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Creation
        case STORES_FETCH_REQUESTED:
            return {
                ...state,
                isFetching: true,
            };
        case STORES_FETCH_SUCCESS:
            return {
                ...state,
                stores: { ..._.mapKeys(action.payload, 'storeId') },
                isFetching: false,
            };
        case STORES_FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
};
