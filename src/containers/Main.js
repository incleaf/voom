import React from 'react';
import Nav from '../components/Nav';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        { this.props.children }
      </div>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
