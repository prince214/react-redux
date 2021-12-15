import { CREATE_CONTACT, GET_CONTACT } from "../constants/type"

export const addContacts = (contact) => ({
  type: CREATE_CONTACT,
      payload: contact
  })

  export const getContacts = (id) => ({
    type: GET_CONTACT,
    payload: id
  })