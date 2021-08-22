import axios from 'axios';

import {
  CONTINENTS_LIST_REQUEST,
  CONTINENTS_LIST_SUCCESS,
  CONTINENTS_LIST_FAIL,
} from '../constants/continentsConstants';

export const allContinents = () => async (dispatch) => {
  dispatch({ type: CONTINENTS_LIST_REQUEST });

  try {
    const { data } = await axios.get(
      'https://corona.lmao.ninja/v2/continents?yesterday=true&sort',
    );

    dispatch({
      type: CONTINENTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: CONTINENTS_LIST_FAIL, payload: error });
  }
};
