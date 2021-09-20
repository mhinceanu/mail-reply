import { GET_DICTIONARY } from '../constants/actionTypes';
import { PENDING, SUCCESS, ERROR } from '../constants/status';
import { en } from '../i18n/en';

export const initialState = {
  dictionary: null,
  intl: en,
  isFetching: false,
  fetched: false,
  error: null
};

const dictionary = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case `${GET_DICTIONARY}_${PENDING}`:
      return {
        ...state,
        isFetching: true
      };
    case `${GET_DICTIONARY}_${SUCCESS}`:
      return {
        ...state,
        dictionary: response,
        isFetching: false,
        fetched: true,
        error: null
      };
    case `${GET_DICTIONARY}_${ERROR}`:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        error
      };
    default: {
      return state;
    }
  }
};

export default dictionary;
