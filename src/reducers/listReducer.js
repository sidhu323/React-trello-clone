import { bindActionCreators } from 'redux';
import {
  FETCH_LISTS, ADD_CARD, DELETE_CARD, CARDS_FOR_LIST,
} from '../actions/types';

const initialState = {
  lists: [],
  newCard: {},
  deleteCard: {},
  listsOfCards: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LISTS: {
      return {
        ...state,
        lists: action.payload,
      };
    }
    case ADD_CARD: {
      const { idList, data } = action.payload;
      const list = { ...state.listsOfCards };
      if (action.payload.data) {
        console.log('NEW_JSON', data);
        list[idList].push(data);
      }
      return { ...state, listsOfCards: list };
    }
    case DELETE_CARD: {
      const list = { ...state.listsOfCards };
      if (action.payload.data.status === 200) {
        list[action.payload.listId] = [...list[action.payload.listId].filter((cardID) => cardID.id !== action.payload.cardId)];
      }
      return { ...state, listsOfCards: list };
    }
    case CARDS_FOR_LIST: {
      const list = { ...state.listsOfCards };
      // list.push(action.payload);
      list[action.payload.listId] = action.payload.data;
      return {
        ...state,
        listsOfCards: list,
      };
    }

    default:
      return state;
  }
}
