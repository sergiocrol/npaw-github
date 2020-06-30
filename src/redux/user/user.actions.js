import axios from 'axios';

import { UserActionTypes } from './user.types';

export const fetchUsersStart = () => ({
  type: UserActionTypes.FETCH_USERS_START
});

export const fetchUsersStartAsync = (user) => {
  return dispatch => {
    axios.get(`https://api.github.com/search/users?page=1&per_page=20&q=${user}`)
      .then(res => {
        dispatch(fetchUsersSuccess(res.data.items))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error))
      })
  }
}

export const fetchUsersSuccess = data => ({
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: data
});

export const fetchUsersFailure = error => ({
  type: UserActionTypes.FETCH_USERS_FAILURE,
  payload: error
});