/* eslint-disable import/prefer-default-export */
import {
  FETCH_LISTS, CREATE_CARD, DELETE_CARD, ADD_CARD, CARDS_FOR_LIST, CARDS_CHECKLIST,
} from './types';
import {
  getListsOnBoard, createCardOnList, deleteCardFromList, getCardsOnList, getCardChecklists,
} from '../Services/service';


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
    payload: { listId, data },
  }));
};


export const createNewCard = (idList, name) => (dispatch) => {
  // return function (dispatch){
  createCardOnList(idList, name)
    .then((data) => dispatch({
      type: ADD_CARD,
      payload: { idList, data },
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

export const getChecklistsForCard = (cardId) => (dispatch) => {
  getCardChecklists(cardId)
    .then((data) => dispatch({
      type: CARDS_CHECKLIST,
      payload: { cardId, data },
    }));
};
