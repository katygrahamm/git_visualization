import axios from "axios";
import { FETCH_USERS } from './types';

export const fetchUser = (username) => dispatch => {
    axios.get(`https://api.github.com/users/${username}/repos`
    ).then(function (response) {
      console.log('response from fetchUsers', response)
      dispatch({ type: FETCH_USERS, payload: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  };