/* eslint-disable array-callback-return */
/* eslint-disable no-case-declarations */
import {
  GET_LEAD,
  GET_LEADS,
  RESET_LEAD,
  UPDATE_LEAD
} from '../constants/actionTypes';
import { PENDING, SESSION } from '../constants/constants';

export const initialState = {
  leads: null,
  lead: null
};

const leads = (state = initialState, action) => {
  const { type, response } = action;

  switch (type) {
    case GET_LEADS:
      return {
        ...state,
        leads: response
      };
    case GET_LEAD:
      let q = {};
      const activeSession = state.leads.find(
        (lead) =>
          lead?.status === SESSION && lead?.userSession === action.user?.name
      );

      if (activeSession) {
        q.lead = { ...activeSession };
        q.index = action.payload.index;
      } else {
        for (let i = 0; i <= state.leads.length; i++) {
          if (state.leads[i]?.status === PENDING) {
            q.index = i;
            q.lead = { ...state.leads[i], status: SESSION };
            state.leads[i].status = SESSION;
            break;
          }
        }
      }

      localStorage.setItem('Leads', JSON.stringify(state.leads));

      return {
        ...state,
        lead: q
      };
    case UPDATE_LEAD:
      state.leads.splice(action.payload.index, 1, action.payload.lead);

      localStorage.setItem('Leads', JSON.stringify(state.leads));

      return {
        ...state,
        leads: [...state.leads]
      };
    case RESET_LEAD:
      state.leads.splice(action.payload.index, 1);
      state.leads.push(action.payload.lead);
      localStorage.setItem('Leads', JSON.stringify(state.leads));

      return {
        ...state
      };
    default: {
      return state;
    }
  }
};

export default leads;
