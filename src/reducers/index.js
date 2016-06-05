import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import feed from './feed';
import main from './mainReducer';
import player from './playerReducer';

const add2paper = combineReducers({
  feed,
  main,
  player,
  routing: routerReducer
});

export default add2paper;
