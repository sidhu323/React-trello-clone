import { combineReducers } from 'redux';
import boardsReducer from './boardReducer';
import listReducer from './listReducer';

export default combineReducers({
  allBoards: boardsReducer,
  allLists: listReducer,
});
