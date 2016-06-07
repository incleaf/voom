import * as actions from '../actions/playerAction';

export default function userReducer(state = {
  /**
   * data structure (key is battle tag)
   * {
   *  data: {} // Received from server
   *  isFetching: true // Uses when render with caching data
   *  isFavorite: false
   * }
   */
  data: {},
  recents: [],
  favorites: []
}, action) {
  switch (action.type) {
    case actions.PLAYER_REQ_DATA:
      if (state.hasOwnProperty[action.battleTag]) {
        return {
          ...state,
          [action.battleTag]: {
            ...state.action.battleTag,
            isFetching: true
          }
        };
      } else {
        return {
          ...state,
          [action.battleTag]: {
            isFetching: true,
            isFavorite: false
          }
        };
      }
    case actions.PLAYER_REC_DATA:
      return {
        recents: state.recents.length < 10
          ? [...state.recents, action.battleTag]
          : [...state.recents.shift(), action.battleTag],
        data: {
          ...state.data,
          [action.battleTag]: {
            data: action.data,
            nickname: action.nickname,
            nicknameNumber: action.nicknameNumber,
            isFetching: false
          }
        }
      };
    default: return state;
  }
}
