import {
  COUNTRIES_LIST_REQUEST,
  COUNTRIES_LIST_SUCCESS,
  COUNTRIES_LIST_FAIL,
} from '../constants/countriesConstant';

export const countriesListReducers = (state = { countries: [] }, action) => {
  switch (action.type) {
    case COUNTRIES_LIST_REQUEST:
      return { loading: true, countries: [] };
    case COUNTRIES_LIST_SUCCESS:
      return {
        loading: false,
        countries: action.payload,
      };
    case COUNTRIES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
