/* eslint-disable import/prefer-default-export */
import { FETCH_LISTS, CREATE_CARD, DELETE_CARD, ADD_CARD, CARDS_FOR_LIST } from './types';
import { getListsOnBoard, createCardOnList, deleteCardFromList, getCardsOnList } from '../Services/service';


export const fetchLists = (id) => (dispatch) => {
  // return function (dispatch){
  getListsOnBoard(id)
    .then((data) => dispatch({
      type: FETCH_LISTS,
      payload: data,
    }));
  // }
};

export const getCardsForList = (listId) => (dispatch) => {

  getCardsOnList(listId).then((data) => dispatch({
    type: CARDS_FOR_LIST,
    payload: { listId: listId, data: data },
  }));
};



export const createNewCard = (idList, name) => (dispatch) => {
  // return function (dispatch){
  createCardOnList(idList, name)
    .then((data) => dispatch({
      type: ADD_CARD,
      payload: { idList, data: data },
    }));
  // }
};

export const deleteSelectedCard = (listId, cardId) => (dispatch) => {
  deleteCardFromList(cardId)
    .then((data) => dispatch({
      type: DELETE_CARD,
      payload: { listId, cardId, data },
    }));
};