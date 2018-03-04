import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Router, Route, hashHistory} from 'react-router';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component= {Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
