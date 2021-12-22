import {
  CLEAR_CONTACT,
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../constants/type";

export const addContacts = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

export const getContacts = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

export const updateContact = (data) => ({
  type: UPDATE_CONTACT,
  payload: data,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});

export const clearSelectedContact = () => ({
  type: CLEAR_CONTACT,
});

export const deleteSelectedContact = () => ({
  type: DELETE_SELECTED_CONTACT,
});
