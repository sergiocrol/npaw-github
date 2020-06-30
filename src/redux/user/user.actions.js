import axios from 'axios';

import { UserActionTypes } from './user.types';

export const fetchUsersStart = () => ({
  type: UserActionTypes.FETCH_USERS_START
});

export const fetchUsersStartAsync = (user) => {
  return dispatch => {
    axios.get(`https://api.github.com/search/users?page=1&per_page=20&q=${user}`)
      .then(res => {
        const users = res.data.items;
        const newUsers = users.map(user => axios.get(`https://api.github.com/users/${user.login}`, {
          headers: {
            authorization: "token 7ab613522e71f24fdb04b8c2fb9c24e9a91c0062"
          }
        })
          .then(res => {
            user.followers = res.data.followers;
            return res;
          }))
        Promise.all(newUsers).then(res => {
          console.log(res)
          dispatch(fetchUsersSuccess(res))
        })
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