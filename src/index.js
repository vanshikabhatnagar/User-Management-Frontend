import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import SignIn from './SignIn';
import Axios from 'axios';

const Index = () => {
  Axios.interceptors.request.use(function (config) {
    let accessToken = localStorage.getItem('access-token') || ''
    config.headers.Authorization = `Bearer ${accessToken}`
    return config;
  })
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={App} />
        <Route path='/login' component={SignIn} />
        <Redirect from='/' to='/login' />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
