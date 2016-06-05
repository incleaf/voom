import { combineReducers } from 'redux';
import defaultData from './mainDefaultData';
import * as actions from '../actions/mainAction';
import { saveUserData } from '../actions/playerAction';

const commonState = (key) => ({
  data: defaultData[key] || [],
  isFetching: true
});

function searchLogReducer(state = commonState('searchLog'), action) {
  switch (action.type) {
    case actions.MAIN_REQ_SEARCH_LOG:
      return {
        ...state, isFetching: true
      };
    case actions.MAIN_REC_SEARCH_LOG:
      return {
        data: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}

function favoriteReducer(state = commonState('favorite'), action) {
  switch (action.type) {
    case actions.MAIN_REQ_FAVORITE:
      return {
        ...state, isFetching: true
      };
    case actions.MAIN_REC_FAVORITE:
      return {
        data: action.data,
        isFetching: false
      };
    default: return state;
  }
}

function videoReducer(state = commonState('video'), action) {
  switch (action.type) {
    case actions.MAIN_REQ_VIDEO:
      return {
        ...state, isFetching: true
      };
    case actions.MAIN_REC_VIDEO:
      return {
        data: action.data,
        isFetching: false
      };
    default: return state;
  }
}

function postReducer(state = commonState('post'), action) {
  switch (action.type) {
    case actions.MAIN_REQ_POST:
      return {
        ...state, isFetching: true
      };
    case actions.MAIN_REC_POST:
      return {
        data: action.data,
        isFetching: false
      };
    default: return state;
  }
}

function rankingReducer(state = commonState('ranking'), action) {
  switch (action.type) {
    case actions.MAIN_REQ_RANKING:
      return {
        ...state, isFetching: true
      };
    case actions.MAIN_REC_RANKING:
      return {
        data: action.data,
        isFetching: false
      };
    default: return state;
  }
}

function searchReducer(state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case actions.MAIN_REQ_SEARCH:
      // 현재 state 트리에서 캐싱해둔 최근에 검색한 배틀태그를 불러와
      // 매칭되는 아이템이 있으면 바로 화면에 렌더링하고 새 데이터를 받아오면
      // 화면을 업데이트한다.
      if (action.recents) {
        for (const item of action.recents) {
          if (item === action.battleTag) {
            // TODO: 캐싱된 데이터로 미리 렌더링
          }
        }
      }
      return { isFetching: true };
    case actions.MAIN_REC_SEARCH:
      if (action.responseCode === 404) {
        // TODO: 애니메이션으로 처리
        alert('존재하지 않는 배틀태그입니다.');
      } else if (action.responseCode === 200) {
        alert('검색 완료');
        //action.dispatch(saveUserData(action.data));
        // TODO: 렌더링하는 액션 DISPATCH
      }
      return { isFetching: false };
    default: return state;
  }
}

export default combineReducers({
  searchLog: searchLogReducer,
  favorite: favoriteReducer,
  video: videoReducer,
  post: postReducer,
  ranking: rankingReducer,
  search: searchReducer
});
