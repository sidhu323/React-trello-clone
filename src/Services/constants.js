const endPoints = {
  myBoards: '/1/members/me/boards',
  singleBoard: '/1/boards/{id}',
  listsOnBoard: '/1/boards/{id}/lists',
  cardsOnList: '/1/lists/{id}/cards',
  createNewCard: '/1/cards',
  particularCard: '/1/cards/{id}',
  cardChecklist: '/1/cards/{cardId}/checklists',
  checklistCheckItems: '/1/checklists/{checklistId}/checkItems',
  cardCheckItemUpdate: '/1/cards/{cardId}/checkItem/{checkItemId}',
  createChecklistCheckItem: '/1/checklists/{checklistId}/checkItems',
  createChecklist: '/1/checklists',
  
  deleteChecklist: '/1/checklists/{checklistId}',
  deleteChecklistCheckitem: '/1/checklists/{checklistId}/checkItems/{checkItemId}',
  deleteCard: '/1/cards/{cardId}',
  archiveList: '/1/lists/{listId}/closed',
  // delete
};

export default endPoints;
