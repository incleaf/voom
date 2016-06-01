import { SIGNUP_ACCOUNT, SIGNUP_AUTHORIZE, SIGNUP_COMPLETE, SIGNUP_MOVE_PAGE, SIGNUP_CLEAR_ALL } from 'actions';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import feed from './feed';

const signupDefaultState = {
  currentPage: 'account',
  account: {
    id: '',
    pw: ''
  },
  authorize: {
    mobile: '',
    pic: ''
  }
};

function signup(state = signupDefaultState, action) {
  switch (action.type) {
    case SIGNUP_ACCOUNT:
      return {
        ...state,
        account: action.data
      };
    case SIGNUP_AUTHORIZE:
      return {
        ...state,
        authorize: action.data
      };
    case SIGNUP_COMPLETE:
      return {
        ...state,
        complete: action.data
      };
    case SIGNUP_MOVE_PAGE:
      return {
        ...state,
        currentPage: action.data
      };
    case SIGNUP_CLEAR_ALL:
      return signupDefaultState;
    default: return state;
  }
}

const add2paper = combineReducers({
  signup,
  feed,
  routing: routerReducer
});

export default add2paper;
