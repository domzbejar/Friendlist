import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout';
import About from './About';
import Profile from './Profile';
import Nav from './Nav';
import FriendsList from './FriendsList';


import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';


const Me = () => (
    <div>
    <Nav />
    <Switch>
        <Route exact path="/layout" component={Layout} />
        <Route exact path="/about" component={About}/>
        <Route path="/profile" component={Profile}/>
    </Switch>
    </div>
)

export default Me;
