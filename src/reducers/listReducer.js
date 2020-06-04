import { bindActionCreators } from 'redux';
import { FETCH_LISTS, CREATE_CARD, DELETE_CARD } from '../actions/types';

const initialState = {
  lists: [],
  newCard: {},
  deleteCard: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LISTS: {
      return {
        ...state,
        lists: action.payload,
      };
    }
    case CREATE_CARD: {
      return {
        ...state,
        newCard: action.payload,
      };
    }
    case DELETE_CARD: {
      return {
        ...state,
        newCard: action.payload,
      };
    }

    default:
      return state;
  }
}
