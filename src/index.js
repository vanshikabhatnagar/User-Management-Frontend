import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/home' component={App} />
      <Redirect from='/' to='/home' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
