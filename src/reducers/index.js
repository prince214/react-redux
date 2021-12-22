import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import postReducer from "./postReducer";

export default combineReducers({
    contacts: contactReducer,
    post: postReducer
})