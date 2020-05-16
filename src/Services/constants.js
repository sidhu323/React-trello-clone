const endPoints = {
    myBoards: '/1/members/me/boards',
    singleBoard: '/1/boards/{id}',
    listsOnBoard: '/1/boards/{id}/lists',
    cardsOnList: '/1/lists/{id}/cards',
    createNewList:'/1/cards',
    particularCard:'/1/cards/{id}',
    cardChecklist: '/1/cards/{cardId}/checklists',
    checklistCheckItems: ' /1/checklists/{checklistId}/checkItems',
    cardCheckItemUpdate: '/1/cards/{cardId}/checkItem/{checkItemId}',
    createChecklistCheckItem: '/1/checklists/{checklistId}/checkItems'

  };
  
  export default endPoints;
  