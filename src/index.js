import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import ConfigureStore from './config_store';
import { Redirect } from 'react-router';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles.css';

import ListNews from './container/listNews';
import DetailNews from './container/detailNews';
import ProtectPage from './container/protectPage';
import ErrorPage from './container/404Page';


const store = ConfigureStore();

// const ListNews = lazy(() => import('./container/listNews'));
// const DetailNews = lazy(() => import('./container/detailNews'));
// const ErrorPage = lazy(() => import('./container/404Page'));
// const ProtectPage = lazy(() => import('./container/protectPage'));

function PrivateRoute() {
  const auth = true;
  return (
    auth ? <ListNews/> : 
    <div>
      You don't have permission
      <Redirect
            to={{
              pathname: "/",
            }}
          />
    </div>

  );
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={ListNews} />
            <Route path="/detail/:id" component={DetailNews} />
            <PrivateRoute path="/protected" component={ProtectPage} />
            <Route component={ErrorPage}/>
            <Redirect from="/old" to="/new" />
          </Switch>
        </Suspense>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

