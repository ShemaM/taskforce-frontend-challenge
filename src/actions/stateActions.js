import axios from 'axios';

import {
  STATES_LIST_REQUEST,
  STATES_LIST_SUCCESS,
  STATES_LIST_FAIL,
} from '../constants/statesConstant';

export const allStates = () => async (dispatch) => {
  dispatch({ type: STATES_LIST_REQUEST });

  try {
    const { data } = await axios.get(
      'https://corona.lmao.ninja/v2/states?sort&yesterday',
    );
    dispatch({
      type: STATES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: STATES_LIST_FAIL, payload: error });
  }
};
