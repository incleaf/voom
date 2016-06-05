import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    const { battleTag } = this.props.params;

    const data  = this.props.data[battleTag];

    return (
      <div className="page-user">
        <div className="user-core">
          <div className="wrapper">
            <div className="user-battletag">
              incleaf<span className="user-battletag-num">#3949</span>
            </div>
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
