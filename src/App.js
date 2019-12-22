import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import store from './store/index';
 
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <Provider store={store}>
          <Header />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
