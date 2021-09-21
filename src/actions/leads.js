import {
  GET_LEAD,
  GET_LEADS,
  RESET_LEAD,
  UPDATE_LEAD
} from '../constants/actionTypes';
import leadsList from '../devserver/db/leads.json';

export const fetchLeads = () => {
  const check = JSON.parse(localStorage.getItem('Leads'));

  if (!check) {
    localStorage.setItem('Leads', JSON.stringify(leadsList));
  }

  return {
    type: GET_LEADS,
    response: check
  };
};

export const getLead = (user) => {
  return {
    type: GET_LEAD,
    user
  };
};

export const updateLead = (payload) => {
  return {
    type: UPDATE_LEAD,
    payload
  };
};

export const resetLead = (payload) => {
  return {
    type: RESET_LEAD,
    payload
  };
};
