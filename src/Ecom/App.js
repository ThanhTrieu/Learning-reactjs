import React from "react";
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/partials/Header';
import SideBar from './components/partials/Sidebar';
import HomePage from './pages/HomePage';
import FooterEcom from './components/partials/Footer';
import FormLogin from './components/login/FormLogin';

export default function AppEcom() {

  return(
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Layout>
              <SideBar />
              <HomePage />
            </Layout>
            <FooterEcom />
          </Route>
          <Route path="/login">
            <FormLogin />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
  
}
