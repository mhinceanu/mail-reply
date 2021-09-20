import { GET_DICTIONARY } from '../constants/actionTypes';
import api from '../api';

export const fetchDictionary = () => (dispatch) => {
  return dispatch(
    api.fetch(GET_DICTIONARY, api.config.dictionary(), api.http.get())
  );
};
