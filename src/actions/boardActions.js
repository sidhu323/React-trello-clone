/* eslint-disable import/prefer-default-export */
import { FETCH_BOARDS, FETCH_PARTICULAR_BOARD } from './types';
import { getMyBoards, getSingleBoard } from '../Services/service';

export const fetchBoards = () => (dispatch) => {
  // return function (dispatch){
  getMyBoards()
    .then((data) => dispatch({
      type: FETCH_BOARDS,
      payload: data,
    }));
  // }
};
export const fetchBoardData = (id) => (dispatch) => {
  // return function (dispatch){
  getSingleBoard(id)
    .then((data) => dispatch({
      type: FETCH_PARTICULAR_BOARD,
      payload: data,
    }));
  // }
};
