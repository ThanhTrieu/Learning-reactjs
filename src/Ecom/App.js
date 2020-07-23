import React,  { Suspense } from "react";
import { Spin, Icon } from 'antd';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './stores/configStore';


import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  checkAuthorizationVersion2,
} from './libs/CheckAuth';

import './App.css';

const FormLogin = React.lazy(() => import('./components/login/FormLogin'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const initialState = {};
const { store, persistor, history } = configureStore(initialState);


export default function AppEcom() {
  return(
    <React.Fragment>
      <Provider store={store}>
        <PersistGate loading={
          <div className="warpper-Loading">
            <Spin indicator={antIcon} />
          </div>
          } 
          persistor={persistor}
        >
          <ConnectedRouter history={history}>
            <Suspense fallback={
              <div className="warpper-Loading">
                <Spin size="large" />
              </div>
            }>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                  path="/home"
                  component={HomePage}
                />
                <Route path="/cart" component={CartPage} />
                <Route 
                  exact
                  path="/login"
                  render={() => (
                    checkAuthorizationVersion2() ? (<Redirect to="/" />) : (<FormLogin />)
                  )}
                />
              </Switch>
            </Suspense>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </React.Fragment>
  )
}
