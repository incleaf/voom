import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import feed from './feed';
import main from './main';

const add2paper = combineReducers({
  feed,
  main,
  routing: routerReducer
});

export default add2paper;
