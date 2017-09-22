import React from 'react';

import ReactDOM from 'react-dom';
import './css/friendlist.css';
import './js/myJs.js';
import Layout from './components/Layout';

//import {Router, Route, IndexRoute, hashHistory,IndexRedirect} from 'react-router';
import About from './components/About';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import Me from './components/Me';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

//ReactDOM.render(<Layout />, document.getElementById('root'));


ReactDOM.render(
<Router>
<Me/>
</Router>
, document.getElementById('root'));
//ReactDOM.render(
//<Router history={hashHistory}>
//    <Route path="/" component={Navigation}>
//        <IndexRoute component={Layout}/>
//        <Route path="layout" component={Layout}/> 
//        <Route path="about" component={About}/> 
//        <Route path="profile" component={Profile}/>
//    </Route>
//</Router>
//, document.getElementById('root'));
