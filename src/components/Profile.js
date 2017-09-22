import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Layout from './Layout';
import FriendsList from './FriendsList';

var divStyle = {
    color : "#fff",
    fontSize: "2em",
}


class Profile extends Component {
    constructor(props){
        super(props)
        
    }
   render(){
    return <h1>Hello {this.props.match.params.profileId}!</h1>
   }
}

export default Profile;