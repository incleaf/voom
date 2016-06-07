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
  const recents  = getState().player.recents;
  const nickname = battleTag.match(/.+?(?=#)/)[0];
  const nicknameNumber = battleTag.match(/#(.*)/)[1];
  console.log(nickname, nicknameNumber);
  let isPageNavigated = false;

  dispatch({ type: MAIN_REQ_SEARCH });

  // 현재 state 트리에서 캐싱해둔 최근에 검색한 배틀태그를 불러와
  // 매칭되는 아이템이 있으면 바로 화면에 렌더링한다
  for (const item of recents) {
    if (item === battleTag) {
      isPageNavigated = true;
      router.push(`/player/${nickname}/${nicknameNumber}`);
    }
  }

  return dispatch(reqPlayerData(battleTag, nickname, nicknameNumber))
    .then(responseCode => {
      dispatch({
        type: MAIN_REC_SEARCH, responseCode
      });
      if (!isPageNavigated) {
        router.push(`/player/${nickname}/${nicknameNumber}`);
      }
    })
};
