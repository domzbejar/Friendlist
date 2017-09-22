import React,  {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';



class Nav extends Component{
    render(){
        return(
            <ul>
            <li><Link to="/layout">layout</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/profile">profile</Link></li>
            </ul>
        );
    }
}

export default Nav;