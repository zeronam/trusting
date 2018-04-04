import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import ConfigureStore from './config_store';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles.css';

import ListNews from './container/listNews';

const store = ConfigureStore();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/" component={ListNews} />
              </Switch>
            </div>
      </BrowserRouter>
    </Provider>, document.getElementById('root'));



registerServiceWorker();

