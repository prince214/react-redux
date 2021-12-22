import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../constants/type";

const initialState = {
  posts: [],
  post: null,
};
export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case GET_POSTS:
      return {
        ...state,
        posts:payload
      }
    case GET_POST:
      return {
        ...state,
        post: payload,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((postItem) =>
          postItem.id == payload.id ? payload : postItem
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((postItem) => postItem.id != payload),
      };
    default:
      return state;
  }
};
