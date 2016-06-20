import React from 'react';
import { connect } from 'react-redux';

import TiStarOutline from 'react-icons/lib/ti/star-outline';
import TiStar from 'react-icons/lib/ti/star';

import { PlayerDataSelector } from '../utils/PlayerDataSelector';
import { reqPlayerData } from '../actions/playerAction';

class Player extends React.Component {
  renderCoreItems(playerInfo) {
    if (!playerInfo) return;
    const getPlayerData = PlayerDataSelector(playerInfo.data, 'kr');
    console.log(getPlayerData(
      ['user_status', 'elimination'],
      ['user_status', 'ranking'],
      'winningRate',
      'killDeathRatio',
      ['career_stats', 'game', 'won'],
      'loseGame'
    ));
    return (
      <div className="user-core-items">
        {
          getPlayerData(
            ['user_status', 'ranking'],
            ['career_stats', 'game', 'score'],
            'killDeathRatio',
            'winningRate',
            ['career_stats', 'game', 'won'],
            'loseGame'
          ).map((item, index) => (
            <div key={index} className="user-core-item">
              <div className="title">{item.key}</div>
              <div className="value">{item.value}</div>
            </div>
          ))
        }
      </div>
    );
  }

  componentDidMount() {
    const { nickname, nicknameNumber } = this.props.params;
    const playerInfo  = this.props.playerInfos[`${nickname}#${nicknameNumber}`];

    if (!playerInfo) {
      this.props.dispatch(reqPlayerData(nickname, nicknameNumber));
    }
  }

  render() {
    const { nickname, nicknameNumber } = this.props.params;
    const playerInfo  = this.props.playerInfos[`${nickname}#${nicknameNumber}`];
    
    return (
      <div className="page-user">
        <div className="user-core">
          <div className="wrapper">
            <div className="user-battletag">
              {nickname}<span className="user-battletag-num">#{nicknameNumber}</span>
              <button className="user-battletag-favorite">
                {
                  playerInfo && playerInfo.isFavorite
                  ? <TiStar />
                  : <TiStarOutline />
                }
              </button>
            </div>
            {this.renderCoreItems(playerInfo)}
            {
              playerInfo ? null :
              <div className="loading-wrapper">
                <div className="loading-icon"></div>
              </div>
            }
          </div>
        </div>
      {
        playerInfo ?
        <div className="user-statistics">

        </div>
        : null
      }

      </div>
    );
  }
}

Player.propTypes = {};
Player.defaultProps = {};

export default connect(state => {
  return {...state.player};
})(Player);
