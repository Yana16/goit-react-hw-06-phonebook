import { v4 as uuidv4 } from 'uuid';
import { createAction } from 'react-redux';

import { ADD_CONTACT, DELETE_CONTACT } from '../redux/types';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: uuidv4(),
      ...payload,
    },
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};
