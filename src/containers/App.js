import React from 'react';
import Nav from '../components/Nav';
import Main from '../containers/Main';
import Footer from '../components/Footer';

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
        <Footer />
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
