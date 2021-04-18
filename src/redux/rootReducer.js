import {ADD_TODO_FAILURE, ADD_TODO_STARTED, ADD_TODO_SUCCESS, GET_USERS, USD} from "./types";



const initialState = {
  loading: false,
  todos: {
    date: 1,
    usd: 1
  },
  users: [],
  error: null
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: {...state.todos, ...action.payload}
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case USD:
      console.log(action.payload)
      return {
        ...state,
        todos:{...state.todos,date:action.payload.Date,usd:action.payload.Cur_OfficialRate}
      }
    case GET_USERS:
      return {
        ...state,
        users:action.payload
      }
    default:
      return state;
  }
}
