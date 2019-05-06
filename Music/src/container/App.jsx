import React, { Component } from 'react';
import Header from 'components/header/header';
import Layout from 'components/layout';
import { HashRouter as Router } from 'react-router-dom'
import RouteView from 'router'

import 'common/css/style.scss';
import 'common/fonts/iconfont.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Layout>
          <Router>
            <RouteView />
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
