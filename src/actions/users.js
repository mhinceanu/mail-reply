import {
  END_SESSION,
  GET_USERS,
  SET_ACTIVE_USER
} from '../constants/actionTypes';
import usersList from '../devserver/db/users.json';

export const fetchUsers = () => {
  const check = JSON.parse(localStorage.getItem('Users'));

  if (!check) {
    localStorage.setItem('Users', JSON.stringify(usersList));
  }

  return {
    type: GET_USERS,
    response: JSON.parse(localStorage.getItem('Users'))
  };
};

export const setActiveUser = (index) => {
  return {
    type: SET_ACTIVE_USER,
    index
  };
};

export const endSession = (payload) => {
  return {
    type: END_SESSION,
    payload
  };
};
