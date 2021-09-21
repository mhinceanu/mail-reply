/* eslint-disable no-case-declarations */
/* eslint-disable array-callback-return */
import {
  END_SESSION,
  GET_USERS,
  SET_ACTIVE_USER
} from '../constants/actionTypes';
import { ACTIVE, INACTIVE } from '../constants/constants';

export const initialState = {
  users: null,
  currentUser: null
};

const users = (state = initialState, action) => {
  const { type, response } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: response
      };
    case SET_ACTIVE_USER:
      state.users[action.index].status = ACTIVE;
      localStorage.setItem('Users', JSON.stringify(state.users));

      return {
        ...state,
        users: [...state.users]
      };
    case END_SESSION:
      const usersList = [...state.users].map((user) => {
        if (user.name === action.payload.name) {
          user.status = INACTIVE;
        }
      });
      localStorage.setItem('Users', JSON.stringify(state.users));

      return {
        ...state,
        users: usersList
      };
    default: {
      return state;
    }
  }
};

export default users;
