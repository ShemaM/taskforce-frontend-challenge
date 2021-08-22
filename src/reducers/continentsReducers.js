import {
  CONTINENTS_LIST_REQUEST,
  CONTINENTS_LIST_SUCCESS,
  CONTINENTS_LIST_FAIL,
} from '../constants/continentsConstants';

export const continentsListReducers = (state = { continents: [] }, action) => {
  switch (action.type) {
    case CONTINENTS_LIST_REQUEST:
      return { loading: true, continents: [] };
    case CONTINENTS_LIST_SUCCESS:
      return {
        loading: false,
        continents: action.payload,
      };
    case CONTINENTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
