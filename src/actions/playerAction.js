import fetch from '../utils/fetch';

export const PLAYER_REQ_DATA = 'PLAYER_REQ_DATA';
export const PLAYER_REC_DATA = 'PLAYER_REC_DATA';

const SERVER_URL = (api) => `http://localhost:3000${api}`;

export const saveUserData = (battleTag, data, nickname, nicknameNumber) => ({
  type: PLAYER_REC_DATA,
  battleTag, data, nickname, nicknameNumber
});

export const reqPlayerData = (battleTag, nickname, nicknameNumber) => (dispatch, getState) => {
    dispatch({
      type: PLAYER_REQ_DATA,
      battleTag
    });

  return fetch(SERVER_URL(`/player/${battleTag}`))
    .then(response => response.json())
    .catch(e => new Error(e))
    .then(data => {
      dispatch(saveUserData(battleTag, data, nickname, nicknameNumber));
    })
};

