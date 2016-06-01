import React from 'react';
import { IndexLink, Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
