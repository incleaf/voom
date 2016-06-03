import React from 'react';
import Nav from '../components/Nav';
import Main from '../containers/Main';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />
        {
          this.props.children
          ? this.props.children
          : <Main />
        }
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
