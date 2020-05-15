import endPoints from './constants';
import crudData from '../utils/apiServices';

// get all my boards
export const getMyBoards = () => new Promise((resolve, reject) => {
  crudData(endPoints.myBoards, 'GET')
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get single board
export const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  crudData(endPoints.singleBoard, 'GET', { id: boardId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get lists on a board
export const getListsOnBoard = (boardId) => new Promise((resolve, reject) => {
  crudData(endPoints.listsOnBoard, 'GET', { id: boardId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// get cards on a list
export const getCardsOnList = (listId) => new Promise((resolve, reject) => {
  crudData(endPoints.cardsOnList, 'GET', { id: listId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

//Create a new Cards on list
export const CreateCardOnList = (id) => new Promise((resolve, reject) => {
    crudData(endPoints.createNewList , 'POST',{ idList: id })
      .then((res) => res && resolve(res))
      .catch((err) => reject(err));
  });

