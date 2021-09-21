export const LEADS_ROUTE = '/leads';
export const LOGIN_ROUTE = '/';
export const OVERVIEW_ROUTE = '/overview';

export const SESSION = 'session';
export const PENDING = 'pending';
export const ACTIVE = 'active';
export const INACTIVE = 'inactive';
export const POSITIVE = 'positive';
export const NEUTRAL = 'neutral';
export const NEGATIVE = 'not a lead';

export const OPTIONS = [
  {
    id: POSITIVE,
    title: 'Positive replay'
  },
  {
    id: NEUTRAL,
    title: 'Neutral replay'
  },
  {
    id: NEGATIVE,
    title: 'Not a lead'
  }
];

export const SESSION_TIME = 120;
