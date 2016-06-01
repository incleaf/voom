import { combineReducers } from 'redux';

import {
  FEED_REC_ADDIT_INFO,
  FEED_REC_BAND_AD,
  FEED_REC_NORMAL_ADS,
  FEED_REC_SPECIAL_ADS,
  FEED_REQ_ADDIT_INFO,
  FEED_REQ_BAND_AD,
  FEED_REQ_NORMAL_ADS,
  FEED_REQ_SPECIAL_ADS
} from '../actions';

const adDefaultState = {
  normal: {
    isFetching: false,
    item: []
  },
  special: {
    isFetching: false,
    item: []
  },
  band: {
    isFetching: false,
    item: null
  }
};

function ad(state = adDefaultState, action) {
  switch (action.type) {
    case FEED_REQ_SPECIAL_ADS:
      return {
        ...state,
        special: {
          ...state.special,
          isFetching: true
        }
      };
    case FEED_REC_SPECIAL_ADS:
      return {
        ...state,
        special: {
          item: action.item,
          isFetching: false
        }
      };
    case FEED_REQ_NORMAL_ADS:
      return {
        ...state,
        normal: {
          ...state.normal,
          isFetching: true
        }
      };
    case FEED_REC_NORMAL_ADS:
      return {
        ...state,
        normal: {
          item: action.item,
          isFetching: false
        }
      };
    case FEED_REQ_BAND_AD:
      return {
        ...state,
        band: {
          ...state.band,
          isFetching: true
        }
      };
    case FEED_REC_BAND_AD:
      return {
        ...state,
        band: {
          item: action.item,
          isFetching: false
        }
      };
    default: return state;
  }
}

export default combineReducers({
  ad
});
