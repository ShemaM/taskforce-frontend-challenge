import axios from 'axios';

import {
  COUNTRIES_LIST_REQUEST,
  COUNTRIES_LIST_SUCCESS,
  COUNTRIES_LIST_FAIL,
} from '../constants/countriesConstant';

export const allCountries = () => async (dispatch) => {
  dispatch({ type: COUNTRIES_LIST_REQUEST });

  try {
    const { data } = await axios.get(
      'https://corona.lmao.ninja/v2/countries?yesterday&sort',
    );
    dispatch({
      type: COUNTRIES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: COUNTRIES_LIST_FAIL, payload: error });
  }
};
