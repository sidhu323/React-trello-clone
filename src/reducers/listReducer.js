import { bindActionCreators } from 'redux';
import { FETCH_LISTS } from '../actions/types';

const initialState = {
  lists: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LISTS: {
      return {
        ...state,
        lists: action.payload,
      };
    }
    default:
      return state;
  }
}
