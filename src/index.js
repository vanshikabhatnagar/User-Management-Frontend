import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Auth from './Auth'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/home' component={App} />
      <Route path='/login' component={Auth} />
      <Redirect from='/' to='/login' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
