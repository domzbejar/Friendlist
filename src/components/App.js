import React, {Component} from 'react';
import FriendsList from './FriendsList';
//import Api from './Api';
//import dada from './dada';

import $ from 'jquery';

class App extends Component{
    constructor(){
        super();
        this.state = {
            todos:[]
        };
    }
    
    GetAll(){
        $.ajax({
        type: 'GET',
        url: 'http://rest.learncode.academy/api/domz/friends',
        success: function(data) { 
          this.setState({
                todos : data
          })
        }.bind(this),
      });   
    }
    
    FetchAll(){
        var url = "http://rest.learncode.academy/api/domz/friends";
        return fetch(url).then((res)=>res.json());
    }
    
    
    componentWillMount(){
        //this.GetAll();
        this.FetchAll().then((res)=>{
            this.setState({
                todos : res,
            })
        });
       
    }
    
    
    render(){
        //console.log(this.state.todos);
        return(
            <div className="app">
                <h1>Hello!</h1>
                <FriendsList data={this.state.todos}/>
            </div>
        );
    }
}

export default App;