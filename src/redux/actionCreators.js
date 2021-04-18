import {USD, GET_USERS} from "./types";


export function getCurrency() {
  return function (dispatch) {
    fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
      .then(Response => Response.json())
      .then(usd => usd.find(item => item.Cur_ID === 145))
      .then(usd => {
        console.log(usd);
        return usd
      })
      .then(usd => dispatch({
        type: USD,
        payload: usd
      }))
  }
}


export const getUsers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch(usersAction(users)))
}


export function usersAction(users) {
  return {
    type: GET_USERS,
    payload: users
  }
}