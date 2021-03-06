import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
 
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        {/* Provider组件，只能接受一个子元素 */}
        <Provider store={store}>
          {/* Router的组件，只能接受一个子元素 */}
          <BrowserRouter>
            {/* Route：路由规则 */}
            {/*exact，这表明path需要完全匹配 */}
            <Header />
            <Route path='/' exact component={ Home }></Route>
            <Route path='/detail/:id' component={ Detail }></Route>
            <Route path='/login' component={ Login }></Route>
            <Route path='/write' component={ Write }></Route>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
