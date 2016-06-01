import fetch from '../utils/fetch';

export const SIGNUP_ACCOUNT = 'SIGNUP_ACCOUNT';
export const SIGNUP_AUTHORIZE = 'SIGNUP_AUTHORIZE';
export const SIGNUP_COMPLETE = 'SIGNUP_COMPLETE';
export const SIGNUP_MOVE_PAGE = 'SIGNUP_MOVE_PAGE';
export const SIGNUP_CLEAR_ALL = 'SIGNUP_CLEAR_ALL';

export function setSignupData(type, data) {
  return { type, data };
}

export const FEED_REQ_SPECIAL_ADS = 'FEED_REQ_SPECIAL_ADS';
export const FEED_REC_SPECIAL_ADS = 'FEED_REC_SPECIAL_ADS';
export const FEED_REQ_NORMAL_ADS = 'FEED_REQ_NORMAL_ADS';
export const FEED_REC_NORMAL_ADS = 'FEED_REC_NORMAL_ADS';
export const FEED_REQ_BAND_AD = 'FEED_REQ_BAND_AD';
export const FEED_REC_BAND_AD = 'FEED_REC_BAND_AD';
export const FEED_REQ_ADDIT_INFO = 'FEED_REQ_ADDIT_INFO';
export const FEED_REC_ADDIT_INFO = 'FEED_REC_ADDIT_INFO';

export const fetchSpecialAds = () => (dispatch, getState) => dispatch(fetchItem({
  req: FEED_REQ_SPECIAL_ADS,
  rec: FEED_REC_SPECIAL_ADS
}, '/phase2/api/ads/special/', json => json.response));
export const fetchNormalAds = () => (dispatch, getState) => dispatch(fetchItem({
  req: FEED_REQ_NORMAL_ADS,
  rec: FEED_REC_NORMAL_ADS
}, '/phase2/api/ads/normal/', json => json.response.ads));

function fetchItem(actions, api, itemCb) {
  return (dispatch) => {
    dispatch({type: actions.req});
    return fetch(`http://${document.location.hostname}:5000${api}`)
      .then(response => response.json())
      .then(json => {
        dispatch({type: actions.rec, item: itemCb(json)})
      });
  }
}
