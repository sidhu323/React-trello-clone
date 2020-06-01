/* eslint-disable import/prefer-default-export */
import { FETCH_BOARDS, NEW_BOARDS } from './types';
import { getMyBoards } from '../Services/service';

export const fetchBoards = (id) => (dispatch) => {
  // return function (dispatch){
  getMyBoards()
    .then((data) => dispatch({
      type: FETCH_BOARDS,
      payload: data,
    }));
  // }
};
