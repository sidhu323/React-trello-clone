/* eslint-disable import/prefer-default-export */
import { FETCH_LISTS } from './types';
import { getListsOnBoard } from '../Services/service';


export const fetchLists = (id) => (dispatch) => {
  // return function (dispatch){
  getListsOnBoard(id)
    .then((data) => dispatch({
      type: FETCH_LISTS,
      payload: data,
    }));
  // }
};


// export function fetchLists(postId) {
//   return function (dispatch, getState) {
//    getListsOnBoard(postId).then((data) => {
//       // dispatch
//       dispatch({

//         type: FETCH_LISTS,
//         payload: data,
//       });
//     });
//   };
// }
