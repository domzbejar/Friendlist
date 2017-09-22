import React,  {Component} from 'react';
import {Link} from 'react-router';


class Navigation extends Component{
    render(){
        return(
            <div>
                <ul>
                <Link to="layout">home</Link>
                <Link to="about">about</Link>
                <Link to="profile">profile</Link>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default Navigation;