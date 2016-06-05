import React from 'react';
import Nav from '../components/Nav';
import Main from '../containers/Main';
import Footer from '../components/Footer';
import { withRouter } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />
        {
          this.props.children
          ? this.props.children
          : <Main history={this.props.history}/>
        }
        <Footer />
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      children: nextProps.children
    });
  }

  componentDidMount() {
    //debugger;
  }
}

App.propTypes = {};
App.defaultProps = {};

export default withRouter(App);

App.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};
