import React from 'react';
import { connect } from 'react-redux';

class User extends React.Component {
  render() {
    const { battleTag } = this.props.params;
    const data  = this.props.data[battleTag];

    if (!data) {

    }

    return (
      <div className="page-user">
      </div>
    );
  }
}

User.propTypes = {};
User.defaultProps = {};

export default connect(state => {
  return {...state.player};
})(User);
