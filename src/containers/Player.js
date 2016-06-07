import React from 'react';
import { connect } from 'react-redux';
import TiStarOutline from 'react-icons/lib/ti/star-outline';
import TiStar from 'react-icons/lib/ti/star';

class Player extends React.Component {
  renderCoreItems(data) {
    if (!data) return;
    const playerData = data.data;

    return (
      <div className="user-core-items">
        <div className="user-core-item">
          <div className="title">랭킹</div>
          <div className="value">983,551위</div>
        </div>
        <div className="user-core-item">
          <div className="title">점수</div>
          <div className="value">{playerData.career_stats.game.score}점</div>
        </div>
        <div className="user-core-item">
          <div className="title">승률</div>
          <div className="value">
            {(playerData.career_stats.game.won / playerData.career_stats.game.played) * 100}%
          </div>
        </div>
        <div className="user-core-item">
          <div className="title">K/D</div>
          <div className="value">3.12</div>
        </div>
        <div className="user-core-item">
          <div className="title">승리 횟수</div>
          <div className="value">4,285회</div>
        </div>
        <div className="user-core-item">
          <div className="title">패배 횟수</div>
          <div className="value">2,765회</div>
        </div>
      </div>

    );
  }

  render() {
    const { nickname, nicknameNumber } = this.props.params;
    const data  = this.props.data[`${nickname}#${nicknameNumber}`];

    return (
      <div className="page-user">
        <div className="user-core">
          <div className="wrapper">
            <div className="user-battletag">
              {nickname}<span className="user-battletag-num">#{nicknameNumber}</span>
              <button className="user-battletag-favorite">
                {data && data.isFavorite ? <TiStar /> : <TiStarOutline />}
              </button>
            </div>
            {this.renderCoreItems(data)}
            {
              data ? null :
              <div className="loading-wrapper">
                <div className="loading-icon"></div>
              </div>
            }
          </div>
        </div>
      {
        data ?
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
