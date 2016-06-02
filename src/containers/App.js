import React from 'react';
import Nav from '../components/nav';
import Main from '../containers/main';

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
