import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { continentsListReducers } from './reducers/continentsReducers';
import { statesListReducers } from './reducers/statesReducers';

const initialState = {};
const reducer = combineReducers({
  continentsList: continentsListReducers,
  statesList: statesListReducers,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
