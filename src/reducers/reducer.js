import { combineReducers } from 'redux';
import { requestsReducer } from 'redux-requests';
import dictionary from './dictionary';

const rootReducer = combineReducers({
  requests: requestsReducer,
  dictionary
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) =>
  rootReducer(action.type === 'CLOSE_APP' ? undefined : state, action);
