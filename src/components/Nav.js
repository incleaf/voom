import React from 'react';
import { IndexLink, Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="wrapper">
          <h1><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>voom.kr</Link></h1>
          <ul>
            <li><Link to="/feed"><strong>검색</strong></Link></li>
            <li><Link to="/feed">통계</Link></li>
            <li><Link to="/feed">듀오</Link></li>
            <li><Link to="/feed">자게</Link></li>
            <li><Link to="/">영상</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {};
Nav.defaultProps = {};

export default Nav;
