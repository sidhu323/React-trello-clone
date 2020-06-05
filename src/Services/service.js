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

// Create a new Cards on list
export const createCardOnList = (id, name) => new Promise((resolve, reject) => {
  crudData(endPoints.createNewCard, 'POST', '', { idList: id }, { name })
    .then((res) => res && resolve(res.json()))
    .catch((err) => reject(err));
});

// Update a list name
export const updateListName = (listId, name) => new Promise((resolve, reject) => {
  crudData(endPoints.updateListName, 'PUT', { id: listId }, { name }, { name })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// Get Specfic Card
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
export const updateCardCheckItem = (cardId, checkItemId, updateObject) => new Promise(
  (resolve, reject) => {
    crudData(endPoints.cardCheckItemUpdate, 'PUT', { cardId, checkItemId }, updateObject)
      .then((res) => res && resolve(res))
      .catch((err) => reject(err));
  },
);

// Update Card Name
export const updateCardName = (cardId, name) => new Promise((resolve, reject) => {
  crudData(endPoints.updateCardName, 'PUT', { id: cardId }, { name }, { name })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// update card checkitems state
export const createChecklistCheckItem = (checklistId, name) => new Promise((resolve, reject) => {
  crudData(endPoints.createChecklistCheckItem, 'POST', { checklistId }, { name })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// Delete card from a list
export const deleteCardFromList = (cardId) => new Promise((resolve, reject) => {
  crudData(endPoints.deleteCard, 'DELETE', { cardId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// Archive a list
export const archiveList = (listId) => new Promise((resolve, reject) => {
  crudData(endPoints.archiveList, 'PUT', { listId })
    .then((res) => res && resolve(res))
    .catch((err) => reject(err));
});

// Create a new Checklist
export const addNewChecklist = (cardId, checklistName) => new Promise((resolve, reject) => {
  crudData(endPoints.createChecklist, 'POST', {}, {}, { idCard: cardId, name: checklistName })
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

// Delete checklist
export const deleteChecklist = (checklistId) => new Promise((resolve, reject) => {
  crudData(endPoints.deleteChecklist, 'DELETE', { checklistId })
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

// Delete checkitem from checklist
export const deleteChecklistCheckItem = (checklistId, checkItemId) => new Promise(
  (resolve, reject) => {
    crudData(endPoints.deleteChecklistCheckitem, 'DELETE', { checklistId, checkItemId })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  },
);
