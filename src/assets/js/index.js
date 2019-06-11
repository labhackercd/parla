import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './routes/home';
import NotFound from './routes/not-found';


ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={NotFound} />
      </Switch>
  </ BrowserRouter>,
  document.getElementById('react-app'));