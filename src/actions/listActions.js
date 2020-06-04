/* eslint-disable import/prefer-default-export */
import { FETCH_LISTS, CREATE_CARD } from './types';
import { getListsOnBoard, createCardOnList, deleteCardFromList } from '../Services/service';


export const fetchLists = (id) => (dispatch) => {
  // return function (dispatch){
  getListsOnBoard(id)
    .then((data) => dispatch({
      type: FETCH_LISTS,
      payload: data,
    }));
  // }
};

export const createNewCard = (idList, name) => (dispatch) => {
  // return function (dispatch){
  createCardOnList(idList, name)
    .then((data) => dispatch({
      type: CREATE_CARD,
      payload: data,
    }));
  // }
};

export const deleteSelectedCard = (cardList) => (dispatch) => {
  deleteCardFromList(cardList)
    .then((data) => dispatch({
      type: CREATE_CARD,
      payload: data,
    }));
};
