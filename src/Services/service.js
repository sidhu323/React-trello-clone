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
export const CreateCardOnList = (id,name) => new Promise((resolve, reject) => {
    crudData(endPoints.createNewList , 'POST','',{ idList: id },{name})
      .then((res) => res && resolve(res))
      .catch((err) => reject(err));
  });

//Get Specfic Card

export const getparticularCard = (listId) => new Promise((resolve, reject) => {
    crudData(endPoints.cardsOnList, 'GET', { id: listId })
      .then((res) => res && resolve(res))
      .catch((err) => reject(err));
  });


// get checklists on a card
export const getCardChecklists = (cardId) => new Promise((resolve, reject) => {
    crudData(endPoints.cardChecklist, 'GET', { cardId })
      .then((res) => res && resolve(res))
      .catch((err) => reject(err));
  });


  // get Checklist checkitems
export const getChecklistCheckitems = (checklistId) => new Promise((resolve, reject) => {
    crudData(endPoints.cardChecklist, 'GET', { checklistId })
      .then((res) => res && resolve(res))
      .catch((err) => reject(err));
  });
  

  // update card checkitems state
export const updateCardCheckItem = (cardId, checkItemId, updateObject) => new Promise((resolve, reject) => {
    crudData(endPoints.cardCheckItemUpdate, 'PUT', { cardId, checkItemId }, updateObject)
      .then((res) => res && resolve(res))
      .catch((err) => reject(err));
  });


  
// update card checkitems state
export const createChecklistCheckItem = (checklistId, name) => new Promise((resolve, reject) => {
    crudData(endPoints.createChecklistCheckItem, 'POST', { checklistId }, {name})
      .then((res) => res && resolve(res))
      .catch((err) => reject(err));
  });

  