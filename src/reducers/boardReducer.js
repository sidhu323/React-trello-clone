import { bindActionCreators } from 'redux';
import { FETCH_BOARDS, NEW_BOARDS } from '../actions/types';

const initialState = {
  boards: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARDS: {
      return {
        ...state,
        boards: action.payload,
      };
    }
    default:
      return state;
  }
}
