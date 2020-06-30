import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  users: null,
  isFetching: false,
  errorMessage: undefined
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS_START:
      return {
        ...state,
        isFetching: true
      }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload
      }
    case UserActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMesage: action.payload
      }
    default:
      return state
  }
}

export default userReducer;