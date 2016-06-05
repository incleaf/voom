import fetch from '../utils/fetch';
import { reqPlayerData } from './playerAction';
import { browserHistory } from 'react-router'

export const MAIN_REQ_SEARCH_LOG = 'MAIN_REQ_SEARCH_LOG';
export const MAIN_REC_SEARCH_LOG = 'MAIN_REC_SEARCH_LOG';
export const MAIN_REQ_FAVORITE = 'MAIN_REQ_FAVORITE';
export const MAIN_REC_FAVORITE = 'MAIN_REC_FAVORITE';
export const MAIN_REQ_VIDEO = 'MAIN_REQ_VIDEO';
export const MAIN_REC_VIDEO = 'MAIN_REC_VIDEO';
export const MAIN_REQ_POST = 'MAIN_REQ_POST';
export const MAIN_REC_POST = 'MAIN_REC_POST';
export const MAIN_REQ_RANKING = 'MAIN_REQ_RANKING';
export const MAIN_REC_RANKING = 'MAIN_REC_RANKING';
export const MAIN_REQ_SEARCH = 'MAIN_REQ_SEARCH';
export const MAIN_REC_SEARCH = 'MAIN_REC_SEARCH';

const SERVER_URL = (api) => `http://localhost:3000${api}`;

export const searchBattleTag = (battleTag, router) => (dispatch, getState) => {
  dispatch({
    type: MAIN_REQ_SEARCH,
    recents: getState().recents
  });
  return dispatch(reqPlayerData(battleTag))
    .then(responseCode => {
      dispatch({
        type: MAIN_REC_SEARCH, responseCode
      });
      router.push(`/player/${battleTag}`);
    })
};
