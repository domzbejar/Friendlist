import React from 'react';

import ReactDOM from 'react-dom';
import './css/friendlist.css';
import './js/myJs.js';
import Layout from './components/Layout';

import {Router, Route, IndexRoute, hashHistory,IndexRedirect} from 'react-router';
import {Link} from 'react-router';
import About from './components/About';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

ReactDOM.render(<Layout />, document.getElementById('root'));

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
