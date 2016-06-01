import React from 'react';
import { IndexLink, Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <h1>VOOM</h1>
        <ul>
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {};
Nav.defaultProps = {};

export default Nav;
