import React from 'react';
import { render } from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router'
import { createHistory } from 'history';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Main from './containers/Main';
import Login from './containers/Login';
import Feed from './containers/Feed';
import App from './containers/App';
import reducers from 'reducers';
import './style/index.scss';

const store = configureStore();

const browserHistory = useRouterHistory(createHistory)({
  // basename: '/phase2/mobile/test/index'
});
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/feed" component={Feed} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('voom'));
