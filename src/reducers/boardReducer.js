import { FETCH_BOARDS, FETCH_PARTICULAR_BOARD } from '../actions/types';

const initialState = {
  boards: [],
  particularBoard: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARDS: {
      return {
        ...state,
        boards: action.payload,
      };
    }
    case FETCH_PARTICULAR_BOARD: {
      return {
        ...state,
        particularBoard: action.payload,
      };
    }
    default:
      return state;
  }
}
